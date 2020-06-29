import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import Profile from './profile';
import SignUp from './signup';
import SignIn from './signIn';


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Profile" component={Profile}/>
            <Tab.Screen name="signup" component={SignUp}/>
        </Tab.Navigator>
    );
}

export default MyTabs;