import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet, Alert } from "react-native";

import ClaimBodyModal from "./ClaimBodyModal";

import { getUserToken } from "../authorization/authorization";

export default class PortfolioScreen extends Component {
  constructor() {
    super();
    this.state = {
      userZombie: null,
      requestBody: null,
      display: false,
      token: null
    };
    this.triggerModal = this.triggerModal.bind(this);
    this.confirmClaim = this.confirmClaim.bind(this);
  }

  async componentDidMount() {
    this._sub = this.props.navigation.addListener("didFocus", () => {
      // console.log(this.props.navigation.getParam("bodyId", null));
      if (this.props.navigation.getParam("bodyId", null) != null) {
        this.getBodyInfo(this.props.navigation.getParam("bodyId", null));
        this.props.navigation.state.params = null;
      } else {
        this.updateZombie();
      }
    });
    this.setState({
      token: await getUserToken()
    });
  }

  componentDidUpdate() {
    if (this.state.userZombie == null) {
      this.updateZombie();
    }
  }

  triggerModal() {
    this.setState(prevState => {
      return {
        display: !prevState.display
      };
    });
  }

  getBodyInfo = async id => {
    let token = this.state.token || (await getUserToken());
    console.log("getbodyinfo", id);

    const reqSetting = {
      headers: new Headers({
        Authorization: `Bearer ${token}`
      })
    };

    fetch(`http://18.236.60.81/body/${id}`, reqSetting)
      .then(res => res.json())
      .then(data => {
        console.log("bodyinfoget", JSON.stringify(data));
        if (!data.err) {
          this.setState({ requestBody: data });
          this.triggerModal();
        } else {
          console.log("failed");
          Alert.alert("Failed", data.err);
        }
      });
  };

  updateZombie = async () => {
    let token = this.state.token || (await getUserToken());

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
  };

  async confirmClaim() {
    let token = this.state.token || (await getUserToken());

    console.log(this.state.requestBody.id);

    const reqSetting = {
      method: "post",
      body: JSON.stringify({ bodyId: this.state.requestBody.id }),
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      })
    };

    fetch(`http://18.236.60.81/body`, reqSetting)
      .then(res => res.json())
      .then(data => {
        console.log("confirm", JSON.stringify(data));
        this.triggerModal();
        this.setState({ requestBody: null, userZombie: null });
      });
  }

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

        {this.state.requestBody && (
          <ClaimBodyModal
            body={this.state.requestBody}
            display={this.state.display}
            onClose={this.triggerModal}
            onConfirm={this.confirmClaim}
          />
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
