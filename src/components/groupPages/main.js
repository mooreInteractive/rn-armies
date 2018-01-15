import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text, Button } from "react-native";
import Card from "../cards/card.js";

export default class GroupMain extends Component {
    static navigationOptions = {
        tabBarLabel: () => <Text style={styles.tabLabel}>Main</Text>
    };

    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.centering}
            >
                <Card type={"miner"}>
                    <Text style={styles.minerTitle}>Miner</Text>
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
    minerTitle: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold"
    },
    tabLabel: {
        color: "#dedede",
        flex: 1,
        top: -10,
        position: "relative"
    }
});
