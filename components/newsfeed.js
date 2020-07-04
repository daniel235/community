import * as React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


var text = "";
var status = "";

export default class NewsFeed extends React.Component {
    constructor(props){
        super(props);
        this.navigation = props.nav;
        this.state = {
            count : 0,
        }
    }

    createStatus(text) {
        this.status = text;
    }

    StatusBar({navigation}){
        return(
            <View>
                <Text>Insert Status</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="What's Up?"
                    onChangeText={text => this.createStatus(text)}
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
                this.newsfeed.push(this.post)
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

    render() {
        return(
            <View>
                <this.StatusBar/>
                <this.getNewsFeed id={userId}/>
            </View>
        );
    }

}