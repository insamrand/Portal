import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from "expo";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginPage from './src/pages/login/LoginPage';
import ForgotPage from './src/pages/login/ForgotPage';
import RedeemPage from './src/pages/login/RedeemPage';
import HomePage from './src/pages/home/HomePage';

interface IProps {}

interface IState {
  isReady: boolean;
}

const AppNavigator = createStackNavigator({
  LoginPage: { screen: LoginPage },
  ForgotPage: { screen: ForgotPage },
  RedeemPage: { screen: RedeemPage },
  HomePage: { screen: HomePage }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

  readonly state: IState = {
    isReady: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
   
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <AppContainer/>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

