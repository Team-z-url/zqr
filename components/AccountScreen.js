import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ListView,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from "react-native";
import { SecureStore } from "expo";

import QRCodeScannerModal from "./QRCodeScannerModal";

import { getUserToken, logOut } from "../authorization/authorization";

export default class AccountScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false,
      qrId: null
    };

    this.triggerModal = this.triggerModal.bind(this);
    this.requestBody = this.requestBody.bind(this);
  }

  showJwt = async () => {
    const value = await getUserToken();
    if (value !== null) {
      Alert.alert("User token", value);
    }
  };

  triggerModal() {
    this.setState(prevState => {
      return {
        display: !prevState.display
      };
    });
  }

  onLogOut = async () => {
    try {
      await logOut();
      this.props.navigation.navigate("Auth");
    } catch (error) {
      console.log(error);
    }
  };

  onRefreshToken = async () => {
    refreshUserToken();
  };

  async requestBody(bodyId) {
    console.log(bodyId);
    this.triggerModal();
    this.props.navigation.navigate("Portfolio", {
      request: true,
      bodyId: bodyId
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.showJwt} style={styles.touchable}>
          <Text>Show jwt</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onRefreshToken}
          style={styles.touchable}>
          <Text>Refresh Token</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.triggerModal} style={styles.touchable}>
          <Text>Scan QR Code</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onLogOut} style={styles.touchable}>
          <Text>Log Out</Text>
        </TouchableOpacity>

        <QRCodeScannerModal
          display={this.state.display}
          onClose={this.triggerModal}
          onScanned={this.requestBody}
        />
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
  },
  touchable: {
    padding: 10,
    margin: 10,
    backgroundColor: "#FFEABA",
    borderRadius: 5
  }
});
