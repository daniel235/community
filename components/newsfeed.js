import * as React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './signup';
import SignIn from './signIn';


var text = "";
var status = "";
var userId = "";

const Stack = createStackNavigator();


export default class NewsFeed extends React.Component {
    constructor(props){
        super(props);
        state = {
            count : 0,
            userId : props.userId,
            SignedInApp : false,
            status : "",
        };
    };

    createStatus(text) {
        this.setState({status : text});
    } 

    StatusBar({navigation}){
        return(
            <View>
                <Text>Insert Status</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="What's Up?"
                    onChangeText={text => console.log(text)}
                    defaultValue={text}/>
                <Button
                    title="Post"
                    onPress={() => this.createPost()}
                />
            </View>
        );
    }

    newsfeed = [];

    post = {
        name : "",
        body : "",
        date : Date.now()
    }

    createPost(post){
        //post to newsfeed and send back entire newsfeed 
        fetch('https://intense-meadow-20924.herokuapp.com/newsFeed', {
            method: 'POST', 
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: post,
        }).then((response) => console.log(response));
    }
    
    createNewsFeed(data){
        //iterate over json object
        for(key in posts){
            if(posts.hasOwnProperty(key)){
                this.post.name = key.name;
                this.post.body = key.body;
                this.post.date = Date.now();
                this.newsfeed.push(this.post);
            }
        }
    }

    getNewsFeed(id) {
        var newsData = {};
        //make get requst
        newsUrl = "https://intense-meadow-20924.herokuapp.com/newsFeed?id=" + id
        fetch(newsUrl, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        }).then((response) => newsData);

        //response 
        return(
            <View>
                <Text>My NewsFeed</Text>
            </View>
        );
    }

    authenticate = () => {
        this.setState({SignedInApp : true});
    }
    /*
    signedIn(){
        if(this.state.SignedInApp){
            return(
                <View>
                    <this.StatusBar/>
                    <this.getNewsFeed id={this.state.userId}/>
                </View>
            );
        }
        else{
            return(
                <View>
                    <Text>Sign in</Text>
                </View>
            );
        }
    }*/

    render() {
        /*
        if(this.state.userId != null){
            this.setState({SignedInApp : True});
        }*/
        return(
            <View>
                <this.StatusBar/>
                <this.getNewsFeed id={this.props.userId}/>
            </View>
        );
    }
}