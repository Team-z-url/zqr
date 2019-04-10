import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  StatusBar,
  Modal
} from "react-native";
import { BarCodeScanner, Permissions } from "expo";

export default class QRCodeScannerModal extends React.Component {
  state = {
    hasCameraPermission: null,
    scanSuccess: false
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted"
    });
  }

  cancelAlert() {
    Alert.alert("Would you like to finish scanning?");
  }

  render() {
    const { hasCameraPermission } = this.state;

    return (
      <Modal
        visible={this.props.display}
        animationType='slide'
        onRequestClose={() => console.log("closed")}>
        <BarCodeScanner
          onBarCodeRead={e => {
            if (this.scanSuccess) {
              return;
            } else {
              this.props.onScanned(e.data);
            }
          }}
          style={[StyleSheet.absoluteFill, styles.container]}>
          <StatusBar barStyle='light-content' />
          <View style={styles.layerTop}>
            <Text style={styles.description}>Scan QR code</Text>
          </View>
          <View style={styles.layerCenter}>
            <View style={styles.layerLeft} />
            <View style={styles.focused} />
            <View style={styles.layerRight} />
          </View>
          <View style={styles.layerBottom}>
            <Text onPress={() => this.props.onClose()} style={styles.cancel}>
              Cancel
            </Text>
          </View>
        </BarCodeScanner>
      </Modal>
    );
  }

  handleBarCodeScanned = ({ data }) => {
    Alert.alert("data: " + data);
  };
}

const bgColor = "rgba(0, 0, 0, .6)";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  layerTop: {
    flex: 1,
    backgroundColor: bgColor
  },
  layerCenter: {
    flex: 1,
    flexDirection: "row"
  },
  layerLeft: {
    flex: 1,
    backgroundColor: bgColor
  },
  focused: {
    flex: 3
  },
  layerRight: {
    flex: 1,
    backgroundColor: bgColor
  },
  layerBottom: {
    flex: 1,
    backgroundColor: bgColor
  },
  description: {
    fontSize: 25,
    marginTop: "40%",
    textAlign: "center",
    color: "#fff"
  },
  cancel: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    marginTop: "30%"
  }
});
