import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
  ScrollView
} from "react-native";

//**  Usage : */
// {this.props.nameProps},{this.props.lastnameProps}
// {this.state.name},{this.state.lastName}

export default class ForgotPage extends Component<any> {
  static navigationOptions = {
    title: "Forgot Password",
    headerStyle: {
      backgroundColor: "#482f92"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  dialCall = () => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      phoneNumber = "tel:${1234567890}";
    } else {
      phoneNumber = "telprompt:${1234567890}";
    }

    Linking.openURL(phoneNumber);
  };

  // onPressLogin = (text: string) => {
  //   this.setState({ status: true });
  //   Alert.alert("Success", this.state.email + " " + text);
  //   // Actions.landing();
  // };

  render() {
    //** Before Usage : */
    // {this.props.nameProps}
    // No need to use old style

    //** Now Usage : */
    // {nameProps}

    const {
      containerFluid,
      containerColor,
      containerScrollView,
      containerView,
      containerImage,
      containerInput,
      borderLine,
      containerButton,
      textButton,
      containerForgot,
      containerContact
    } = styles;
    return (
      <SafeAreaView style={[containerFluid, containerColor]}>
        <ScrollView contentContainerStyle={containerScrollView}>
          <View style={containerView}>
            <View style={containerImage}>
              <Image
                style={{ width: 42, height: 100 }}
                source={require("../../../assets/images/banpu_logo.png")}
              />
            </View>
            <TouchableOpacity style={{ marginTop: 30 }}>
              <TextInput
                maxLength={100}
                style={containerInput}
                placeholder="Email"
                onChangeText={email => this.setState({ email })}
              />
            </TouchableOpacity>
            <View style={borderLine}>
              <TouchableOpacity
                style={containerButton}
                onPress={() => this.props.navigation.navigate("RedeemPage")}
              >
                <Text style={textButton}>Get Code</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={containerContact}>
            <Text style={{ fontSize: 12 }}>Contact </Text>
            <Text
              style={{ fontSize: 14, color: "#482f92" }}
              onPress={() =>
                Linking.openURL("https://www.banpuinfinergy.co.th/")
              }
            >
              BANPU
            </Text>
            <Text style={{ fontSize: 12 }}> Support at : </Text>
            <Image
              style={{ width: 20, height: 20 }}
              source={{
                uri:
                  "https://img.icons8.com/ios-glyphs/30/000000/phone-disconnected.png"
              }}
            />
            <TouchableOpacity onPress={this.dialCall}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#482f92",
                  textDecorationLine: "underline"
                }}
              >
                (xxx) xxx-xxxx
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerFluid: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  containerColor: {
    backgroundColor: "rgba(72, 47, 146,.1)"
  },
  containerScrollView: {
    flexGrow: 1,
    justifyContent: "center"
  },
  containerView: {
    marginTop: 30,
    padding: 30,
    borderRadius: 15,
    borderColor: "#482f92",
    backgroundColor: "#ffffff"
  },
  containerImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: -100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#ffffff",
    borderColor: "rgba(72, 47, 146,.1)",
    borderWidth: 5
  },
  containerInput: {
    borderRadius: 15,
    borderColor: "#482f92",
    backgroundColor: "rgba(72, 47, 146,.1)",
    paddingLeft: 20,
    paddingVertical: 12,
    height: 40
  },
  borderLine: {
    marginTop: 30,
    paddingTop: 30,
    borderTopWidth: 2,
    borderColor: "#482f92"
  },
  containerButton: {
    backgroundColor: "#482f92",
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 50
  },
  textButton: {
    color: "#ffffff",
    fontSize: 15,
    alignSelf: "center"
  },
  containerForgot: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  containerContact: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  boxShadow: {
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1
  }
});
