/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar} from 'react-native';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//type Props = {};
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Signup/>
      </View>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#eff5f5',
    alignItems:'center',
    justifyContent:'center'
  }
});
