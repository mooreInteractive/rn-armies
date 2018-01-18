import React, { Component } from "react";
import { connect } from "react-redux";
import {
    StyleSheet,
    View,
    Image,
    Text,
    Button,
    TextInput,
    ScrollView,
    AlertIOS
} from "react-native";
import { tabStyles } from "./groupTabsStyles.js";
import Card from "../cards/card";
import CoinMovement from "../coinMovement";

class GroupBuySell extends Component {
    constructor(props) {
        super(props);
        this.coinName = props.navigation.state.params.label;
        this.coinKey = props.navigation.state.params.coin;
        this.coinObj = this.props.coins[this.coinKey];

        this.buyCoin = this.buyCoin.bind(this);
        this.sellCoin = this.sellCoin.bind(this);

        this.state = {
            buyAmt: 0,
            sellAmt: 0
        };
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

    buyCoin() {
        console.log("Buying", this.state.buyAmt);
        let userWallet = this.props.user.wallet.dollars;
        let cost = (this.state.buyAmt * this.coinObj.price).toFixed(2);
        let requirementsMet = userWallet >= cost;
        if (requirementsMet) {
            //good to go
            let title = "Are you Sure?";
            let message = `Are you sure you want to purchase ${
                this.state.buyAmt
            } ${this.coinObj.symbol} for ${cost} USD?`;
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
                        console.log("add coin", this.state.buyAmt);
                        console.log("remove $", cost);
                    }
                }
            ];
            AlertIOS.alert(title, message, buttons);
        } else {
            //not enough cash bro
            //good to go
            let title = "You Can't Afford It";
            let message = `You only have ${
                this.props.user.wallet.dollars
            }, but you need ${cost} to make this purchase.`;
            let callback = () => {
                this.setState({ buyAmt: 0 });
            };
            AlertIOS.alert(title, message, callback);
        }
    }

    sellCoin() {
        console.log("Selling", this.state.sellAmt);
        let currentCoinWallet = this.props.user.wallet.coins.filter(
            coin => coin.key === this.coinKey
        );
        let userWallet = currentCoinWallet.length
            ? currentCoinWallet[0].amount
            : 0;
        let cost = (this.state.sellAmt * this.coinObj.price).toFixed(2);
        let requirementsMet = this.state.sellAmt <= userWallet;
        if (requirementsMet) {
            //good to go
            let title = "Are you Sure?";
            let message = `Are you sure you want to sell ${
                this.state.sellAmt
            } ${this.coinObj.symbol} for ${cost} USD?`;
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
                        console.log("add $", cost);
                        console.log("remove coin", this.state.sellAmt);
                    }
                }
            ];
            AlertIOS.alert(title, message, buttons);
        } else {
            //not enough cash bro
            //good to go
            let title = "You Can't Afford It";
            let message = `You only have ${userWallet} ${
                this.coinObj.symbol
            }, but you're trying to sell ${this.state.sellAmt} ${
                this.coinObj.symbol
            }.`;
            let callback = () => {
                this.setState({ buyAmt: 0 });
            };
            AlertIOS.alert(title, message, callback);
        }
    }

    renderTitleSection() {
        return (
            <View style={styles.titleTop}>
                <Text style={styles.title}>
                    {`Buy/Sell ${this.coinObj.symbol}`}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.topBal}>{`Price: `}</Text>
                    <Text style={styles.topBalValue}>{`${
                        this.coinObj.price
                    } USD`}</Text>
                </View>
            </View>
        );
    }

    renderBuyCard(type) {
        //default is buy settings
        let onChange = buyAmt => this.setState({ buyAmt });
        let value = this.state.buyAmt;
        let btnHandler = () => {
            this.buyCoin();
        };
        let topLabel = `USD Wallet: `;
        let topValue = `$${this.props.user.wallet.dollars}`;
        let buttonColor = "#34DE34";
        //Change settings if Sell Card
        if (type === "Sell") {
            let owned = this.props.user.wallet.coins.filter(
                coin => coin.key === this.coinKey
            );
            let ownedCoin = owned.length ? owned[0].amount : 0;
            onChange = sellAmt => this.setState({ sellAmt });
            value = this.state.sellAmt;
            btnHandler = () => {
                this.sellCoin();
            };
            topLabel = `${this.coinObj.symbol} Wallet: `;
            topValue = `${ownedCoin} ${this.coinObj.symbol}`;
            buttonColor = "#9999DE";
        }
        let buyTotal = this.coinObj.price * value;
        return (
            <Card>
                <View style={styles.cardTop}>
                    <Text style={styles.title}>
                        {`${type} ${this.coinObj.symbol}`}
                    </Text>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Text style={styles.topBal}>{topLabel}</Text>
                        <Text style={styles.topBalValue}>{topValue}</Text>
                    </View>
                </View>
                <View style={styles.volumeContainer}>
                    <Text style={styles.volume}>Volume:</Text>
                    <Text style={styles.volumeVal}>{`${
                        this.coinObj.supply
                    }`}</Text>
                </View>
                <View style={[styles.right]}>
                    <TextInput
                        style={styles.buySellInput}
                        editable={true}
                        maxLength={20}
                        keyboardType="numeric"
                        onChangeText={onChange}
                        value={value.toString()}
                    />
                    <View style={{ flex: 1 }}>
                        <Button
                            onPress={btnHandler}
                            title={`${type} ${value} ${
                                this.coinObj.symbol
                            } for $${buyTotal.toFixed(2)}`}
                            color={buttonColor}
                        />
                    </View>
                </View>
            </Card>
        );
    }

    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.centering}
            >
                {this.renderTitleSection()}
                {this.renderBuyCard("Buy")}
                {this.renderBuyCard("Sell")}
                <CoinMovement />
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
    titleTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    cardTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 3
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
    right: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    buySellTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff"
    },
    volumeContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    volume: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#cdcdcd"
    },
    volumeVal: {
        fontSize: 16,
        color: "#cdcdcd",
        marginLeft: 5
    },
    buySellInput: {
        flex: 1,
        backgroundColor: "#dedede",
        borderWidth: 1,
        borderColor: "#ffffff",
        padding: 5,
        fontSize: 16,
        width: 150,
        height: 26,
        alignItems: "flex-end"
    }
});

const mapStateToProps = state => ({
    coins: state.coins,
    user: state.user
});

export default connect(mapStateToProps)(GroupBuySell);
