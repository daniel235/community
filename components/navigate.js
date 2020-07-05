import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import Profile from './profile';
import SignUp from './signup';
import SignIn from './signIn';
import NewsFeed from './newsfeed';
import updateProfile from './updateProfile';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="NewsFeed" component={NewsFeed} />
            <Stack.Screen name="update" component={updateProfile} />
        </Stack.Navigator>
    );
}

export default MyStack;