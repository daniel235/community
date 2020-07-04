import * as React from 'react';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

id = null;

function getProfileData(id) {
    var idOb = {
        uid: id,
    };
    fetch('https://intense-meadow-20924.herokuapp.com/accountLogin', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(idOb)
    }).then((response) => console.log(response));
}

function Profile({route, navigation}) {
    var me = new Profiles();
    //const { userId } = route.params;
    //id = userId;
    if(id != null) {
        return (
            <View style={{flex: 1}}>
                <Text style={{alignItems: 'center'}}>Profile Screen</Text>
                <Text>{route.params.userId}</Text>
                <Text>{me.state.name}</Text>
                <Text>Info</Text>
                <Text>Age: {me.state.age}</Text>
            </View>
        );
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