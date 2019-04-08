import React from "react";
import {
  Image,
  Text,
  Alert,
  Button,
  TextInput,
  View,
  StyleSheet
} from "react-native";

import { login } from "../authorization/authorization";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.navigation.state);

    this.state = {
      usernameInput: this.props.navigation.getParam("username", ""),
      passwordInput: this.props.navigation.getParam("password", ""),
      username: null,
      accessToken: null,
      decoded_id_token: null
    };
  }

  componentDidMount() {
    this._sub = this.props.navigation.addListener("didFocus", () => {
      this.setState({
        usernameInput: this.props.navigation.getParam("username", ""),
        passwordInput: this.props.navigation.getParam("password", "")
      });
    });
  }

  async onLogin() {
    const { usernameInput, passwordInput } = this.state;

    let res = await login(usernameInput, passwordInput);

    if (!res.error) {
      this.props.navigation.navigate("App");
    } else if (res.error) {
      Alert.alert("Failed", res.error_description);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.username ? (
          <View style={styles.container}>
            <Image
              style={{ width: 45, height: 45, margin: 40 }}
              source={{ uri: this.state.decoded_id_token.picture }}
            />
            <Text style={styles.title}>{this.state.username} logged in!</Text>
          </View>
        ) : (
          <View style={styles.container}>
            <TextInput
              value={this.state.usernameInput}
              onChangeText={usernameInput => this.setState({ usernameInput })}
              placeholder={"Email"}
              style={styles.input}
            />
            <TextInput
              value={this.state.passwordInput}
              onChangeText={passwordInput => this.setState({ passwordInput })}
              placeholder={"Password"}
              secureTextEntry={true}
              style={styles.input}
            />
            <Button
              title={"Login"}
              style={styles.input}
              onPress={this.onLogin.bind(this)}
            />
            <Button
              title={"SignUp"}
              style={styles.signupButton}
              onPress={() => {
                this.props.navigation.navigate("SignUp");
              }}
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
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10
  }
});