import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Image, Text, Button, AlertIOS } from "react-native";
import { tabStyles } from "./groupTabsStyles.js";
import Card from "../cards/card";

class GroupRewards extends Component {
    constructor(props) {
        super(props);
        this.coinName = props.navigation.state.params.label;
        this.coinKey = props.navigation.state.params.coin;
        this.coinObj = this.props.coins[this.coinKey];
        this.coinWallet = this.props.user.wallet.coins.filter(
            coin => coin.key === this.coinKey
        );
        this.state = {
            rewards: [
                {
                    type: "tweet",
                    title: "@Mention from Artist",
                    desc: "A robot will tweet at you from Artist's account.",
                    cost: 100
                },
                {
                    type: "tickets",
                    title: "2 Tickets to See Artist",
                    desc:
                        "You and a friend will get nosebleed, cant-see-shit seats for free*",
                    cost: 10000
                }
            ]
        };
    }

    static navigationOptions = {
        tabBarLabel: ({ tintColor }) => (
            <Text style={tabStyles.tabLabel}>Rewards</Text>
        ),
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require("../../../assets/icons/rewards.png")}
                style={[tabStyles.tabIcon, { tintColor: tintColor }]}
            />
        )
    };

    getReward(reward) {
        console.log("getReward", reward);
        let userCoins = this.coinWallet.length ? this.coinWallet[0].amount : 0;
        let cost = reward.cost;
        let requirementsMet = userCoins >= cost;
        if (requirementsMet) {
            //good to go
            let title = "Are you Sure?";
            let message = `Are you sure you want to redeem ${
                reward.type
            } reward for ${cost} ${this.coinObj.symbol}?`;
            let buttons = [
                {
                    text: "Oh Crap, No!",
                    onPress: () => {
                        console.log("cancelled, whew.");
                    },
                    style: "cancel"
                },
                {
                    text: "Yep",
                    onPress: () => {
                        //Add buyAmt to user Coin Wallet
                        //Remove cost from user USD Wallet
                        console.log("add reward", reward);
                        console.log("remove coin", cost);
                    }
                }
            ];
            AlertIOS.alert(title, message, buttons);
        } else {
            //not enough cash bro
            //good to go
            let title = "You Can't Afford It";
            let message = `You only have ${userCoins}, but you need ${cost} to redeem this reward.`;
            let callback = () => {
                console.log("no reward.");
            };
            AlertIOS.alert(title, message, callback);
        }
    }

    renderRewards() {
        let rewards = [];
        this.state.rewards.forEach((reward, index) => {
            let typeColor = reward.type === "tweet" ? "#1DA1F2" : "#AAB8C2";
            let typeStyle = { color: typeColor };
            rewards.push(
                <Card key={`index-${reward.type}`}>
                    <View style={styles.rewardTop}>
                        <Text style={styles.rewardTitle}>{reward.title}</Text>
                        <Text style={[styles.rewardType, typeStyle]}>
                            {reward.type}
                        </Text>
                    </View>
                    <Text style={styles.rewardDesc}>{reward.desc}</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-end"
                        }}
                    >
                        <Button
                            onPress={() => {
                                this.getReward(reward);
                            }}
                            title={`Buy for ${reward.cost} ${
                                this.coinObj.symbol
                            }`}
                            color="#ffffff"
                        />
                    </View>
                </Card>
            );
        });
        return rewards;
    }

    render() {
        let bal = this.coinWallet.length ? this.coinWallet[0].amount : 0;
        return (
            <View style={tabStyles.page}>
                <View style={styles.titleTop}>
                    <Text style={styles.title}>
                        {`${this.coinName} Rewards`}
                    </Text>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Text style={styles.topBal}>{`Bal: `}</Text>
                        <Text style={styles.topBalValue}>{`${bal} ${
                            this.coinObj.symbol
                        }`}</Text>
                    </View>
                </View>
                {this.renderRewards()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rewardTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 2
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

export default connect(mapStateToProps)(GroupRewards);
