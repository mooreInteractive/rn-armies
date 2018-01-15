import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./home.js";
import GroupTabs from "./groupPages/groupPageTabs.js";

const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    GroupPage: {
        screen: GroupTabs
    }
});

export default RootNavigator;
