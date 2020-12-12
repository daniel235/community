import React from 'react';
import {View, Text, FlatList, StyleSheet, TextInput, Button, TouchableOpacity, AsyncStorage } from 'react-native';
import getMyFriends from '../../api_functions/api';
//friends view 

//get friends from database(ids)  relative database
function getFriends(id){
	data = getMyFriends(id);
	return data;
};


export default function FriendsScreen(){
	const [fdata, setData] = useState({});
	
	return (
		<View>
			<FlatList
				data={getMyFriends(await AsyncStorage.getItem("userId"))}
				renderItem={({item}) => (
					<Text>item.name</Text>
				)}
			/>
		</View>
	)
}