import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "react-native";

export default class BodiesScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>BodiesScreen</Text>
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
  }
});
