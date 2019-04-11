import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert, Text, View, StyleSheet, Image } from "react-native";
import fetch from "react-native-fetch-polyfill";

import OpponentTouchable from "./OpponentTouchable";
import BattleResultModal from "./BattleResultModal";

import { getUserToken } from "../authorization/authorization";

export default class BattleScreen extends Component {
  constructor() {
    super();
    this.state = {
      opponents: null,
      battleResult: null,
      display: false,
      token: null
    };

    this.triggerModal = this.triggerModal.bind(this);
    this.fightOpponent = this.fightOpponent.bind(this);
  }

  async componentDidMount() {
    this._sub = this.props.navigation.addListener("didFocus", () => {
      this.updateOpponents();
    });
    this.setState({
      token: await getUserToken()
    });
  }

  componentDidUpdate() {
    if (this.state.opponents == null) {
      this.updateOpponents();
    }
  }

  triggerModal() {
    console.log("trigger modal");
    this.setState(prevState => {
      return {
        display: !prevState.display
      };
    });
  }

  updateOpponents = async () => {
    console.log("updating opponents");
    console.log("token", this.state.token);
    let token = this.state.token || (await getUserToken());

    const reqSetting = {
      headers: new Headers({
        Authorization: `Bearer ${token}`
      }),
      timeout: 1500
    };

    fetch("http://18.236.60.81/battle", reqSetting)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ opponents: data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  fightOpponent = async opponentIndex => {
    let token = this.state.token || (await getUserToken());

    const reqSetting = {
      headers: new Headers({
        Authorization: `Bearer ${token}`
      }),
      timeout: 1500
    };

    fetch(`http://18.236.60.81/battle/result/${opponentIndex}`, reqSetting)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.triggerModal();
        this.setState({
          battleResult: data,
          opponents: null
        });
      })
      .catch(err => {
        console.log(err);
      });

    // if (data.winner) {
    //   Alert.alert(
    //     "You won!",
    //     data.log,
    //     [
    //       {
    //         text: "OK",
    //         onPress: () => {
    //           this.setState({ opponents: null });
    //         }
    //       }
    //     ],
    //     { cancelable: false }
    //   );
    // } else {
    //   Alert.alert(
    //     "You lose!",
    //     data.log,
    //     [
    //       {
    //         text: "OK",
    //         onPress: () => {
    //           this.setState({ opponents: null });
    //         }
    //       }
    //     ],
    //     { cancelable: false }
    //   );
    // }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 100, height: 70, margin: 10 }}
          source={require("../assets/logo.png")}
        />
        <Text style={{ color: "white", fontSize: 20, marginBottom: 10 }}>
          Opponents:
        </Text>
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
        {this.state.battleResult && this.state.display ? (
          <BattleResultModal
            display={this.state.display}
            result={this.state.battleResult}
            onClose={this.triggerModal}
          />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#221F1F"
  }
});
