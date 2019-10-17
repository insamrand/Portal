import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  BackHandler
} from "react-native";
import HomeItems from "./HomeItems";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class HomePage extends Component<any> {
  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
      // Typically you would use the navigator here to go to the last state.
      return true;
    });
  }

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

  _Logout() {
    () => this.props.navigation.navigate("LogoutPage");
    console.log("WOrk");
  }

  componentDidMount() {
    this.props.navigation.setParams({ Logout: this._Logout });
  }

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
   
          <HomeItems/>
  
        </ScrollView>
     
        
      </SafeAreaView>
    );
  }
}
