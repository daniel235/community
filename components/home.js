import React from 'react';
import {View, Text, FlatList, StyleSheet, TextInput, Button, TouchableOpacity, AsyncStorage } from 'react-native';
import NewsFeed from './newsfeed';
import NavBar from './navbar';
import { AuthContext } from './context';



export default function HomeScreen() {
    const { signOut } = React.useContext(AuthContext);
    
    return(
        <View style={{flex: 1}}>
            <NavBar/>
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
