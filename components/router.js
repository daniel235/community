import { StackNavigator, TabNavigator } from "@react-navigation/stack";

import SignUp from "./signup";
import SignIn from "./signIn";
import Profile from "./profile";


export const SignedOut = StackNavigator({
	SignUp: {
		screen: SignUp,
		navigationOptions: {
			title: "Sign Up"
		}
	},
	SignIn: {
		screen: SignIn,
		navigationOptions: {
			title: "Sign In"
		}
	}
});

export const SignedIn = TabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			tabBarLabel: "Home",
			tabBarIcon: ({ tintColor }) => (
				<FontAwesome name="home" size={30} color={tintColor}/>
			)
		}
	},
	Profile: {
		screen: Profile,
		navigationOptions: {
			tabBarLabel: "Profile",
			tabBarIcon: ({ tintColor }) => (
				<FontAwesome name="user" size={30} color={tintColor} />
			)
		}
	}
});