import React, { Component } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "react-redux";
import configureStore from "./src/redux/stores";

import LoginPage from "./src/pages/login/LoginPage";
import ForgotPage from "./src/pages/login/ForgotPage";
import RedeemPage from "./src/pages/login/RedeemPage";
import HomePage from "./src/pages/home/HomePage";

interface IProps {}

interface IState {
  isReady: boolean;
}

const AppNavigator = createStackNavigator({
  LoginPage: { screen: LoginPage },
  ForgotPage: { screen: ForgotPage },
  RedeemPage: { screen: RedeemPage },
  HomePage: { screen: HomePage },
  LogoutPage: { screen: LoginPage }
});

const AppContainer = createAppContainer(AppNavigator);
const store = configureStore();
export default class App extends Component<IProps, IState> {
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
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  banpuLogo: {
    width: 42,
    height: 100,
    resizeMode: "contain"
  }
});
