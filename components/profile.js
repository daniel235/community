import * as React from 'react';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

id = null;

function getProfileData(id) {
    var profileData = {};
    var idOb = {
        uid: id,
    };
    fetch('https://intense-meadow-20924.herokuapp.com/profileData', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(idOb)
    }).then((response) => profileData = response);

    //check if response is empty
    if(profileData === {}) {
        //navigate to update profile
        return {}
    }


}


function Profile({route, navigation}) {
    var me = new Profiles();
    //const { userId } = route.params;
    //id = userId;
    var profileData = {}
    if(route != null) {
        console.log(route);
        profileData = getProfileData(route.params.userId);
        if (profileData === {}) {
            navigation.navigate('update', {id : route.params.userId})
        }
        return (
            <View style={{flex: 1}}>
                <Text style={{alignItems: 'center'}}>Profile Screen</Text>
                <Text>Hello {route.params.userId}</Text>
            </View>
        );
        /*
        <Text>{route.params.userId}</Text>
                <Text>{me.state.name}</Text>
                <Text>Info</Text>
                <Text>Age: {me.state.age}</Text>*/
    }
    else{
        return(
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text>Go to Sign In</Text>
                </TouchableOpacity>
            </View>
        );
    }
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
    render() {
        return (
            <View>
                <Text>User id </Text>
                <Text>{this.state.userId}</Text>
            </View>
        );
    }
}


export default Profile;