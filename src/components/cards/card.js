import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

export default class Card extends Component {
    render() {
        let cardStyle = [styles.card];
        if (this.props.type === "miner") {
            cardStyle.push(styles.miner);
        }
        return <View style={cardStyle}>{this.props.children}</View>;
    }
}

const styles = StyleSheet.create({
    miner: {
        minHeight: 100,
        backgroundColor: "#A9A9A9",
        borderRadius: 0
    },
    card: {
        minHeight: 70,
        backgroundColor: "#656565",
        borderColor: "#dedede",
        borderRadius: 7,
        borderWidth: 1,
        margin: 5,
        width: Dimensions.get("window").width - 10,
        padding: 8
    }
});
