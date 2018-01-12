import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./home.js";

const DetailsScreen = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
    </View>
);

const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    Details: {
        screen: DetailsScreen
    }
});

export default RootNavigator;
