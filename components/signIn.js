import React from 'react';
import { Text, TextInput, View, Button, TouchableOpacity } from 'react-native';


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

function goToProfile(user, nav) {
    console.log("user id");
    console.log(user.userId);
    nav.navigate('Profile', {userId: user.userId});
}


function login(users, nav){
    var data;
    fetch('https://intense-meadow-20924.herokuapp.com/accountLogin', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(users)
    }).then((response) => response.json().then(data => users.userId = data._id)).catch((error) => console.error(error));

    console.log(users);
    goToProfile(users, nav);
};


function SignIn({navigation}) {
    return (
        <View>
            <Text>Sign In</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                maxLength={30}
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
                onPress={() => login(user, navigation)}
            />
            
            <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={{color: '#1ba8e0'}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignIn;