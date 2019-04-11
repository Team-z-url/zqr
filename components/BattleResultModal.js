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

import ZQRAnimate from "./ZQRAnimate";

export default class BattleResultModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.triggerModal = this.triggerModal.bind(this);
  }

  triggerModal() {
    console.log("trigger modal");
    this.setState(prevState => {
      return {
        display: !prevState.display
      };
    });
  }

  componentWillMount() {
    this.triggerModal();
  }

  render() {
    let props = this.props;
    return (
      <Modal
        style={{ backgroundColor: "black" }}
        visible={props.display}
        animationType='slide'
        onRequestClose={() => console.log("closed")}>
        <View style={styles.modal}>
          {!this.state.display ? (
            <View style={styles.modal}>
              <Text style={styles.message}>
                {props.result.winner ? "You won!" : "You lose!"}
              </Text>
              <ScrollView>
                <Text style={styles.text}>{props.result.log}</Text>
              </ScrollView>

              <TouchableOpacity style={styles.button} onPress={props.onClose}>
                <Text style={styles.text}>OK</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>

        {this.state.display ? (
          <ZQRAnimate
            display={this.state.display}
            onClose={this.triggerModal}
          />
        ) : null}
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#221F1F"
  },
  text: {
    fontSize: 20,
    color: "white",
    margin: 8
  },
  button: {
    margin: 20
  },
  message: {
    color: "#E50914",
    fontSize: 30,
    fontWeight: "bold",
    margin: 20
  }
});
