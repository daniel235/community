/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { AsyncStorage, ActivityIndicator } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AuthContext } from './components/context';

import {
  SafeAreaView,
  StyleSheet, 
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SignIn from './components/signIn';
import HomeScreen from './components/home';
import Profile from './components/profile';
//import { SignedOut, SignedIn } from './components/router';

const Drawer = createDrawerNavigator();

const App = () => {
  
  //check for auth token
  //const [isLoading, setIsLoading] = React.useState(true);
  //const [userToken, setUserToken] = React.useState(null);
  
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  };

  const loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          isLoading: false,
        };
      case 'RETRIEVE_TOKEN':
        return {
          ... prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ... prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  }

  //create reducer
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIns: (userName, password) => {
      //setUserToken('rando');
      //setIsLoading(false);
      //api call here
      let userToken;
      userName = null;
      userToken = 'rando';
      dispatch({type: 'LOGIN', id: userName, token: userToken});
    },
    signOut: () => {
      //setUserToken('rando');
      //setIsLoading(false);
      dispatch({type: 'LOGOUT'})
    },
    signUp: () => {
      setUserToken('rando');
      setIsLoading(false);
    },

  }));

  useEffect(() => {
    setTimeout(() => {
      //setIsLoading(false);
      //grab from async storage
      dispatch({type: 'RETRIEVE_TOKEN', token: 'rando'})
    }, 1000);
  }, []);


  if(LoginState.isLoading){
    return(
      <AuthContext.Provider value={authContext}>
        <SignIn/> 
      </AuthContext.Provider>
    );
  };
  
  return(
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { LoginState.userToken != null ? (
          <Drawer.Navigator>
            <Drawer.Screen name="home" component={HomeScreen}/>
            <Drawer.Screen name="profile" component={Profile}/>
          </Drawer.Navigator>
        ) : (
          <SignIn/>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
  
}

export default App;
