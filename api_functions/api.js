	
export async function signInApi(userName, password){
    console.log("sign in api");
	let users;
	users = {
        email : userName,
        password : password,
    	userId: '',
    };
	let response = await fetch('https://intense-meadow-20924.herokuapp.com/accountLogin', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    	body: JSON.stringify(users),
    });
    response = await response.json();
    users.userId = await response._id;
    console.log("id returned ", users.userId);
	return users;
}

export async function signUpApi(userName, password){
	users = {
        email : userName,
        password : password,
    	userId: '',
	};
	fetch('https://intense-meadow-20924.herokuapp.com/account', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(users)
    }).then((response) => {users.userId = response._id}).catch((error) => console.error(error));
    
    console.log("signed up " + users.userId);

	return users;
}

export async function postNewsFeed(post){
    fetch('https://intense-meadow-20924.herokuapp.com/newsFeed', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    }).catch((error) => console.log(error));
}

export async function getMyFriends(id){
    console.log("get friends");
    let friendsUrl = 'https://intense-meadow-20924.herokuapp.com/account/friends?id=' + id;
    fetch(friendsUrl, {
        method: 'GET',
        headers: {
            "Accept" : "application/json",
            "Content-Type": "application/json"
        }, 
        
    })
}