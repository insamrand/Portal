import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

interface IState {
  AppItem: any[];
}

export default class HomeItems extends Component<IState> {
  state: IState;

  render() {
    this.state = {
      AppItem: [
        {
          name: "snapchat",
          img:
            "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        },
        {
          name: "snapchat",
          img:
            "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        },
        {
          name: "snapchat",
          img:
            "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        },
        {
          name: "snapchat",
          img:
            "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        },
        {
          name: "snapchat",
          img:
            "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        },
        {
          name: "snapchat",
          img:
            "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        },
        {
          name: "snapchat",
          img:
            "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        },
        {
          name: "snapchat",
          img:
            "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        },
        {
          name: "snapchat",
          img:
            "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        },
        {
          name: "snapchat",
          img:
            "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        },
        {
          name: "snapchat",
          img:
            "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        },
        {
          name: "snapchat",
          img:
            "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        },
        {
          name: "snapchat",
          img:
            "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        }
      ]
    };
    return (
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        {this.state.AppItem.map((item, index) => {
          return (
            <View key={index} style={styles.flexItems}>
              <View style={{ marginBottom: 10 }}>
                <Image
                  style={{ width: 75, height: 75 }}
                  source={{ uri: item.img }}
                />
              </View>
              <Text style={{ fontSize: 12 }}>{item.name}</Text>
            </View>
          );
        })}
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
