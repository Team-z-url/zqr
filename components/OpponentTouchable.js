import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class OpponentTouchable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
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
  touch: {
    backgroundColor: '#21AC1D',
    width: 100,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20
  },
  text: {
    color: 'white',
    fontSize: 30
  }
})