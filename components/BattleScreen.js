import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "react-native";

import { getUserToken } from "../authorization/authorization";

export default class BattleScreen extends Component {
  constructor() {
    super();
    this.state = {
      opponents: null,
      battleResult: null
    };
  }

  componentDidMount() {
    this._sub = this.props.navigation.addListener("didFocus", () => {
      this.updateOpponents();
    });
  }

  updateOpponents = async () => {
    let token = await getUserToken();

    const reqSetting = {
      headers: new Headers({
        Authorization: `Bearer ${token}`
      })
    };

    let result = await fetch("http://18.236.60.81/battle", reqSetting);
    data = await result.json();
    console.log(data);
    this.setState({ opponents: data });
  };

  fightOpponent = async opponentIndex => {
    let token = await getUserToken();

    const reqSetting = {
      headers: new Headers({
        Authorization: `Bearer ${token}`
      })
    };

    let result = await fetch(
      `http://18.236.60.81/battle/${opponentIndex}`,
      reqSetting
    );
    data = await result.json();
    console.log(data);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>BattleScreen</Text>
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
