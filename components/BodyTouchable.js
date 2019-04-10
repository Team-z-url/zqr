import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class BodyTouchable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>{this.props.name}</Text>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => this.props.onpress(this.props.bodyIndex)}>
          <Text style={styles.text}> Show </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20
  },
  touch: {
    backgroundColor: '#21AC1D',
    width: 60,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20
  },
});

