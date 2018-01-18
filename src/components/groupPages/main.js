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
        this.coinWallet = this.props.user.wallet.coins.filter(
            coin => coin.key === this.coinKey
        );
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

    redeemAction(gift) {
        console.log("redeem:", gift);
    }

    renderActions() {
        let actions = [];
        this.coinObj.actions.forEach((action, index) => {
            let typeColor = action.type === "tweet" ? "#1DA1F2" : "#3B5998";
            let typeStyle = { color: typeColor };
            actions.push(
                <Card key={`${index}-${action.type}`}>
                    <View style={styles.rewardTop}>
                        <Text style={styles.rewardTitle}>{action.title}</Text>
                        <Text style={[styles.rewardType, typeStyle]}>
                            {action.type}
                        </Text>
                    </View>
                    <Text style={styles.rewardDesc}>{action.desc}</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-end"
                        }}
                    >
                        <Button
                            onPress={() => {
                                this.redeemAction(action);
                            }}
                            title={`Redeem for ${action.gift} ${
                                this.coinObj.symbol
                            }`}
                            color="#ffffff"
                        />
                    </View>
                </Card>
            );
        });
        return actions;
    }

    render() {
        let currentBal = this.coinWallet.length ? this.coinWallet[0].amount : 0;
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
                    <Miner
                        currentBalance={currentBal}
                        symbol={this.coinObj.symbol}
                    />
                </Card>
                {this.renderActions()}
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
    bar: {
        borderRadius: 5,
        height: 10,
        margin: 5,
        backgroundColor: "#F55443"
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
    },
    rewardTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 2
    },
    rewardTitle: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold"
    },
    rewardType: {
        color: "#ffffff",
        fontSize: 16
    },
    rewardDesc: {
        color: "#dedede"
    }
});

const mapStateToProps = state => ({
    coins: state.coins,
    user: state.user
});

export default connect(mapStateToProps)(GroupMain);
