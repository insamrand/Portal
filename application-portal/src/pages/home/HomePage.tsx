import React, { Component } from "react";
import { Text, View } from "react-native";

export class HomePage extends Component {
  static navigationOptions = {
    title: "HomePage"
  };
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default HomePage;
