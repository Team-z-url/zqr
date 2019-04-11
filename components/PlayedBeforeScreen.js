import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class PlayedBeforeScreen extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.header}>Are you familliar with the concept of Z-QR</Text>
				<Text style={styles.header}>and would like to skip the information screen?</Text>
				
				<TouchableOpacity onPress={() => {
						this.props.navigation.navigate("App")}} style={styles.touchable}>
						<Text style={{color: 'white'}}>Yes</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => {
						this.props.navigation.navigate("Info")}} style={styles.touchable}>
						<Text style={{color: 'white'}}>No</Text>
				</TouchableOpacity>

			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#221F1F"
  },
  title: {
  	fontSize: 24,
  	color: "green"
  },
  header: {
  	fontSize: 18,
  	color: "red"
  },
  text: {
  	fontSize: 12,
  	color: "white"
  },
  touchable: {
    padding: 10,
    margin: 10,
    backgroundColor: "#21AC1D",
    borderRadius: 5,
    width: 150,
    alignItems: "center",
  }
});