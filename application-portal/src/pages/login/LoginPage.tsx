import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import PleaseContact from "../../components/PleaseContact";

class LoginPage extends Component<any> {
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

  state = {
    email: "",
    password: ""
  };
  _onPressLogin = () => {
    this.props.navigation.navigate("HomePage");
  };
  // _onPressLogin = () => {
  //   if (this.state.email != this.props.login.users[0].email) {
  //     return Alert.alert("Login Fail", "Invalid Email");
  //   } else if (this.state.password != this.props.login.users[0].password) {
  //     return Alert.alert("Login Fail", "Invalid Password");
  //   } else {
  //     return Alert.alert(
  //       "Login Success",
  //       "Welcome" + " " + this.props.login.users[0].name,
  //       [
  //         {
  //           text: "OK",
  //           onPress: () => this.props.navigation.navigate("HomePage")
  //         }
  //       ],
  //       { cancelable: false }
  //     );
  //   }
  // };
  render() {
    return (
      <SafeAreaView style={[styles.containerFluid, styles.containerColor]}>
        <ScrollView contentContainerStyle={styles.containerScrollView}>
          <View style={styles.containerView}>
            <View style={styles.containerImage}>
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
                style={styles.containerInput}
                placeholder="Email"
                onChangeText={email => this.setState({ email })}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 30 }}>
              <TextInput
                style={styles.containerInput}
                maxLength={100}
                secureTextEntry={true}
                placeholder="password"
                onChangeText={password => this.setState({ password })}
              />
            </TouchableOpacity>
            <View style={styles.borderLine}>
              <TouchableOpacity
                style={styles.containerButton}
                onPress={this._onPressLogin}
              >
                <Text style={styles.textButton}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.containerForgot}
            onPress={() => this.props.navigation.navigate("ForgotPage")}
          >
            <Text style={{ fontSize: 14, color: "#482f92" }}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
          <PleaseContact />
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

const mapStateToProps = (state: any) => {
  console.log(state.login);
  return {
    login: state.login
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
