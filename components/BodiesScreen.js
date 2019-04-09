import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet, FlatList } from "react-native";

import BodyTouchable from "./BodyTouchable";
import BodyModal from "./BodyModal";

import { getUserToken } from "../authorization/authorization";

export default class BodiesScreen extends Component {
  constructor() {
    super();
    this.state = {
      bodies: null,
      display: false,
      selectedBody: null
    };

    this.triggerModal = this.triggerModal.bind(this);
    this.showBodyDetail = this.showBodyDetail.bind(this);
    this.requestBody = this.requestBody.bind(this);
  }

  componentDidMount() {
    this._sub = this.props.navigation.addListener("didFocus", () => {
      this.updateBodies();
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
    let token = await getUserToken();

    const reqSetting = {
      headers: new Headers({
        Authorization: `Bearer ${token}`
      })
    };

    let result = await fetch("http://18.236.60.81/bodies", reqSetting);
    data = await result.json();
    console.log(data);
    this.setState({ bodies: data });
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
        <Text>Bodies:</Text>
        {this.state.bodies && (
          <FlatList
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
    backgroundColor: "#fff",
    top: "20%"
  }
});
