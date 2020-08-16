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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
//import { SignedOut, SignedIn } from './components/router';

const App = () => {
  
  //check for auth token
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  /*
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  }*/

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('rando');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken('rando');
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('rando');
      setIsLoading(false);
    },

  }));

  useEffect(() => {
    setTimeout(() => {
      let userToken;
      try {
        userToken = AsyncStorage.getItem('token');
      } catch(e) {
        console.log(e);
      }

    }, 1000);
  }, []);


  if(isLoading){
    return(
      <SignIn/>
    );
  };
  
  return(
    <SignIn/>
  );
  
}

export default App;
