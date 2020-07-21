import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyStack from './components/navigate';
import HomeScreen from './components/home';
import Profile from './components/profile';


const Tab = createBottomTabNavigator();

export default class Main extends React.Component { 
    constructor(props){
        super(props),
        this.state = {
            userId : "",
            signedIn : false,
        }
    } 

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen}/>
                    <Tab.Screen name="Profile" component={Profile}/>
                    <Tab.Screen name="signup" component={MyStack}/>
                    </Tab.Navigator>
            </NavigationContainer>
        );
    }
};