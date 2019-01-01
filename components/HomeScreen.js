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
import AboutScreen from './AboutScreen.js';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
//import { createMaterialTopTabNavigator,createBottomTabNavigator } from 'react-navigation' for iOS
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Home</Text>
      </View>
    );
  }
}

const RootStack = createMaterialTopTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={20} />
      )
    }
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarLabel: 'About',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="book" size={20} />
      )
    }
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