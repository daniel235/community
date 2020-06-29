import * as React from 'react';
import {View, Text, FlatList, StyleSheet } from 'react-native';
import MyTabs from './navigate';

function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1}}>
            <Text style={styles.logoLetters}>community</Text>
            <Text style={{alignItems: 'center'}}>Home Page</Text>
            <MyTabs/>
            <FlatList 
                />
            
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