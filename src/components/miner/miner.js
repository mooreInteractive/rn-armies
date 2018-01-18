import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, Button } from "react-native";
import ProgressBar from "./progressBar";

export default class Miner extends Component {
    constructor(props) {
        super(props);
        this.incrementMiner = this.incrementMiner.bind(this);
        this.startMiner = this.startMiner.bind(this);
        this.stopMiner = this.stopMiner.bind(this);
        this.state = {
            currentCoinProgress: 0,
            buttonState: "start",
            buttonHandler: this.startMiner,
            currentBalance: this.props.currentBalance,
            buttonColor: "#3434DE"
        };
    }
    incrementMiner() {
        let nextProgress = (this.state.currentCoinProgress += 1);
        if (nextProgress > 100) {
            nextProgress = 0;
            this.addCoin();
        }
        this.setState({ currentCoinProgress: nextProgress });
    }
    addCoin() {
        let newBalance = this.state.currentBalance + 0.01;
        this.setState({ currentBalance: newBalance });
    }
    startMiner() {
        this.mineTimer = setInterval(this.incrementMiner, 100);
        this.setState({
            buttonState: "stop",
            buttonHandler: this.stopMiner,
            buttonColor: "#DE3434"
        });
    }
    stopMiner() {
        clearInterval(this.mineTimer);
        this.mineTimer = null;
        this.setState({
            buttonState: "start",
            buttonHandler: this.startMiner,
            buttonColor: "#3434DE"
        });
    }
    componentWillUnmount() {
        if (this.mineTimer) {
            clearInterval(this.mineTimer);
            this.mineTimer = null;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.balContainer}>
                    <Text style={styles.balLabel}>Bal:</Text>
                    <Text style={styles.balValue}>
                        {`${this.state.currentBalance.toFixed(2)} ${
                            this.props.symbol
                        }`}
                    </Text>
                </View>
                <Text style={styles.progressText}>{`${
                    this.state.currentCoinProgress
                }/100`}</Text>
                <ProgressBar progress={this.state.currentCoinProgress} />
                <View style={styles.btnContainer}>
                    <Button
                        onPress={this.state.buttonHandler}
                        title={this.state.buttonState}
                        color={this.state.buttonColor}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btnContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    balContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    balLabel: {
        color: "#008900",
        fontWeight: "bold",
        fontSize: 20,
        marginRight: 10
    },
    balValue: {
        fontSize: 20,
        fontWeight: "bold"
    }
});
