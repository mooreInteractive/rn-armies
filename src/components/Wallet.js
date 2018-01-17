import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
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
                <Text style={styles.text}>Card #1</Text>
            </Card>
            <Card>
                <Text style={styles.text}>Card #2</Text>
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
    text: {
        color: "#ffffff"
    },
});

const mapStateToProps = state => ({
    coins: state.coins
});

export default connect(mapStateToProps)(Wallet);
