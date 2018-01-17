import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Image, Text, Button } from "react-native";
import { tabStyles } from "./groupTabsStyles.js";

class GroupBuySell extends Component {
    constructor(props) {
        super(props);
        this.coinName = props.navigation.state.params.coinName;
        this.coinKey = props.navigation.state.params.coinKey;
        this.coinObj = this.props.coins[this.coinKey];
    }
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
                <View style={styles.titleTop}>
                    <Text style={styles.title}>
                        {`Buy/Sell ${this.coinObj.symbol}`}
                    </Text>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Text style={styles.topBal}>{`Price: `}</Text>
                        <Text style={styles.topBalValue}>{`${
                            this.coinObj.price
                        } USD`}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    title: {
        fontSize: 21,
        fontWeight: "bold",
        color: "#ffffff",
        flex: 1
    },
    topBal: {
        fontSize: 18,
        color: "#ffffff"
    },
    topBalValue: {
        fontSize: 18,
        color: "#ffffff",
        fontWeight: "bold"
    }
});

const mapStateToProps = state => ({
    coins: state.coins
});

export default connect(mapStateToProps)(GroupBuySell);
