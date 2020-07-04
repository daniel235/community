import React from 'react';
import { Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

var user = {
    email: '',
    password: '',
    userId: ''
};


var text = "";
var loginFlag = false;


function setEmail(text) {
    user.email = text;
};


function setPassword(text) {
    user.password = text;
};


function saveUser(users) {
    console.log(users.email);
    console.log(users.password);
    //create post request
    fetch('https://intense-meadow-20924.herokuapp.com/account', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(users)
    }).then((response) => {users.userId = response._id}).catch((error) => console.error(error));
    console.log(users.userId);
};


function SignUp({navigation}) {
    return (
        <View>
            <Text>Sign Up</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                maxLength={20}
                defaultValue={text}/>
            <TextInput 
                style={{height: 40}}
                placeholder="Password"
                secureTextEntry={true}
                maxLength={20}
                onChangeText={text => setPassword(text)}
                defaultValue={text}/>
            <TextInput 
                style={{height: 40}}
                placeholder="Confirm Password"
                secureTextEntry={true}
                maxLength={20}
                onChangeText={text => setPassword(text)}
                defaultValue={text}/>
            <Button
                title="Submit"
                onPress={() => saveUser(user)}
            />
            <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => navigation.navigate('SignIn')}
            >
                <Text style={{color: '#1ba8e0'}}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}


export default SignUp;