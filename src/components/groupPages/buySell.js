import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Button } from "react-native";
import { tabStyles } from "./groupTabsStyles.js";

export default class GroupBuySell extends Component {
    static navigationOptions = {
        tabBarLabel: ({ tintColor }) => (
            <Text style={tabStyles.tabLabel}>Buy/Sell</Text>
        ),
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require("../../../assets/icons/buy-sell.png")}
                style={[tabStyles.tabIcon, { tintColor: tintColor }]}
            />
        )
    };

    render() {
        return (
            <View style={tabStyles.page}>
                <Text style={tabStyles.textStyle}>Buy/Sell Coin</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
