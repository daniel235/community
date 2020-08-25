import * as React from 'react';
import {View, Text, TextInput, Button, AsyncStorage, Alert, ActivityIndicator} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './signup';
import SignIn from './signIn';
import { List } from 'native-base';
import Post from './post';

var text = "";
var status = "";
var userId = "";

const Stack = createStackNavigator();

async function getNewsFeed() {
    let parsedId;
    
    //grab id here 
    parsedId = await AsyncStorage.getItem('userToken');
    parsedId = JSON.stringify(parsedId);

    //parsedId = parsedId.substring(lens);
    parsedId = parsedId.substring(1);
    parsedId = parsedId.slice(0, -1);
    var newsData = {};
    //make get requst
    newsUrl = "https://intense-meadow-20924.herokuapp.com/newsFeed?id=" + parsedId;
    localUrl = "localhost:3000/newsfeed?id=" + parsedId;
    console.log(newsUrl);
    newsData = await fetch(newsUrl, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    }).then((response) => response.json())
    .then((json) => {
        console.log(json);
        return json;
    })
    .catch((error) => {
        console.error(error);
    });

    console.log("response ", newsData);
    return newsData;
    
};


export default class NewsFeed extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            userId : props.userId,
            isLoading: true,
            SignedInApp : false,
            status : "",
            data : null,
        }
        this.displayNewsFeed = this.displayNewsFeed.bind(this);
    }

    componentDidMount() {
        getNewsFeed().then(data => {
            this.setState({
                data: data,
                isLoading: false,
            });
            console.log("data ", this.state.data);
        }).catch((error) => console.log(error));
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
    };


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
    };
    

    displayNewsFeed(){
        let view = this.state.isLoading ? (
            <View style={{flex: 1}}>
                <ActivityIndicator/>
                <Text style={{marginTop: 10}}>Please Wait</Text>
            </View>
        ) : (
            <View>
                <Text>My News</Text>
                <List
                    dataArray={this.state.data}
                    renderRow={(item) => {
                        return(
                            <Post data={item}/>
                        )
                    }}/>
                <Post data={this.state.data}/>
            </View>
        );
        return view;
    };
    
    render() {
        return(
            <View>
                <this.StatusBar/>
                {this.state.isLoading ? (
                    <Text>Loading</Text>
                ) : (
                    <this.displayNewsFeed/>
                )}
            </View>
        );
    }
}