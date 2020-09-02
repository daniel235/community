import * as React from 'react';
import {View, Text, TextInput, Button, AsyncStorage, Alert, ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './signup';

const Stack = createStackNavigator();

function settings(){
	return(
		<Stack.Navigator>
      		<Stack.Screen name="Profile" component={SignUp} />
    	</Stack.Navigator>
	);
}


export default settings;