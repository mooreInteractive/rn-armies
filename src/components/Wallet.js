import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Button, ScrollView, StyleSheet, Image } from "react-native";
import Card from "./cards/card";

class Wallet extends Component {
  render() {
      return (
          <ScrollView
              style={styles.container}
              contentContainerStyle={styles.centering}
          >
            <Text style={styles.header}>Your Wallet</Text>
            <Card>
              <View style={{ flex: 1, flexDirection: "row"}}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/icons/BeyCoin.jpeg")}
                  />
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.subHeader}>Balance: 100,000,000</Text>
                  <Text style={styles.text}>1 BeyCoin = 1 USD</Text>
                </View>
              </View>
            </Card>
            <Card>
              <View style={{ flex: 1, flexDirection: "row"}}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/icons/BiebCoin.png")}
                  />
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.subHeader}>Balance: 100</Text>
                  <Text style={styles.text}>1 BiebCoin = 1 USD</Text>
                </View>
              </View>
            </Card>
            <Card>
              <View style={{ flex: 1, flexDirection: "row"}}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/icons/GucciCoin.png")}
                  />
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.subHeader}>Balance: 1,000,000,000</Text>
                  <Text style={styles.text}>1 GucciCoin = 1 USD</Text>
                </View>
              </View>
            </Card>
            <Card>
              <View style={{ flex: 1, flexDirection: "row"}}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/icons/HarmonyCoin.jpg")}
                  />
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.subHeader}>Balance: 1,000</Text>
                  <Text style={styles.text}>1 HarmonyCoin = 1 USD</Text>
                </View>
              </View>
            </Card>
            <Card>
              <View style={{ flex: 1, flexDirection: "row"}}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/icons/KatyCoin.jpg")}
                  />
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.subHeader}>Balance: 100,000</Text>
                  <Text style={styles.text}>1 KatyCoin = 1 USD</Text>
                </View>
              </View>
            </Card>
            <Card>
              <View style={{ flex: 1, flexDirection: "row"}}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/icons/SwiftCoin.jpg")}
                  />
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.subHeader}>Balance: 100,000,000</Text>
                  <Text style={styles.text}>1 SwiftCoin = 1 USD</Text>
                </View>
              </View>
            </Card>
            <Card>
              <View style={{ flex: 1, flexDirection: "row"}}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/icons/WuTangCoin.jpg")}
                  />
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.subHeader}>Balance: 10,000,000</Text>
                  <Text style={styles.text}>1 WuTangCoin = 1 USD</Text>
                </View>
              </View>
            </Card>
          </ScrollView>
      );
  }
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
        marginTop: 20,
        marginBottom: 20,
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold"
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50
    },
    text: {
        color: "#ffffff",
        fontSize: 14,
    },
});

const mapStateToProps = state => ({
    coins: state.coins
});

export default connect(mapStateToProps)(Wallet);
