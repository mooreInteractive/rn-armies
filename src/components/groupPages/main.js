import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, ScrollView, View, Text, Button } from "react-native";
import Card from "../cards/card";
import Miner from "../miner/miner";

class GroupMain extends Component {
    constructor(props) {
        super(props);
        this.coinName = props.navigation.state.params.label;
        this.coinKey = props.navigation.state.params.coin;
        this.coinObj = this.props.coins[this.coinKey];
    }
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: props => {
            return (
                <Text style={styles.tabLabel}>
                    {navigation.state.params.label}
                </Text>
            );
        }
    });

    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.centering}
            >
                <View style={styles.titleTop}>
                    <Text style={styles.title}>
                        {`Earn ${this.coinObj.symbol}`}
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
                <Card type={"miner"}>
                    <Text style={styles.minerTitle}>Miner</Text>
                    <Miner />
                </Card>
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
        backgroundColor: "#131313",
        flexDirection: "column"
    },
    centering: {
        alignItems: "center",
        justifyContent: "flex-start"
    },
    text: {
        color: "#ffffff"
    },
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
    },
    minerTitle: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold"
    },
    tabLabel: {
        color: "#dedede",
        flex: 1,
        top: -10,
        position: "relative",
        fontWeight: "bold"
    }
});

const mapStateToProps = state => ({
    coins: state.coins
});

export default connect(mapStateToProps)(GroupMain);
