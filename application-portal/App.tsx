import React, { Component } from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "react-redux";
import configureStore from "./src/redux/stores";

import LoginPage from "./src/pages/login/LoginPage";
import ForgotPage from "./src/pages/login/ForgotPage";
import HomePage from "./src/pages/home/HomePage";

const store = configureStore();

const AppNavigator = createStackNavigator({
  LoginPage: { screen: LoginPage },
  ForgotPage: { screen: ForgotPage },
  HomePage: { screen: HomePage },
  LogoutPage: { screen: LoginPage }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component<any> {
  readonly state = {
    isReady: false
  };
  buttonClick = () => {};
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
