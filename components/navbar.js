import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function NavBar() {
    return(
        <View>
            <Text style={styles.logoLetters}>community</Text>
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
})
