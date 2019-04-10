import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class InformationScreen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Z-QR Guide</Text> 
				<Text>Welcome to Z-QR! This page will help to explain the features present in our app.</Text>
				<Text></Text>
				<Text></Text>		
			</View>
		)
	} 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
});