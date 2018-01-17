import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Image, Text, Button } from "react-native";
import { tabStyles } from "./groupTabsStyles.js";
import Card from "../cards/card";

class GroupRewards extends Component {
    constructor(props) {
        super(props);
        this.coinName = props.navigation.state.params.coinName;
        this.coinKey = props.navigation.state.params.coinKey;
        this.coinObj = this.props.coins[this.coinKey];
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
                        <Text style={styles.topBalValue}>{`0.00 ${
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
    coins: state.coins
});

export default connect(mapStateToProps)(GroupRewards);
