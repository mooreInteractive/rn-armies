import React from "react";
import { StackNavigator } from "react-navigation";

import Exchange from "../components/Exchange";
import FTUE from "../components/FTUE";
import Home from "../components/Home";
import Wallet from "../components/Wallet";
import GroupTabs from "../components/groupPages/groupPageTabs";

const AppNavigator = StackNavigator(
    {
        Exchange: { screen: Exchange },
        FTUE: { screen: FTUE },
        Home: { screen: Home },
        Wallet: { screen: Wallet },
        GroupPage: { screen: GroupTabs }
    },
    {
        initialRouteName: "Home"
    }
);

export default AppNavigator;
