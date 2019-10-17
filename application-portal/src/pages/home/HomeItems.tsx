import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import { Container, Content, List, ListItem, Text } from "native-base";
import { connect } from "react-redux";

export class HomeItems extends Component {
  static propTypes = {
    items: PropTypes
  };

  static defaultProps = {
    items: [{ title: "a" }, { title: "b" }, { title: "c" }, { title: "d" }]
  };

  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.props.items.map((item, index) => {
              return (
                <ListItem key={index}>
                  <Text>{item.title}</Text>
                </ListItem>
              );
            })}
          </List>
        </Content>
      </Container>
    );
    // return (
    //   <View
    //     style={{
    //       flexDirection: "row",
    //       flexWrap: "wrap"
    //     }}
    //   >
    //     <View style={styles.flexItems}>
    //       <View style={{ marginBottom: 10 }}>
    //         <Image
    //           style={{ width: 75, height: 75 }}
    //           source={require("../../../assets/images/icon/snapchat.png")}
    //         />
    //       </View>
    //       <Text style={{ fontSize: 12 }}>Snapchat</Text>
    //     </View>
    //     <View style={styles.flexItems}>
    //       <View style={{ marginBottom: 10 }}>
    //         <Image
    //           style={{ width: 75, height: 75 }}
    //           source={require("../../../assets/images/icon/snapchat.png")}
    //         />
    //       </View>
    //       <Text style={{ fontSize: 12 }}>Snapchat</Text>
    //     </View>
    //     <View style={styles.flexItems}>
    //       <View style={{ marginBottom: 10 }}>
    //         <Image
    //           style={{ width: 75, height: 75 }}
    //           source={require("../../../assets/images/icon/snapchat.png")}
    //         />
    //       </View>
    //       <Text style={{ fontSize: 12 }}>Snapchat</Text>
    //     </View>
    //     <View style={styles.flexItems}>
    //       <View style={{ marginBottom: 10 }}>
    //         <Image
    //           style={{ width: 75, height: 75 }}
    //           source={require("../../../assets/images/icon/snapchat.png")}
    //         />
    //       </View>
    //       <Text style={{ fontSize: 12 }}>Snapchat</Text>
    //     </View>
    //     <View style={styles.flexItems}>
    //       <View style={{ marginBottom: 10 }}>
    //         <Image
    //           style={{ width: 75, height: 75 }}
    //           source={require("../../../assets/images/icon/snapchat.png")}
    //         />
    //       </View>
    //       <Text style={{ fontSize: 12 }}>Snapchat</Text>
    //     </View>
    //   </View>
    // );
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

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeItems);
