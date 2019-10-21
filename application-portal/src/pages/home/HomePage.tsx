import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  BackHandler,
  TouchableOpacity,
  Linking
} from "react-native";
import { connect } from "react-redux";
import HomeItems from "./HomeItems";

class HomePage extends Component<any> {
  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this._BackHandler);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this._BackHandler);
  }

  _BackHandler = () => {
    BackHandler.exitApp();
    return true;
  };

  // _handleOpenWithLinking = () => {
  //   Linking.canOpenURL("fb://").then(supported => {
  //     if (supported) {
  //       return Linking.openURL("fb://");
  //     } else {
  //       return Linking.openURL("https://www.facebook.com/");
  //     }
  //   });
  // };
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
          style={styles.imageLogout}
          source={require("../../../assets/images/icon/logout.png")}
        />
      </TouchableOpacity>
    )
  });

  render() {
    return (
      <SafeAreaView style={[styles.containerFluid, styles.containerColor]}>
        <View style={styles.containerView}>
          <View style={styles.containerImage}>
            <Image
              style={{ width: 42, height: 100 }}
              source={require("../../../assets/images/banpu_logo.png")}
            />
          </View>
          <View style={styles.borderLine}>
            <Text style={{ fontSize: 25, textAlign: "center" }}>
              Banpu App Portal
            </Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.containerScrollView}>
          <View style={styles.containerItems}>
            <HomeItems {...this.props} />
          </View>
          <TouchableOpacity
            onPress={() => {
              console.log("Work");
            }}
          >
            <Text>Console.Log</Text>
          </TouchableOpacity>
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
    alignSelf: "stretch",
    marginTop: 105,
    marginHorizontal: 20,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: "rgba(255, 255, 255,.8)"
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
  borderLine: {
    paddingBottom: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderColor: "#482f92"
  },
  containerItemsTop: {
    flex: 1,
    height: 30,
    width: "100%",
    marginHorizontal: 20,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: "rgba(255, 255, 255,.8)"
  },
  containerItems: {
    flex: 1,
    marginBottom: 20,
    marginHorizontal: 20,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "rgba(255, 255, 255,.8)"
  },
  imageLogout: {
    width: 25,
    height: 25,
    marginRight: 15,
    tintColor: "#ffffff"
  }
});

const mapStateToProps = (state: any) => {
  console.log(state.home.items);
  return {
    items: state.home.items
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
