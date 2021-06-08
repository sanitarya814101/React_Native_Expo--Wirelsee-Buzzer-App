import * as React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import {createAppContainer,createSwitchNavigator} from "react-navigation"

import SoundButton from './components/SoundButton';
import AppHeader from './components/AppHeader';

import HomeScreen from "./Screen/HomeScreen";
import BuzzerScreen from "./Screen/BuzzerScreen"

export default class App extends React.Component {

  render() {
    return (<View>
    <AppContainer/>
    </View>);
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  BuzzerScreen:BuzzerScreen
})

const AppContainer = createAppContainer(AppNavigator)