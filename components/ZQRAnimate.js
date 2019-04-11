import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Image, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class ZQRAnimate extends Component {

    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Animatable.View style={styles.blackground} animation={'fadeIn'}></Animatable.View>
                <Animatable.Image
                    delay={1500}
                    animation={{from: {translateY: 800}, to: {translateY: 0}}}
                    style={styles.fire}
                    source={{ uri: "https://i.pinimg.com/originals/f3/ff/b2/f3ffb2d584f09068aee6e9360dc13b34.gif"}} />
                <Animatable.View style={styles.fight} animation="fadeOutUp" delay={1500}>
                    <Animatable.Image animation="lightSpeedIn" source={require('../assets/fight.png')} />
                </Animatable.View>
                <Animatable.View animation={{from: {translateX: -100}, to: {translateX: 0}}} style={styles.bZombie} delay={1500}>
                    <Animatable.Image
                        animation={{
                            0: {
                                translateX: 0,
                                translateY: 20,
                                rotate: '0deg',
                            },
                            0.5: {
                                translateX: 80,
                                translateY:0,
                                rotate: '35deg',
                            },
                            1: {
                                translateX: 0 ,
                                translateY: 20,
                                rotate: '0deg',
                            }
                        }} 
                        iterationCount="infinite"
                        useNativeDriver
                        direction="alternate"
                        style={styles.zombie}
                        delay={3500}
                        source={{uri: "https://i.pinimg.com/originals/c9/3c/1a/c93c1a497abc17384fd5996ca7a671a5.gif"}}
                    />
                </Animatable.View>             
                <Animatable.View style={styles.bHuman} animation={{from: {translateX: 200}, to: {translateX: 0}}} delay={1500}>
                    <Animatable.Image
                        animation={{
                            0: {
                                translateX: 0,
                                translateY: 20,
                                rotate: '0deg',
                            },
                            0.33: {
                                translateX: -80,
                                translateY:0,
                                rotate: '-35deg',
                            },
                            0.66: {
                                translateX: 80,
                                translateY:0,
                                rotate: '35deg',
                            },
                            1: {
                                translateX: 0 ,
                                translateY: 20,
                                rotate: '0deg',
                            }
                        }} 
                        iterationCount="infinite"
                        useNativeDriver
                        direction="alternate"
                        style={styles.zombie}
                        delay={3500}
                        style={styles.human}
                        source={{uri: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/3691834/terry-2x.0.gif"}}
                    />
                </Animatable.View>
                <Animatable.View style={styles.HZombie} animation="fadeIn" delay={1500}>
                    <Animatable.View style={styles.HZbar} animation="fadeIn" delay={15000}></Animatable.View>
                    <Animatable.View style={styles.HZbar} animation="fadeIn" delay={9500}></Animatable.View>
                    <Animatable.View style={styles.HZbar} animation="fadeIn" delay={8000}></Animatable.View>
                    <Animatable.View style={styles.HZbar} animation="fadeIn" delay={7500}></Animatable.View>
                    <Animatable.View style={styles.HZbar} animation="fadeIn" delay={6000}></Animatable.View>
                    <Animatable.View style={styles.HZbar} animation="fadeIn" delay={5000}></Animatable.View>
                    <Animatable.View style={styles.HZbar} animation="fadeIn" delay={4000}></Animatable.View>
                </Animatable.View>
                <Animatable.View style={styles.HHuman} animation="fadeIn" delay={1500}>
                    <Animatable.View style={styles.HZbar} animation="fadeIn" delay={15000}></Animatable.View>
                    <Animatable.View style={styles.HZbar} animation="fadeIn" delay={9800}></Animatable.View>
                    <Animatable.View style={styles.HZbar} animation="fadeIn" delay={8500}></Animatable.View>
                    <Animatable.View style={styles.HZbar} animation="fadeIn" delay={7500}></Animatable.View>
                    <Animatable.View style={styles.HZbar} animation="fadeIn" delay={6300}></Animatable.View>
                    <Animatable.View style={styles.HZbar} animation="fadeIn" delay={5200}></Animatable.View>
                    <Animatable.View style={styles.HZbar} animation="fadeIn" delay={4100}></Animatable.View>
                </Animatable.View>
                <Animatable.View style={{position: "absolute", top:0, left: 0}}animation='fadeIn' delay={11500}>
                    <Animatable.View style={styles.bang}
                        animation={{
                            from: {width: 100, height: 100, translateX: 110, translateY: 280},
                            to: {width: 370, height: 750, translateX: 0, translateY: 0}
                        }}
                        duration={500}
                        delay={10000}
                    >
                        <Image style={{flex:1}}source={{uri: 'https://data.whicdn.com/images/298116765/original.gif'}} />
                    </Animatable.View>
                </Animatable.View>
                <Animatable.View style={{position: 'absolute', width: 370, height:750, top:0, backgroundColor: 'black'}} animation="bounceIn" delay={13800}></Animatable.View>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fight: {
        paddingTop: 500
    },
    fire: {
        width: "100%", 
        height: 700,
        position: "absolute",
        top: 0,
        left: 0
    },
    blackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'black',
        width: 400,
        height: 1000
    },
    zombie: {
        width: 150,
        height: 200
    },
    human: {
        width: 150,
        height: 200
    },
    bZombie: {
        position: 'absolute',
        left: -30,
        top: 200
    },
    bHuman: {
        position: 'absolute',
        right: 0,
        top: 200
    },
    HZombie: {
        flexDirection: 'row',
        position: 'absolute',
        top: 150,
        left: 10,
        width: 150,
        height: 30,
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'white'
    },
    HHuman: {
        flexDirection: 'row',
        position: 'absolute',
        top: 150,
        right: 10,
        width: 150,
        height: 30,
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'white'
    },
    HZbar: {
        flex: 1,
        backgroundColor: 'red'
    },
    bang: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        borderRadius: 20
    }
})