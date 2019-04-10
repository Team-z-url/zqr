import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import fetch from "react-native-fetch-polyfill";

import BodyTouchable from "./BodyTouchable";
import BodyModal from "./BodyModal";

import { getUserToken } from "../authorization/authorization";

export default class BodiesScreen extends Component {
  constructor() {
    super();
    this.state = {
      bodies: null,
      display: false,
      selectedBody: null,
      token: null
    };

    this.triggerModal = this.triggerModal.bind(this);
    this.showBodyDetail = this.showBodyDetail.bind(this);
    this.requestBody = this.requestBody.bind(this);
  }

  async componentDidMount() {
    this._sub = this.props.navigation.addListener("didFocus", () => {
      this.updateBodies();
    });
    this.setState({
      token: await getUserToken()
    });
  }

  componentDidUpdate() {
    if (this.state.bodies == null) {
      this.updateBodies();
    }
  }

  triggerModal() {
    this.setState(prevState => {
      return {
        display: !prevState.display
      };
    });
  }

  async requestBody() {
    this.triggerModal();
    this.props.navigation.navigate("Portfolio", {
      request: true,
      bodyId: this.state.selectedBody.id
    });
  }

  updateBodies = async () => {
    console.log("updating bodies");
    let token = this.state.token || (await getUserToken());

    const reqSetting = {
      headers: new Headers({
        Authorization: `Bearer ${token}`
      }),
      timeout: 1500
    };

    fetch("http://18.236.60.81/bodies", reqSetting)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ bodies: data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  showBodyDetail(index) {
    this.setState({
      selectedBody: this.state.bodies[index]
    });
    this.triggerModal();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 100, height: 70, margin: 20 }}
          source={require('../assets/logo.png')}
        />
        <Text style={styles.text}>Bodies:</Text>
        {this.state.bodies && (
          <FlatList
            style={styles.text}
            data={this.state.bodies}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item, index }) => (
              <BodyTouchable
                name={item.name}
                onpress={this.showBodyDetail}
                bodyIndex={index}
              />
            )}
          />
        )}

        {this.state.selectedBody && (
          <BodyModal
            body={this.state.selectedBody}
            display={this.state.display}
            onClose={this.triggerModal}
            onRequest={this.requestBody}
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
    backgroundColor: "#221F1F",
    paddingTop: '20%'
  },
  text: {
    color: 'white',
    fontSize: 30
  }
});
