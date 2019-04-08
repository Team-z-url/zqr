import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "react-native";

import { getUserToken } from "../authorization/authorization";

export default class PortfolioScreen extends Component {
  constructor() {
    super();
    this.state = {
      userZombie: null
    };
  }

  componentDidMount() {
    this._sub = this.props.navigation.addListener("didFocus", () => {
      this.updateZombie();
    });
  }

  updateZombie = async () => {
    let token = await getUserToken();

    console.log(token);

    const reqSetting = {
      headers: new Headers({
        Authorization: `Bearer ${token}`
      })
    };

    fetch("http://18.236.60.81", reqSetting)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ userZombie: data });
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
    // console.log(fetchResult);
    // data = await fetchResult.json();
    // console.log(data);
    // this.setState({ userZombie: data });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.userZombie && (
          <View>
            <Text>Name: {this.state.userZombie.name}</Text>
            <Text>HP: {this.state.userZombie.health}</Text>
            <Text>Attack: {this.state.userZombie.attack}</Text>
            <Text>Defense: {this.state.userZombie.defense}</Text>
            <Text>Speed: {this.state.userZombie.speed}</Text>
            <Text>Since: {this.state.userZombie.since}</Text>
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
