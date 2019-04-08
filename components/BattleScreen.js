import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert, Text, View, StyleSheet } from "react-native";

import OpponentTouchable from "./OpponentTouchable";

import { getUserToken } from "../authorization/authorization";

export default class BattleScreen extends Component {
  constructor() {
    super();
    this.state = {
      opponents: null,
      battleResult: null
    };

    this.fightOpponent = this.fightOpponent.bind(this);
  }

  componentDidMount() {
    this._sub = this.props.navigation.addListener("didFocus", () => {
      this.updateOpponents();
    });
  }

  componentDidUpdate() {
    if (this.state.opponents == null) {
      this.updateOpponents();
    }
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
      `http://18.236.60.81/battle/result/${opponentIndex}`,
      reqSetting
    );
    data = await result.json();
    if (data.winner) {
      Alert.alert(
        "You won!",
        data.log,
        [
          {
            text: "OK",
            onPress: () => {
              this.setState({ opponents: null });
            }
          }
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        "You lose!",
        data.log,
        [
          {
            text: "OK",
            onPress: () => {
              this.setState({ opponents: null });
            }
          }
        ],
        { cancelable: false }
      );
    }
    console.log(data);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Opponents:</Text>
        {this.state.opponents && (
          <View style={{ width: 300 }}>
            <OpponentTouchable
              name={this.state.opponents[0].name}
              onpress={this.fightOpponent}
              opponentIndex={0}
            />
            <OpponentTouchable
              name={this.state.opponents[1].name}
              onpress={this.fightOpponent}
              opponentIndex={1}
            />
            <OpponentTouchable
              name={this.state.opponents[2].name}
              onpress={this.fightOpponent}
              opponentIndex={2}
            />
          </View>
        )}
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
