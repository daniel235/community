	
export async function signInApi(userName, password){
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
    console.log(users.userId);

	return users;
}