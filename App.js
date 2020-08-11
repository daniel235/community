/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { AsyncStorage } from 'react-native';
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

const App: () => React$Node = () => {
  //check for auth token
  const Token = retrieveToken();
  if(Token===null){
    //go to sign in 
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="signup" component={MyStack}/>
      </Tab.Navigator>
    </NavigationContainer>
  }
  else{
    return (
      <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home">
              {() => <HomeScreen token = {Token}/>}
            </Tab.Screen>
            <Tab.Screen name="Profile" component={Profile}/>
            <Tab.Screen name="signup" component={MyStack}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  
});

export default App;
