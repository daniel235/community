import * as React from 'react';
import {View, Text, FlatList, StyleSheet } from 'react-native';
import NewsFeed from './newsfeed';


function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="NewsFeed" component={NewsFeed} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}


function HomeScreen({navigation}) {
    var signedIn = false;
    return (
        <View style={{flex: 1}}>
            <Text style={styles.logoLetters}>community</Text>
            <NewsFeed nav={navigation}/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    logoLetters : {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
        backgroundColor: '#1ba8e0',
    }
})

export default HomeScreen;