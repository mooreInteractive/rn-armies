import React from "react";
import { View, Text } from "react-native";
import { TabNavigator, TabBarTop } from "react-navigation";
import GroupMain from "./main.js";
import GroupRewards from "./rewards.js";
import GroupBuySell from "./buySell.js";

const GroupTabs = TabNavigator(
    {
        Main: {
            screen: GroupMain
        },
        Rewards: {
            screen: GroupRewards
        },
        BuySell: {
            screen: GroupBuySell
        }
    },
    {
        tabBarPosition: "top",
        tabBarComponent: TabBarTop,
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions: {
            style: {
                backgroundColor: "#000000"
            },
            tabStyle: {
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            },
            indicatorStyle: {
                backgroundColor: "#ffffff"
            },
            showIcon: true,
            activeTintColor: "#ffffff",
            activeBackgroundColor: "#131313"
        }
    }
);

export default GroupTabs;
