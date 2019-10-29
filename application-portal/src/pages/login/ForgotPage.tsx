import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal
} from "react-native";
import { connect } from "react-redux";
import Actions from "../../redux/actions/Forgot.Action";
import PleaseContact from "../../components/PleaseContact";

class ForgotPage extends Component<any> {
  static navigationOptions = {
    title: "Forgot Password",
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
    btnVisible: false,
    counter: 5,
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  _btnHandle = () => {
    // this.props.navigation.navigate("RedeemPopup");
    this.setModalVisible(true);
    let x = setInterval(() => {
      console.log(this.state.counter);
      // let y = this.state.counter - 1;
      // this.setState({ counter: y });
      this.setState({ btnVisible: true });
      if (this.state.counter === 0) {
        this.setState({ btnVisible: false, counter: 5 });
        clearInterval(x);
      } else {
        this.setState({ counter: --this.state.counter });
      }
    }, 1000);
  };

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
            <View style={styles.borderLine}>
              <TouchableOpacity
                disabled={this.state.btnVisible}
                style={[
                  styles.containerButton,
                  this.state.btnVisible
                    ? styles.disableButton
                    : styles.enableButton
                ]}
                onPress={() => {
                  this._btnHandle();
                }}
              >
                <Text style={styles.textButton}>
                  Get Code
                  {this.state.btnVisible
                    ? " ( " + this.state.counter + " ) "
                    : null}
                </Text>
              </TouchableOpacity>
            </View>
            <Modal
              transparent={true}
              visible={this.state.modalVisible}
              animationType={"slide"}
              onRequestClose={() => this.setModalVisible(true)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.innerContainer}>
                  <Text style={{ fontSize: 25, textAlign: "center" }}>
                    Redeem Code
                  </Text>
                  <View style={styles.modalLine}>
                    <TouchableOpacity>
                      <TextInput
                        maxLength={100}
                        style={styles.containerInput}
                        placeholder="Enter Code"
                        onChangeText={redeemCode =>
                          this.setState({ redeemCode })
                        }
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.modalButton}
                      onPress={() => {
                        this.props.navigation.navigate("HomePage");
                        this.setModalVisible(false);
                      }}
                    >
                      <Text style={styles.textButton}>Continue</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    onPress={() => this.setModalVisible(false)}
                    style={styles.containerExit}
                  >
                    <Text style={styles.textExit}>X</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
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
    paddingVertical: 12,
    borderRadius: 50
  },
  enableButton: {
    backgroundColor: "#482f92"
  },
  disableButton: {
    backgroundColor: "#a0a0a0"
  },
  textButton: {
    color: "#ffffff",
    fontSize: 15,
    alignSelf: "center"
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  innerContainer: {
    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(255,255,255,1)"
  },
  modalButton: {
    marginTop: 30,
    backgroundColor: "#482f92",
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 50
  },
  modalLine: {
    marginTop: 10,
    paddingTop: 30,
    borderTopWidth: 2
  },
  containerExit: {
    position: "absolute",
    top: -2,
    right: 5
  },
  textExit: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  forgot: email => dispatch(Actions.Forgot(email))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPage);
