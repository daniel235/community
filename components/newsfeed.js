import * as React from 'react';
import {View, Text, TextInput, Button, AsyncStorage, Alert, ActivityIndicator} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './signup';
import SignIn from './signIn';
import { List } from 'native-base';


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

async function unnecessaryFinalFunction(){
    let data = await getNewsFeed();
    data = JSON.stringify(data);
    console.log("data" + data);
    return data;
}

export default class NewsFeed extends React.Component {
    constructor(props){
        super(props);
        state = {
            count : 0,
            userId : props.userId,
            SignedInApp : false,
            status : "",
            data : null,
        };
    };

    componentDidMount() {
        getNewsFeed().then(data => {
            this.setState({
                data: data,
            });
        }, error => {
            Alert.alert('Error', 'Something went wrong');
        })
    }

    createStatus(text) {
        this.setState({status : text});
    };

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

    newsfeed = [];

    post = {
        name : "",
        body : "",
        date : Date.now()
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
    
    createNewsFeed(data){
        //iterate over json object
        for(key in data){
            if(posts.hasOwnProperty(key)){
                this.post.name = key.name;
                this.post.body = key.body;
                this.post.date = Date.now();
                this.newsfeed.push(this.post);
            }
        }
    };


    displayNewsFeed(){
        let view = this.state.isLoading ? (
            <View style={{flex: 1}}>
                <ActivityIndicator/>
                <Text style={{marginTop: 10}}>Please Wait</Text>
            </View>
        ) : (
            <List
                dataArray={this.state.data}
                renderRow={(item) => {
                    return(
                        <Post data={item}/>
                    )
                }}/>
        )
    };
    
    
    render() {
        return(
            <View>
                <this.StatusBar/>
                <this.displayNewsFeed/>
            </View>
        );
    }
}