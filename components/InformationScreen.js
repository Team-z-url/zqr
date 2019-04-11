import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default class InformationScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text style={styles.title}>Z-QR Guide</Text> 
				<Text style={styles.text}>Welcome to Z-QR! This page will help to explain the features present in our app.</Text>
				<Text></Text>
				<Text style={styles.header}>Zombie Stats</Text>
				<Text style={styles.text}>What do all those numbers belonging to your zombie mean? HP is how much life your zombie has. Attack is how much HP your zombie can take away from a human when they attack. Defense blocks attack damage from a human. And Speed determins who attacks first.</Text>		
				<Text></Text>
				<Text style={styles.header}>Fighting Humans</Text>
				<Text style={styles.text}>You're a zombie, zombies fight humans, so let's learn how to do that here. Tapping on Battle will take you to the battle screen. Here you have the option of fighting three levels of humans: weak, medium, and strong from top to bottom respectively. These three opponents have random stats, the strong human will have the highest stats, followed by the medium human, and finally the weak human has the lowest stats. Clicking on Attack next to their names will start a battle. If you win, the human's body will be added as a resource on the Bodies screen, and three new humans are randomly generated for you. If you lose, your zombie dies, and you will be randomly generated a new one.</Text>
				<Text></Text>
				<Text style={styles.header}>Becoming Stronger</Text>
				<Text style={styles.text}>After a victory, tapping on Bodies located in the navigation bar will take you to the Bodies screen. Here you'll have the name of each human you defeated. Tapping on Show will bring up the body's stats, a QR code, an option to replace your zombie with this body, and an option to close and go back to the Bodies screen. Tapping on Replace will cause your current Zombie to permanently die and the body you have chosen will rise as your new Zombie!</Text>
				<Text></Text>
				<Text style={styles.header}>Spreading the Infection</Text>
				<Text style={styles.text}>So what's that QR code used for? Turning your friends into zombies of course! Have your friend open the app and tap on Account located in the navigation bar. Tap on Scan QR Code to open your phone's camera and then have your friend scan your body's QR code. It will take them to a new screen where the body's stats are shown. Then they can choose to become that zombie, or decline.</Text>
				
				<TouchableOpacity onPress={() => {
		          this.props.navigation.navigate("Portfolio")}} style={styles.touchable}>
		          <Text style={styles.buttonText}>To Portfolio</Text>
		        </TouchableOpacity>

			</ScrollView>
		)
	} 
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
    backgroundColor: "#221F1F"
  },
  title: {
  	fontSize: 24,
  	color: "green",
  	textAlign: "center"
  },
  header: {
  	fontSize: 18,
  	color: "red",
  	textAlign: "center"
  },
  text: {
  	fontSize: 12,
  	color: "white",
  	textAlign: "center"
  },
  touchable: {
    padding: 10,
    margin: 10,
    backgroundColor: "#21AC1D",
    borderRadius: 5,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  buttonText: {
  	color: "white",
  	textAlign: "center"
  }
});