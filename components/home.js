import * as React from 'react';
import {View, Text, FlatList, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import NewsFeed from './newsfeed';
import { State } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            signedIn: false,
            userId : "",
            token : "",
            text : "",
            passwordText : "",
            user : {
                email : "",
                password : "",
            }
        }
        this.onPressNavigate = this.onPressNavigate.bind(this);

    }

    setEmail(textsam) {
        this.state.user.email = textsam;
    };
    
    
    setPassword(textsam) {
        this.state.user.password = textsam;
    };

    async login(users){
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
            data = await response._id;
            //.then((response) => response.json().then(data => users.userId = data._id)).catch((error) => console.error(error));
        }
        console.log("user id -> " + data);
        console.log("user -> " + this.state.user.email);
        //goToProfile(users, nav);
        
        this.setState({userId : data});
        if(this.state.userId != ""){
            console.log("signed in ");
            this.setState({signedIn: true});
        }
    };

    onPressNavigate(){
        const { navigate } = this.props.navigation;
        navigate.navigate('SignUp');
    }


    render() {
        if(this.state.signedIn){
            id = this.state.userId;
            console.log("myid " + id);
            return (
                <View style={{flex: 1}}>
                    <Text style={styles.logoLetters}>community</Text>
                    <NewsFeed userId={id}/>
                </View>
            );
        }
        //sign in
        else{
            /*
            if(this.props.route.params != null){
                this.state.signedIn = true;
            }*/
            return(
                <View>
                    <Text>Sign In</Text>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Email"
                        onChangeText={text => this.setEmail(text)}
                        maxLength={30}
                        defaultValue={this.state.text}/>
                    <TextInput 
                        style={{height: 40}}
                        placeholder="Password"
                        secureTextEntry={true}
                        maxLength={20}
                        onChangeText={passwordText => this.setPassword(passwordText)}
                        defaultValue={this.state.passwordText}/>
                    <Button
                        title="Submit"
                        onPress={() => this.login(this.state.user)}
                    />
                    
                    <TouchableOpacity
                        style={{alignItems: 'center'}}
                        onPress={() => this.onPressNavigate()}
                    >
                        <Text style={{color: '#1ba8e0'}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}


/*
function HomeScreen({navigation}) {
    var signedIn = false;
    return (
        <View style={{flex: 1}}>
            <Text style={styles.logoLetters}>community</Text>
            <NewsFeed nav={navigation}/>
        </View>
    );
}
*/
const styles = StyleSheet.create({
    logoLetters : {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
        backgroundColor: '#1ba8e0',
    }
})
