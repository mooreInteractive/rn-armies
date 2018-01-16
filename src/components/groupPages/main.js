import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, ScrollView, View, Text, Button } from "react-native";
import Card from "../cards/card";
import Miner from "../miner/miner";

class GroupMain extends Component {
    constructor(props) {
        super(props);
        this.currentGroup = props.navigation.state.params.group;
        console.log("main", props, props.groups);
    }
    static navigationOptions = ({ navigation, screenProps }) => ({
        tabBarLabel: props => {
            console.log("nav options:", screenProps);
            return (
                <Text style={styles.tabLabel}>
                    {navigation.state.params.group}
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
    groups: state.groups
});

export default connect(mapStateToProps)(GroupMain);
