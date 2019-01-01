/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,
  StyleSheet,
  Text,
  View} from 'react-native';
import { createStackNavigator,
  createAppContainer } from 'react-navigation';

import LoginScreen from './components/LoginScreen.js';
import HomeScreen from './components/HomeScreen.js';
import AboutScreen from './components/AboutScreen.js';

const RootStack = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
});

const App = createAppContainer(RootStack);

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
