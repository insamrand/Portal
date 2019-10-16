import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default class HomeItems extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        <View style={styles.flexItems}>
          <View style={{ marginBottom: 10 }}>
            <Image
              style={{ width: 75, height: 75 }}
              source={require("../../../assets/images/icon/snapchat.png")}
            />
          </View>
          <Text style={{ fontSize: 12 }}>Snapchat</Text>
        </View>
        <View style={styles.flexItems}>
          <View style={{ marginBottom: 10 }}>
            <Image
              style={{ width: 75, height: 75 }}
              source={require("../../../assets/images/icon/snapchat.png")}
            />
          </View>
          <Text style={{ fontSize: 12 }}>Snapchat</Text>
        </View>
        <View style={styles.flexItems}>
          <View style={{ marginBottom: 10 }}>
            <Image
              style={{ width: 75, height: 75 }}
              source={require("../../../assets/images/icon/snapchat.png")}
            />
          </View>
          <Text style={{ fontSize: 12 }}>Snapchat</Text>
        </View>
        <View style={styles.flexItems}>
          <View style={{ marginBottom: 10 }}>
            <Image
              style={{ width: 75, height: 75 }}
              source={require("../../../assets/images/icon/snapchat.png")}
            />
          </View>
          <Text style={{ fontSize: 12 }}>Snapchat</Text>
        </View>
        <View style={styles.flexItems}>
          <View style={{ marginBottom: 10 }}>
            <Image
              style={{ width: 75, height: 75 }}
              source={require("../../../assets/images/icon/snapchat.png")}
            />
          </View>
          <Text style={{ fontSize: 12 }}>Snapchat</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexItems: {
    width: "33.33%",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});
