import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class BodiesScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <TouchableOpacity
          onPress={() => this.props.onpress(this.props.opponentIndex)}>
          <Text> Attack </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
