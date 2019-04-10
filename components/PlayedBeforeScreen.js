import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";

export default class PlayedBeforeScreen extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Are you familliar with the concept of Z-QR and would like to skip the information screen?</Text>
				<Button
					title={"Yes"}
					style={styles.input}
					onPress={() => {
						this.props.navigation.navigate("App");
					}}
				/>
				<Button
					title={"No"}
					style={styles.input}
					onPress={() => {
						this.props.navigation.navigate("InformationPage");
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10
  }
});