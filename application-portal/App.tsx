<<<<<<< HEAD
import React, { Component } from 'react'
import {View, StyleSheet, Platform, Linking } from 'react-native'
import { Button, Text } from 'native-base'; 
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
=======
import React, { Component } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
>>>>>>> a292e321a307f617b652ead858ab14220b0590be
import { AppLoading } from "expo";
import {AppLink} from 'react-native-app-link';
import { AppInstalledChecker, CheckPackageInstallation } from 'react-native-check-app-install';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
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
<<<<<<< HEAD

    
  }

  buttonClick = () => {

=======
>>>>>>> a292e321a307f617b652ead858ab14220b0590be
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

<<<<<<< HEAD
    return (
      <View>
      
      <Button full onPress={(this.buttonClick = () =>{
      if(Platform.OS == 'android'){
        console.log('android');
        // Linking.openURL('twitter://timeline')
        Linking.openURL('https://lihweb.banpu.co.th/mobile/package/LIH-Production.apk')
      }else{
        console.log('ios');
        Linking.openURL(
          `https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/freeProductCodeWizard?code=JNTYXJTRAPHX`
        );
      }
     
      })}><Text>test</Text></Button>
      </View>

    );
=======
    return <AppContainer />;
>>>>>>> a292e321a307f617b652ead858ab14220b0590be
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
