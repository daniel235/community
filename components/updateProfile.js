import * as React from 'react';
import {View, Text, Button} from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

function uploadData(dataObject, nav){
    fetch('https://intense-meadow-20924.herokuapp.com/updateProfile', {
            method: 'POST', 
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataObject),
        }).then((response) => console.log(response));

        //navigate to profile
        nav.navigate('Profile', {"id" : dataObject.userId});
};

var dataOb = {
    "userId" : 0,
    "First" : "",
    "Last" : "",
    "Age" : 0,
    "Sex" : "m"   
};


function setFirstName(n){
    dataOb.First = n;
}

function setLastName(n){
    dataOb.Last = n;
}

function setAge(n){
    dataOb.Age = n;
}

function setSex(n){
    dataOb.Sex = n;
}

function updateProfile({route, navigation}){
    var text = "";
    var fname = "";
    var lname = "";
    var age = 0;
    var sex = "";
    var myId = "";

    if (route.params != null){
        myId = route.params.id;
        dataOb.userId = myId;
    }
    return(
        <View>
            <TextInput
                style={{height: 40}}
                placeholder="First Name"
                onChangeText={fname => setFirstName(fname)}
                maxLength={30}
                defaultValue={fname}
            />
            <TextInput
                style={{height: 40}}
                placeholder="Last Name"
                onChangeText={lname => setLastName(lname)}
                maxLength={30}
                defaultValue={lname}
            />
            <TextInput
                style={{height: 40}}
                placeholder="Age"
                onChangeText={age => setAge(age)}
                maxLength={3}
                defaultValue={age}
            />
            <TextInput
                style={{height: 40}}
                placeholder="Sex(m/f)"
                onChangeText={sex => setSex(sex)}
                maxLength={10}
                defaultValue={sex}
            />
            <Button
                title="Submit"
                onPress={() => uploadData(dataOb, navigation)}
            />
        </View>
    );
}

export default updateProfile;