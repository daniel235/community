import React, {Component} from 'react';
import { Text, Image, View } from 'react-native';


class Post extends Component {
	constructor(props){
		super(props);
		this.data = props.data;
	}

	render() {
		return(
			<View>
				<Text>{this.data.name} {this.data.date}</Text>
				<Text numberOfLines={4}>{this.data.body}</Text>
			</View>
		);
	}

}

export default Post;