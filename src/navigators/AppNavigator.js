import React from "react";
import { StackNavigator } from "react-navigation";

import BuySell from "../components/BuySell";
import Exchange from "../components/Exchange";
import FTUE from "../components/FTUE";
import Home from "../components/Home";
import Rewards from "../components/Rewards";
import Wallet from "../components/Wallet";

const AppNavigator = StackNavigator({
    BuySell: { screen: BuySell },
    Exchange: { screen: Exchange },
    FTUE: { screen: FTUE },
    Home: { screen: Home },
    Rewards: { screen: Rewards },
    Wallet: { screen: Wallet }
}, {
    initialRouteName: "Home"
});

export default AppNavigator;
