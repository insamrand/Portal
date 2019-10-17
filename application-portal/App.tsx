import React, { Component } from "react";
import {View, StyleSheet, Platform, Linking } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import {AppLink} from 'react-native-app-link';
import { AppInstalledChecker, CheckPackageInstallation } from 'react-native-check-app-install';
import { Button, Text, Footer, Content, FooterTab } from "native-base";
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
      <AppContainer/>
      // <View>
      //   <Button
      //     style={{ marginTop: 50 }}
      //     full
      //     onPress={
      //       (this.buttonClick = () => {
      //         if (Platform.OS == "android") {
    
      //           Linking.canOpenURL('whatsapp').then(res=>{
      //            if(res==true){
      //             Linking.openURL('whatsapp://send')
      //             console.log(res);
      //            }else{
      //             Linking.openURL('https://lihweb.banpu.co.th/mobile/package/LIH-Production.apk')
      //             console.log(res);   
      //            }
                 
      //           })
          
      //         } else {
      //           console.log("ios");
                
      //         }
      //       })
      //     }
      //   >
      //     <Text>Whatapp check install</Text>
          
      //   </Button>

      //   <Text
      //     style={{
      //       alignItems: "center",
      //       textAlign: "center",
      //       alignSelf: "center"
      //     }}
      //   >
      //     Platform is {Platform.OS}
      //   </Text>
      // </View>
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
