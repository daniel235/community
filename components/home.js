import React from 'react';
import {View, Text, FlatList, StyleSheet, TextInput, Button, TouchableOpacity, AsyncStorage } from 'react-native';
import NewsFeed from './newsfeed';
import { State } from 'react-native-gesture-handler';
import { AuthContext } from './context';



/*
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

    async getId() {
        let ids;
        let id = await AsyncStorage.getItem('userId');
        ids = Object.keys(id);
        return ids;
    }
    render() {
        let id = this.getId();
        console.log("myid " + id);
        return (
            <View style={{flex: 1}}>
                <Text style={styles.logoLetters}>community</Text>
                <NewsFeed userId={id}/>
                <Button 
                    title="Sign Out"
                    onPress={() => signOutApp()}
                />
                    
            </View>
        );
    }
}
*/


export default function HomeScreen() {
    const { signOut } = React.useContext(AuthContext);
    
    return(
        <View style={{flex: 1}}>
            <Text style={styles.logoLetters}>community</Text>
            <NewsFeed style={{marginBottom : 40}} userId="123"/>
            <Button 
                style={styles.signOutButton}
                title="Sign Out"
                onPress={() => signOut()}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    logoLetters : {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
        backgroundColor: '#1ba8e0',
    },
    signOutButton : {
        marginTop : 300,
    }
})
