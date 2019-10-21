import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Image, Text } from "react-native";
import { Container, Content, List, ListItem, Item } from "native-base";
import { connect } from "react-redux";

export class HomeItems extends Component<any> {
  render() {
    return (
      <View style={styles.flexContainer}>
        {this.props.items.map((item, index) => {
          return (
            <View style={styles.flexItems} key={index}>
              <View style={{ marginBottom: 10 }}>
                <Image style={{ width: 75, height: 75 }} source={item.image} />
              </View>
              <Text style={{ fontSize: 12 }}>{item.title}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  flexItems: {
    width: "33.33%",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = (state: any) => {
  return {
    items: state.home.items
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeItems);
