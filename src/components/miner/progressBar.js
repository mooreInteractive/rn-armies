import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

export default class ProgressBar extends Component {
    constructor(props) {
        super(props);
    }
    setStyleFlex() {
        let progress = this.props.progress;
        let pending = 100 - progress;
        return [{ flex: progress }, { flex: pending }];
    }
    render() {
        let progress = this.setStyleFlex();
        return (
            <View style={styles.container}>
                <View style={[styles.bar, progress[0]]} />
                <View style={(styles.pending, progress[1])} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000000",
        padding: 2,
        height: 14,
        flexDirection: "row"
    },
    bar: {
        height: 10,
        flex: 0,
        margin: 0,
        backgroundColor: "#dedede"
    },
    pending: {
        height: 10,
        flex: 100,
        margin: 0,
        backgroundColor: "#333333"
    }
});
