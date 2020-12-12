import * as React from 'react';
import {View, Text, TextInput, Button, AsyncStorage, Alert, ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './context';
import SignUp from './signup';

const Stack = createStackNavigator();

function account(){
	const { signOut } = React.useContext(AuthContext);
	return(
		<View>
			<Button 
				title="Sign Out"
				onPress={() => signOut()}
			/>
		</View>
	)
}


function settings(){
	return(
		<Stack.Navigator>
			<Stack.Screen name="Account Settings" component={account}/>
    	</Stack.Navigator>
	);
}


export default settings;