import React from 'react';
import { Text, TextInput, View, Button, TouchableOpacity } from 'react-native';


var user = {
    email: '',
    password: '',
    userId: ''
};

var text = "";
var passwordText = "";

function setEmail(text) {
    user.email = text;
};


function setPassword(text) {
    user.password = text;
};

function goToHome(user, nav){
    nav.navigate('Home', {userId : user.userId});
}

function goToProfile(user, nav) {
    console.log("user id");
    console.log(user.userId);
    nav.navigate('Profile', {userId: user.userId});
}


function loginLogic(user, nav) {
    var userId = login(user, nav);
    return userId;
}


async function login(users, nav){
    var data;

    let response = await fetch('https://intense-meadow-20924.herokuapp.com/accountLogin', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(users)
    });
    
    if(!response.ok){
        console.log("bad response");
    }

    else{
        //users.userId = await (response.json().then(data))._id;
        //response.json().then(data => users.userId = data._id).catch((error) => console.error(error));
        response = await response.json();
        users.userId = await response._id;
        //.then((response) => response.json().then(data => users.userId = data._id)).catch((error) => console.error(error));
    }
    console.log(users.userId);
    console.log(users);
    //goToProfile(users, nav);
    goToHome(users, nav);
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
                onChangeText={passwordText => setPassword(passwordText)}
                defaultValue={passwordText}/>
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