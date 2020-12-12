import React, {Component} from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';


class Post extends Component {
	constructor(props){
		super(props);
		this.data = props.data;
	}

	render() {
		return(
			<View style={styles.post}>
				<Text style={styles.postHeader}>{this.data.name} {this.data.date}</Text>
				<Text numberOfLines={4} style={styles.postBody}>{this.data.body}</Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	post : {
		marginLeft: 10,
	},
	postHeader : {
		marginTop: 25,
		color: '#004d80'
	},
	postBody : {
		marginBottom: 20,
		fontSize: 20,
	}
});

export default Post;