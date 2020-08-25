import React, {Component} from 'react';
import { ListItem, Left, Right, Thumbnail, Body, View, Text, Button, List } from 'native-base';

class Post extends Component {
	constructor(props){
		super(props);
		this.data = props.data;
	}

	render() {
		return(
			
			<ListItem thumbnail>
				<Left>

				</Left>
				<Body>
					<Text numberOfLines={3}>{this.data.name} {this.data.date}</Text>
					<Text numberOfLines={3}>{this.data.body}</Text>
				</Body>
			</ListItem>
		);
	}

}

export default Post;