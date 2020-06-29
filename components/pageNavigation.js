import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import Profile from './profile';
import SignUp from './signup';
import SignIn from './signIn';

import {
    SafeAreaView,
    StyleSheet, 
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
        </Stack.Navigator>

    );
}

/*
<Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.screen name="Profile" component={Profile}/>
            <Stack.screen name="SignIn" component={SignIn}/>
            <Stack.screen name="SignUp" component={SignUp}/>
        </Stack.Navigator>*/

export default MyStack;