import React from 'react';
import { Image, Text, Alert, TextInput, View, StyleSheet, TouchableHighlight } from 'react-native';

const auth0ClientId = 'ZLDepP0e3CUPK6k1qcsQU86R1Zk9KxEp';
const auth0Domain = 'https://zombie-qr.auth0.com';
const connection = 'Username-Password-Authentication';

// Test user
// email:       test@bcit.ca
// password:    TESTtest1234

export default class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            usernameInput: '',
            passwordInput: '',
            confirmPasswordInput: ''
        };
    }

    onSignUp() {
        const { usernameInput, passwordInput, confirmPasswordInput } = this.state;

        if (passwordInput == confirmPasswordInput) {
            let data = {
                method: 'POST',
                body: JSON.stringify({
                    client_id: auth0ClientId,
                    email: usernameInput,
                    password: passwordInput,
                    connection: connection
                }),
                headers: {
                  'Accept':       'application/json',
                  'Content-Type': 'application/json'
                }
            }
            fetch(auth0Domain.concat('/dbconnections/signup'), data)
                .then(response => response.json())
                .then(res => {
                    if (res.error) {
                        Alert.alert('Failed', res.error);
                    } else if (res._id) {
                        console.log(res)
                        this.props.navigation.navigate('SignIn',{username:usernameInput,password:passwordInput})
                    } else {
                        Alert.alert('Failed', res.code || 'Something is wrong, see console');
                        console.log(res)
                    }
                })
        } else {
            Alert.alert('Confirm Password', 'Password must be the same')
        }

        
    }


    render() {
        return(
            <View style={styles.container}>

                {this.state.username?
                    <View style={styles.container}>
                        <Image style={{width:45,height:45,margin:40}} ></Image>
                        <Text style={styles.title}>{this.state.username} logged in!</Text> 
                    </View>:
                    <View style={styles.container}>
                        <Image
                        style={{ width: 200, height: 120, margin: 40 }}
                        source={require('../assets/logo.png')}
                        />
                        <TextInput
                            value={this.state.usernameInput}
                            onChangeText={(usernameInput) => this.setState({ usernameInput })}
                            placeholder={'Email'}
                            style={styles.input}
                        />
                        <TextInput
                            value={this.state.passwordInput}
                            onChangeText={(passwordInput) => this.setState({ passwordInput })}
                            placeholder={'Password'}
                            secureTextEntry={true}
                            style={styles.input}
                        />
                        <TextInput
                            value={this.state.confirmPasswordInput}
                            onChangeText={(confirmPasswordInput) => this.setState({ confirmPasswordInput })}
                            placeholder={'Confirm Password'}
                            secureTextEntry={true}
                            style={styles.input}
                        />
                        <TouchableHighlight
                            style={styles.signupBut}
                            onPress={this.onSignUp.bind(this)}
                        >
                        <Text style={styles.text}>Sign Up</Text>
                        </TouchableHighlight>
                    </View>
                }

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#221F1F"
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: "white",
    },
    signupBut: {
        width: 200,
        height: 37,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: "center",
        backgroundColor: "#21AC1D",
        padding: 10,
        margin: 30,
        borderRadius: 5
      },
      text: {
        color: 'white'
      },
});