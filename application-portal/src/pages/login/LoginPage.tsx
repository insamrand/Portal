import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Content, Form, Item, Label, Input } from "react-native";

export class App extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.banpuLogo}
          source={require("./src/assets/images/banpu_logo.png")}
        />
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </View>
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
export default App;
