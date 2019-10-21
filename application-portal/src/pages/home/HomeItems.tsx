import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
  Platform
} from "react-native";

export default class HomeItems extends Component<any> {
  _handleOpenWithLinking = (item: any) => {
    console.log(item.title, "Working");
    Linking.canOpenURL(item.app).then(supported => {
      let isAndroid = Platform.OS === "android";
      if (supported) {
        return Linking.openURL(item.app);
        // return Linking.openURL(isAndroid ? item.androidApp : item.appleApp);
      } else {
        return Linking.openURL(isAndroid ? item.androidLink : item.appleLink);
      }
    });
  };
  render() {
    return (
      <View style={styles.flexContainer}>
        {this.props.items.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.flexItems}
              key={index}
              onPress={() => {
                this._handleOpenWithLinking(item);
              }}
            >
              <View style={{ marginBottom: 10 }}>
                <Image style={{ width: 75, height: 75 }} source={item.image} />
              </View>
              <Text style={{ fontSize: 12 }}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  flexItems: {
    width: "33.3333%",
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center"
  }
});
