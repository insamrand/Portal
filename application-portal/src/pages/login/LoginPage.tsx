import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
  Linking,
  ScrollView
} from "react-native";

//**  Usage : */
// {this.props.nameProps},{this.props.lastnameProps}
// {this.state.name},{this.state.lastName}

interface IState {
  userName?: string;
  passWord?: string;
  status?: boolean;
}

export default class LoginPage extends Component<any, IState> {
  static navigationOptions = {
    title: "Login",
    headerLeft: null,
    headerStyle: {
      backgroundColor: "#482f92"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  public static defaultProps = {
    inputName1: "Email",
    inputName2: "Password"
  };

  state: IState = {
    userName: "",
    passWord: "",
    status: false
  };

  dialCall = () => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      phoneNumber = "tel:${0811862100}";
    } else {
      phoneNumber = "telprompt:${0811862100}";
    }

    Linking.openURL(phoneNumber);
  };

  // onPressLogin = (text: string) => {
  //   this.setState({ status: true });
  //   Alert.alert("Success", this.state.userName + " " + text);
  //   // Actions.landing();
  // };
  onPressLogin = () => {
    Alert.alert("Success", this.state.userName);
    if (this.state.userName !== "abc") {
      setTimeout(() => {
        this.props.navigation.navigate("HomePage");
      });
    } else {
      Alert.alert("Login Fail", "Unknow" + " " + this.state.userName);
    }
  };

  render() {
    //** Before Usage : */
    // {this.props.nameProps}
    // No need to use old style

    //** Now Usage : */
    // {nameProps}

    const { inputName1, inputName2 } = this.props;

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
            <Text style={{ fontSize: 25, textAlign: "center" }}>
              Banpu App Portal
            </Text>
            <TouchableOpacity style={{ marginTop: 30 }}>
              <TextInput
                maxLength={100}
                style={containerInput}
                placeholder={inputName1}
                onChangeText={userName => this.setState({ userName })}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 30 }}>
              <TextInput
                style={containerInput}
                maxLength={100}
                secureTextEntry={true}
                placeholder={inputName2}
                onChangeText={passWord => this.setState({ passWord })}
              />
            </TouchableOpacity>
            <View style={borderLine}>
              <TouchableOpacity
                style={containerButton}
                onPress={() => this.props.navigation.navigate("HomePage")}
              >
                <Text style={textButton}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={containerForgot}
            onPress={() => this.props.navigation.navigate("ForgotPage")}
          >
            <Text style={{ fontSize: 14, color: "#482f92" }}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
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
                (081) 186-2100
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

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
    marginTop: 75,
    paddingHorizontal: 30,
    paddingBottom: 30,
    borderRadius: 15,
    borderColor: "#482f92",
    backgroundColor: "#ffffff"
  },
  containerImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: -75,
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
