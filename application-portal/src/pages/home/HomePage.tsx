import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  BackHandler,
  TouchableOpacity
} from "react-native";
import HomeItems from "./HomeItems";

export default class HomePage extends Component<any> {
  [x: string]: any;

  // componentWillMount() {
  //   this.backHandler = BackHandler.addEventListener(null, () => {
  //     return true;
  //   });
  // }

  // componentWillUnmount() {
  //   this.backHandler.remove();
  // }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}

handleBackButton = () => {
    //add your code
  BackHandler.exitApp()
    return true;
};

  static navigationOptions = ({ navigation }) => ({
    title: "Portal Application",
    gesturesEnabled: false,
    headerLeft: null,
    headerStyle: {
      backgroundColor: "#482f92"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
        <Image
          style={{
            width: 25,
            height: 25,
            marginRight: 15,
            tintColor: "#ffffff"
          }}
          source={require("../../../assets/images/icon/logout.png")}
        />
      </TouchableOpacity>
    )
  });

  render() {
    return (
      <SafeAreaView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <View style={{ marginBottom: 10 }}>
            <Image
              style={{ width: 42, height: 100 }}
              source={require("../../../assets/images/banpu_logo.png")}
            />
          </View>
          <Text style={{ fontSize: 25 }}>Banpu App Portal</Text>
        </View>
      
        <ScrollView
          style={{
            backgroundColor: "rgba(72, 47, 146,.5)",
            padding: 20,
            // marginBottom: 80,
            height: '100%'
          }}
        >
          <HomeItems />
        </ScrollView>
     
        
      </SafeAreaView>
    );
  }
}
