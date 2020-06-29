import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';


var user = {
    email: '',
    password: '',
    userId: ''
};


var text = "";


function setEmail(text) {
    user.email = text;
};


function setPassword(text) {
    user.password = text;
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


function SignIn({navigation}) {
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
                onPress={() => navigation.navigate('SignUp')}
            />
        </View>
    );
}

export default SignIn;