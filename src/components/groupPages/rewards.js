import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Button } from "react-native";
import { tabStyles } from "./groupTabsStyles.js";

export default class GroupRewards extends Component {
    constructor(props) {
        super(props);
        this.currentGroup = props.navigation.state.params.group;
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

    render() {
        return (
            <View style={tabStyles.page}>
                <Text style={tabStyles.textStyle}>{`${
                    this.currentGroup
                } Rewards`}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
