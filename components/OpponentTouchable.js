import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class OpponentTouchable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.name}</Text>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => this.props.onpress(this.props.opponentIndex)}>
          <Text style={styles.text}> Attack </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  touch: {
    backgroundColor: "#21AC1D",
    width: 80,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
    marginLeft: 20
  },
  text: {
    color: "white",
    fontSize: 23
  }
});
