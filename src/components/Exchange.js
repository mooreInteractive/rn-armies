import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView, View, Image, Text, Button, Picker, TextInput, Modal, KeyboardAvoidingView, TouchableWithoutFeedback, StyleSheet } from "react-native";

class Exchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinOwned: "aCoin",
      coinDesired: "bCoin",
      coinOwnedCount: "0",
      coinDesiredCount: "0",
      modalVisible: false,
      modalFocusTarget: null
    };
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Vevo Coin Exchange</Text>

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: 140, margin: 10}}>
            <Text style={styles.subHeader}>Your Coins:</Text>
            <Text style={styles.numInput} onPress={() => this.setState({ modalVisible: true, modalFocusTarget: "coinOwned" })}>
              {this.state.coinOwned}
            </Text>
            <TextInput
              style={styles.numInput}
              onChangeText={(coinOwnedCount) => this.setState({coinOwnedCount})}
              value={this.state.coinOwnedCount}
              keyboardType="numeric"
            />
          </View>
          <View style={{marginTop: 50}}>
            <Image
              style={{width: 30, height: 30}}
              source={require("../../assets/icons/arrow-flat.png")}
            />
          </View>
          <View style={{width: 140, margin: 10}}>
            <Text style={styles.subHeader} >Available Coins:</Text>
            <Text style={styles.numInput} onPress={() => this.setState({ modalVisible: true, modalFocusTarget: "coinDesired" })}>
              {this.state.coinDesired}
            </Text>
            <TextInput
              style={styles.numInput}
              onChangeText={(coinDesiredCount) => this.setState({coinDesiredCount})}
              value={this.state.coinDesiredCount}
              keyboardType="numeric"
            />
          </View>
        </View>

        <Text style={styles.subHeader}>You have XX {this.state.coinOwned} in your wallet</Text>

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 20}}>
          <Text style={styles.buttonTitle}>% to Exchange:</Text>
          <Button title="25%" onPress={() => this.setState({ coinOwnedCount: "25" })}/>
          <Button title="50%" onPress={() => this.setState({ coinOwnedCount: "50" })}/>
          <Button title="75%" onPress={() => this.setState({ coinOwnedCount: "75" })}/>
          <Button title="100%" onPress={() => this.setState({ coinOwnedCount: "100" })}/>
        </View>

        <Text style={styles.subHeader}>You are exchanging {this.state.coinOwnedCount} {this.state.coinOwned} for XX {this.state.coinDesired}</Text>
        <Button
            title="Confirm"
            onPress={() => {}}
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              this.setState({ modalVisible: false })
            }}
          >
            <View style={{ flex: 1 }}>
              <View style={{ flex: 0.3, flexDirection: 'column', marginTop: "auto", backgroundColor: "white", }} >
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: "flex-end" }}>
                  <Button title="Done" onPress={() => this.setState({ modalVisible: false })}/>
                </View>
                <Picker
                  selectedValue={this.state[this.state.modalFocusTarget]}
                  onValueChange={(itemValue, itemIndex) => {
                    const state = {}
                    state[this.state.modalFocusTarget] = itemValue
                    this.setState(state)
                  }}
                >
                  <Picker.Item label="aCoin" value="aCoin" />
                  <Picker.Item label="bCoin" value="bCoin" />
                  <Picker.Item label="cCoin" value="cCoin" />
                  <Picker.Item label="dCoin" value="dCoin" />
                  <Picker.Item label="eCoin" value="eCoin" />
                  <Picker.Item label="fCoin" value="fCoin" />
                  <Picker.Item label="gCoin" value="gCoin" />
                  <Picker.Item label="hCoin" value="hCoin" />
                  <Picker.Item label="iCoin" value="iCoin" />
                  <Picker.Item label="jCoin" value="jCoin" />
                  <Picker.Item label="kCoin" value="kCoin" />
                  <Picker.Item label="lCoin" value="lCoin" />
                </Picker>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
    )
  };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        flexDirection: "column"
    },
    header: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20
    },
    subHeader: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold"
    },
    buttonTitle: {
        color: "#ffffff",
        fontSize: 17,
        paddingTop: 9
    },
    numInput: {
        color: "#ffffff",
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#ffffff",
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 5
    },
});

const mapStateToProps = state => ({
    groups: state.groups
});

export default connect(mapStateToProps)(Exchange);
