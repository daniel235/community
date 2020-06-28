/*
const express = require('express')
const app = express() 
const port = 3000

app.get('/')
*/
import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';

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

function login(users){
    fetch('https://intense-meadow-20924.herokuapp.com/account', {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(users)
    }).then((response) => {users.userId = response._id}).catch((error) => console.error(error));
    console.log(users.userId);
};


function SignUp() {
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
            <Button
                title="Log In"
                onPress={() => {loginFlag = true}}
            />
        </View>
    );
}

function signIn() {
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
            <Button
                title="Submit"
                onPress={() => login(user)}
            />
            <Button
                title="Sign Up"
                onPress={() => {loginFlag = false}}
            />
        </View>
    );
}

function LoginPage() {
    if(loginFlag) {
        return(
            signIn()
        );
    }
    else{
        return(
            SignUp()
        );
    }
};


export default LoginPage;