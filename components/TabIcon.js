import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const icons = {
  portfolio: {
    imgName: "portfolio",
    uri: require("../assets/icons/portfolio.png")
  },
  battle: {
    imgName: "battle",
    uri: require("../assets/icons/battle.png")
  },
  bodies: {
    imgName: "bodies",
    uri: require("../assets/icons/bodies.png")
  },
  account: {
    imgName: "account",
    uri: require("../assets/icons/account.png")
  }
};

export default class TabIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const iconName = this.props.icon;
    return (
      <Image
        style={{ marginTop: 5, width: 26, height: 30 }}
        source={icons[iconName].uri}
      />
    );
  }
}
