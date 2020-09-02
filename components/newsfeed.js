import * as React from 'react';
import {View, Text, TextInput, Button, AsyncStorage, Alert, ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './signup';
import SignIn from './signIn';
import { List } from 'native-base';
import Post from './post';
import { postNewsFeed } from '../api_functions/api';

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

async function createPost(post){
    //set post
    post.name = await AsyncStorage.getItem('userName');
    post.date = Date.now();
    post.user_id = await AsyncStorage.getItem('userId');
    //post to newsfeed and send back entire newsfeed 
    postNewsFeed(post);
    return post;
}


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
        var obs = {
            "user_id" : null,
            "name" : null,
            "body" : null,
            "date" : null,
        };
        return(
            <View style={{flexDirection: 'row'}}>
                <TextInput
                    style={{height: 40, width: '50%'}}
                    placeholder="What's Up?"
                    onChangeText={text => {obs.body = text}}
                    defaultValue={text}/>
                
                <TouchableOpacity
                    style={{backgroundColor: '#02aede', marginTop: '20%', width: '100%', position: 'relative'}}
                    
                >
                    <Button 
                        onPress={() => {
                            createPost(obs);
                        }}
                        title="Post"
                    />
                </TouchableOpacity>
            </View>
        );
    };
    
    renderItem = ({item}) => {
        return <Post data={item}/>
    };

    displayNewsFeed(){
        let view = this.state.isLoading ? (
            <View style={{flex: 1}}>
                <ActivityIndicator/>
                <Text style={{marginTop: 10}}>Please Wait</Text>
            </View>
        ) : (
            <SafeAreaView>
                <Text>My News</Text>
                <FlatList
                    //dataArray={this.state.data}
                    data={this.state.data}
                    renderItem={this.renderItem}
                />
            </SafeAreaView>
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