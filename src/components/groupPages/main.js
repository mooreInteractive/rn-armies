import React, { Component } from "react";
import { connect } from "react-redux";
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    Animated
} from "react-native";
import Card from "../cards/card";
import Miner from "../miner/miner";

class GroupMain extends Component {
    constructor(props) {
        super(props);
        this.coinName = props.navigation.state.params.label;
        this.coinKey = props.navigation.state.params.coin;
        this.coinObj = this.props.coins[this.coinKey];
        this.coinWallet = this.props.user.wallet.coins.filter(
            coin => coin.coin === this.coinKey
        );

        const week1 = {
            Day0: 0,
            Day1: 0,
            Day2: 0,
            Day3: 90,
            Day4: 35,
            Day5: 60,
            Day6: 50
        };
        this.state = {
            Day0: new Animated.Value(week1.Day0),
            Day1: new Animated.Value(week1.Day1),
            Day2: new Animated.Value(week1.Day2),
            Day3: new Animated.Value(week1.Day3),
            Day4: new Animated.Value(week1.Day4),
            Day5: new Animated.Value(week1.Day5),
            Day6: new Animated.Value(week1.Day6),
            week1: {
                Day0: 0,
                Day1: 0,
                Day2: 0,
                Day3: 90,
                Day4: 35,
                Day5: 60,
                Day6: 50
            },
            week2: {
                Day0: 75,
                Day1: 90,
                Day2: 175,
                Day3: 100,
                Day4: 135,
                Day5: 90,
                Day6: 150
            },
            week3: {
                Day0: 60,
                Day1: 20,
                Day2: 135,
                Day3: 110,
                Day4: 150,
                Day5: 70,
                Day6: 250
            },
            week4: {
                Day0: 65,
                Day1: 40,
                Day2: 155,
                Day3: 120,
                Day4: 135,
                Day5: 160,
                Day6: 255
            },
            week5: {
                Day0: 90,
                Day1: 60,
                Day2: 145,
                Day3: 0,
                Day4: 0,
                Day5: 0,
                Day6: 0
            },
            onWeek: 1
        };
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

    handleForward() {
        if (this.state.onWeek !== 5) {
            const which = this.state.onWeek + 1;
            const week = this.state["week" + which];
            this.setState({ onWeek: which });
            this.handleAnimation(week);
        }
    }

    handleBackward() {
        if (this.state.onWeek !== 1) {
            const which = this.state.onWeek - 1;
            const week = this.state["week" + which];
            this.setState({ onWeek: which });
            this.handleAnimation(week);
        }
    }

    handleAnimation(week) {
        const timing = Animated.timing;
        const indicators = [
            "Day0",
            "Day1",
            "Day2",
            "Day3",
            "Day4",
            "Day5",
            "Day6"
        ];
        Animated.parallel(
            indicators.map(item => {
                return timing(this.state[item], { toValue: week[item] });
            })
        ).start();
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
                <Card>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "center"
                        }}
                    >
                        <Text
                            style={styles.text}
                            onPress={this.handleBackward.bind(this)}
                        >
                            {"<<< "}
                        </Text>
                        <Text style={styles.text}>
                            Viewing Week {1 - this.state.onWeek}
                        </Text>
                        <Text
                            style={styles.text}
                            onPress={this.handleForward.bind(this)}
                        >
                            {" >>>"}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>
                            Sunday:{" "}
                            {"$" + this.state["week" + this.state.onWeek].Day0}
                        </Text>
                        <Animated.View
                            style={[
                                styles.bar,
                                styles.points,
                                { width: this.state.Day0 }
                            ]}
                        />
                        <Text style={styles.text}>
                            Saturday:{" "}
                            {"$" + this.state["week" + this.state.onWeek].Day1}
                        </Text>
                        <Animated.View
                            style={[
                                styles.bar,
                                styles.points,
                                { width: this.state.Day1 }
                            ]}
                        />
                        <Text style={styles.text}>
                            Friday:{" "}
                            {"$" + this.state["week" + this.state.onWeek].Day2}
                        </Text>
                        <Animated.View
                            style={[
                                styles.bar,
                                styles.points,
                                { width: this.state.Day2 }
                            ]}
                        />
                        <Text style={styles.text}>
                            Thursday:{" "}
                            {"$" + this.state["week" + this.state.onWeek].Day3}
                        </Text>
                        <Animated.View
                            style={[
                                styles.bar,
                                styles.points,
                                { width: this.state.Day3 }
                            ]}
                        />
                        <Text style={styles.text}>
                            Wednesday:{" "}
                            {"$" + this.state["week" + this.state.onWeek].Day4}
                        </Text>
                        <Animated.View
                            style={[
                                styles.bar,
                                styles.points,
                                { width: this.state.Day4 }
                            ]}
                        />
                        <Text style={styles.text}>
                            Tuesday:{" "}
                            {"$" + this.state["week" + this.state.onWeek].Day5}
                        </Text>
                        <Animated.View
                            style={[
                                styles.bar,
                                styles.points,
                                { width: this.state.Day5 }
                            ]}
                        />
                        <Text style={styles.text}>
                            Monday:{" "}
                            {"$" + this.state["week" + this.state.onWeek].Day6}
                        </Text>
                        <Animated.View
                            style={[
                                styles.bar,
                                styles.points,
                                { width: this.state.Day6 }
                            ]}
                        />
                    </View>
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
    }
});

const mapStateToProps = state => ({
    coins: state.coins,
    user: state.user
});

export default connect(mapStateToProps)(GroupMain);
