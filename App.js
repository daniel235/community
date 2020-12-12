/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { AsyncStorage, ActivityIndicator } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import SignUp from './components/signup';
import HomeScreen from './components/home';
import Profiles from './components/profile';
import settings from './components/settings';
import MyStack from './components/navigate';

import { signInApi, signUpApi } from './api_functions/api';
//import { SignedOut, SignedIn } from './components/router';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
        console.log("login dispatch");
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
        console.log("logout dispatch");
        return {
          ... prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        console.log("register dispatching");
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
  const [id, setId] = useState(0)
  const authContext = React.useMemo(() => ({
    signIns: async(userName, password) => {
      let userToken, users;
      userToken = null;
      //api call here
      users = await signInApi(userName, password);
      userToken = users.userId;
      try{
        await AsyncStorage.setItem('userToken', userToken);
        await AsyncStorage.setItem('userId', userToken);
        await AsyncStorage.setItem('userName', users.email);
        dispatch({type: 'LOGIN', id: userName, token: userToken});
        //set id
        setId(userToken);
      } catch(e) {
        console.log(e);
      }
      //dispatch({type: 'LOGIN', id: userName, token: userToken});
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('userId');
        await AsyncStorage.removeItem('userName');
        setId(0);
      } catch(e) {
        console.log(e);
      }
      dispatch({type: 'LOGOUT'});
    },
    signUps: async(userName, password) => {
      let userToken, user;
      userToken = 'rando';
      userId = '';
      //api call
      user = await signUpApi(userName, password);
      userToken = user.userId;

      try {
        await AsyncStorage.setItem('userToken', userToken);
        await AsyncStorage.setItem('userId', userId);
        setId(userId);
        dispatch({type: 'REGISTER', id : userName, token: userToken});
      } catch(e){
        console.log(e);
      }
    }
  }));

  useEffect(() => {
    setTimeout(async() => {
      //grab from async storage
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e){
        console.log(e);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);
  
  
  if(loginState.isLoading){
    return(
      /*<AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="signin" component={SignIn}/>
            <Stack.Screen name="signup" component={SignUp}/> 
          </Stack.Navigator>
        </NavigationContainer>
        
      </AuthContext.Provider>*/
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  
  return(
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { loginState.userToken != null ? (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Profile" component={Profiles}/>
            <Tab.Screen name="Settings" component={settings}/>
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="signin" component={SignIn}/>
            <Stack.Screen name="signup" component={SignUp}/> 
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
  
}

export default App;
