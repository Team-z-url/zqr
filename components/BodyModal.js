import React from "react";
import {
  Modal,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import QRCode from "react-native-qrcode";

const BodyModal = props => (
  <Modal
    visible={props.display}
    animationType='slide'
    onRequestClose={() => console.log("closed")}>
    <View style={styles.modal}>
      <Text style={styles.text}>Name: {props.body.name}</Text>
      <Text style={styles.hp}>HP: {props.body.health}</Text>
      <Text style={styles.attack}>Attack: {props.body.attack}</Text>
      <Text style={styles.defense}>Defense: {props.body.defense}</Text>
      <Text style={styles.speed}>Speed: {props.body.speed}</Text>

      <View style={styles.buttonsContainer}>
        <QRCode
          value={props.body.id}
          size={200}
          bgColor='#7f0202'
          fgColor='#221F1F'
        />
        <TouchableOpacity style={styles.touch} onPress={props.onRequest}>
          <Text style={styles.buttonText}>Replace</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch} onPress={props.onClose}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#221F1F",
    paddingTop: 20
  },
  text: {
    color: "white",
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
    backgroundColor: "#4A4D50",
    height: 50,
    textAlignVertical: "center",
    borderRadius: 10,
    padding: 5
  },
  hp: {
    color: "#21AC1D",
    fontSize: 30,
    margin: 10,
    fontWeight: "bold"
  },
  attack: {
    color: "#E50914",
    fontSize: 30,
    margin: 10,
    fontWeight: "bold"
  },
  defense: {
    color: "#F6F603",
    fontSize: 30,
    margin: 10,
    fontWeight: "bold"
  },
  speed: {
    color: "#2586E8",
    fontSize: 30,
    margin: 10,
    fontWeight: "bold"
  },
  zombie: {
    position: "absolute",
    width: 100,
    height: 300,
    right: 0,
    top: 100
  },
  button: {
    margin: 20
  },
  touch: {
    backgroundColor: "#21AC1D",
    width: 160,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
    padding: 5
  },
  buttonText: {
    color: "white",
    fontSize: 25
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default BodyModal;
