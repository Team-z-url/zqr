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
      <Text style={styles.text}>HP: {props.body.health}</Text>
      <Text style={styles.text}>Attack: {props.body.attack}</Text>
      <Text style={styles.text}>Defense: {props.body.defense}</Text>
      <Text style={styles.text}>Speed: {props.body.speed}</Text>
      <QRCode
        value={props.body.id}
        size={200}
        bgColor='#7f0202'
        fgColor='#fff'
      />

      <TouchableOpacity style={styles.button} onPress={props.onRequest}>
        <Text>Replace</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={props.onClose}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    color: 'white'
  },
  text: {
    fontSize: 25,
    color: 'white'
  },
  button: {
    margin: 20
  }
});

export default BodyModal;
