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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyStack from './components/navigate';
import HomeScreen from './components/home';
import Profile from './components/profile';


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
import { SignedOut, SignedIn } from './components/router';


const Tab = createBottomTabNavigator();

retrieveToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if(value !== null){
      console.log(value);
    }
  } catch (error){
    console.log(error);
  }
  return value;
}

const App = () => {
  //check for auth token
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);



  if(isLoading){
    return(
      <View>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  render() {
    return <SignedIn />;
  }
};

const styles = StyleSheet.create({
  
});

