import * as React from 'react';
import {View, Text, FlatList, StyleSheet } from 'react-native';

function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1}}>
            <Text style={styles.logoLetters}>Community</Text>
            <Text style={{alignItems: 'center'}}>Home Page</Text>
            <FlatList 
                />
            
        </View>
    );
}

const styles = StyleSheet.create({
    logoLetters : {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    }
})

export default HomeScreen;