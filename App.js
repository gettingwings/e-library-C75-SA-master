import React, { Component } from "react";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";
import { LogBox } from "react-native";
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import LoginScreen from './screens/Login';
import BottomTabNavigator from "./components/BottomTabNavigator";

LogBox.ignoreAllLogs();

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return <AppContainer />;
    }
    return null;
  }
}

const Nav = createSwitchNavigator(
  {
    Login:{
      screen: LoginScreen
    },
    BottomTab:{
      screen: BottomTabNavigator
    }
  },{
    initialRouteName: 'Login'
  }
)

const AppContainer = createAppContainer(Nav);
