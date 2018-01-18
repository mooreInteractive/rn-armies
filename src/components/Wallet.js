import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Button, ScrollView, StyleSheet, Image } from "react-native";
import Card from "./cards/card";

class Wallet extends Component {
  render() {
    const mapping = {}
    this.props.ownedCoins.forEach(coin => {
      mapping[coin.key] = coin
    })
    console.log(this.props.coins)
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.centering}
        >
          <Text style={styles.header}>Your Wallet</Text>
          { mapping.beyhive &&
            <Card>
              <View style={{ flex: 1, flexDirection: "row"}}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/icons/BeyCoin.jpeg")}
                  />
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.subHeader}>Balance: {mapping.beyhive.amount}</Text>
                  <Text style={styles.text}>1 BeyCoin = {this.props.coins.beyhive.price}USD</Text>
                </View>
              </View>
            </Card>
          }
          {
            mapping.beliebers &&
            <Card>
              <View style={{ flex: 1, flexDirection: "row"}}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/icons/BiebCoin.png")}
                  />
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.subHeader}>Balance: {mapping.beliebers.amount}</Text>
                  <Text style={styles.text}>1 BiebCoin = {this.props.coins.beliebers.price}USD</Text>
                </View>
              </View>
            </Card>
          }
          {
            mapping.guccigang &&
            <Card>
              <View style={{ flex: 1, flexDirection: "row"}}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/icons/GucciCoin.png")}
                  />
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.subHeader}>Balance: {mapping.guccigang.amount}</Text>
                  <Text style={styles.text}>1 GucciCoin = {this.props.coins.guccigang.price}USD</Text>
                </View>
              </View>
            </Card>
          }
          {
            mapping.harmonizers &&
            <Card>
              <View style={{ flex: 1, flexDirection: "row"}}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/icons/HarmonyCoin.jpg")}
                  />
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.subHeader}>Balance: {mapping.harmonizers.amount}</Text>
                  <Text style={styles.text}>1 HarmonyCoin = {this.props.coins.harmonizers.price}USD</Text>
                </View>
              </View>
            </Card>
          }
          {
            mapping.katycats &&
            <Card>
              <View style={{ flex: 1, flexDirection: "row"}}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/icons/KatyCoin.jpg")}
                  />
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.subHeader}>Balance: {mapping.katycats.amount}</Text>
                  <Text style={styles.text}>1 KatyCoin = {this.props.coins.katycats.price}USD</Text>
                </View>
              </View>
            </Card>
          }
          {
            mapping.swifties &&
            <Card>
              <View style={{ flex: 1, flexDirection: "row"}}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/icons/SwiftCoin.jpg")}
                  />
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.subHeader}>Balance: {mapping.swifties.amount}</Text>
                  <Text style={styles.text}>1 SwiftCoin = {this.props.coins.swifties.price}USD</Text>
                </View>
              </View>
            </Card>
          }
          {
            mapping.wutang &&
            <Card>
              <View style={{ flex: 1, flexDirection: "row"}}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/icons/WuTangCoin.jpg")}
                  />
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.subHeader}>Balance: {mapping.wutang.amount}</Text>
                  <Text style={styles.text}>1 WuTangCoin = {this.props.coins.wutang.price}USD</Text>
                </View>
              </View>
            </Card>
          }
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
    coins: state.coins,
    ownedCoins: state.user.wallet.coins
});

export default connect(mapStateToProps)(Wallet);
