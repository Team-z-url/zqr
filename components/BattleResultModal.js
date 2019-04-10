import React from "react";
import {
  Modal,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";

const BattleResultModal = props => (
  <Modal
    visible={props.display}
    animationType='slide'
    onRequestClose={() => console.log("closed")}>
    <View style={styles.modal}>
      <Text style={styles.text}>
        {props.result.winner ? "You won!" : "You lose!"}
      </Text>
      <ScrollView>
        <Text style={styles.text}>{props.result.log}</Text>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={props.onClose}>
        <Text>OK</Text>
      </TouchableOpacity>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  text: {
    fontSize: 20
  },
  button: {
    margin: 20
  }
});

export default BattleResultModal;
