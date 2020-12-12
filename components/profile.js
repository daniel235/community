import * as React from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavBar from './navbar';

id = null;

async function getProfileData() {
    var profileData = {};
    var idOb = {
        uid: await AsyncStorage.getItem("userId"),
    };

    let response = await fetch('https://intense-meadow-20924.herokuapp.com/profileData', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(idOb)
    });

    //check if response is empty
    if(!response.ok){
        console.log("bad response");
    }
    else{
        response = await response.json();
        profileData = response;
    }
    return profileData;

}

//navigate to profile with a user id to show that your logged in
function Profile({route, navigation}) {
    var me = new Profiles();
    var profileData = null;
    profileData = getProfileData(route.params.userId);
    console.log(profileData);
    if (JSON.stringify(profileData) === '{}') {
        console.log("navigating to update");
        navigation.navigate('update', {id : route.params.userId});
    }
    //populate profile data
    else{
        me.state.name = profileData.Name;
        me.state.sex = profileData.Sex;
        me.state.userId = route.paramse.userId;
    }
    return (
        <View style={{flex: 1}}>
            <Text style={{alignItems: 'center'}}>Profile Screen</Text>
            <Text>Hello {me.state.name}</Text>
        </View>
    );
}


class Profiles extends React.Component {
    constructor(props){
        super(props),
        this.state = {
            userId : "",
            name : "",
            age : 0,
            sex : "M"
        }
    } 
    componentDidMount(){
        getProfileData().then(data => {
            this.setState({
                userId : data.userId,
                name : data.FirstName,
                age : data.age, 
                sex : data.sex,
            });
            console.log(this.state.userId);
        }).catch((error) => console.log(error));
    }

    render() {
        return (
            <View>
                <NavBar/>
                <Text>User id </Text>
                <Text>{this.state.userId}</Text>
                <Text>{this.state.name}</Text>
                <Text>{this.state.age}</Text>
            </View>
        );
    }
}


export default Profiles;