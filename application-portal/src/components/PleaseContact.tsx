import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
  StyleSheet
} from "react-native";

class PleaseContact extends Component {
  render() {
    return (
      <View style={styles.containerContact}>
        <Text style={{ fontSize: 12 }}>Contact </Text>
        <Text
          style={{ fontSize: 14, color: "#482f92" }}
          onPress={() => Linking.openURL("https://www.banpuinfinergy.co.th/")}
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
        <DialCall />
      </View>
    );
  }
}
class DialCall extends Component {
  dialCall = () => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = "tel:${0811862100}";
    } else {
      phoneNumber = "telprompt:${0811862100}";
    }
    Linking.openURL(phoneNumber);
  };
  render() {
    return (
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
    );
  }
}
const styles = StyleSheet.create({
  containerContact: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default PleaseContact;
DialCall;
