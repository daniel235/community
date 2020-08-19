import * as React from 'react';
import {View, Text, FlatList, StyleSheet, TextInput, Button, TouchableOpacity, AsyncStorage } from 'react-native';
import NewsFeed from './newsfeed';
import { State } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            signedIn: false,
            userId : "",
            token : "",
            text : "",
            passwordText : "",
            user : {
                email : "",
                password : "",
            }
        }
    }
    

    render() {
        id = this.state.userId;
        console.log("myid " + id);
        return (
            <View style={{flex: 1}}>
                <Text style={styles.logoLetters}>community</Text>
                <NewsFeed userId={id}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    logoLetters : {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
        backgroundColor: '#1ba8e0',
    }
})
