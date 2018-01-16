import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";

class Home extends Component {
    render() {
        const { navigate } = this.props.navigation;
        let beliebers = this.props.groups.filter(
            group => group === "beliebers"
        )[0];
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text>Home Screen</Text>
                <Button
                    onPress={() => navigate("GroupPage", { group: beliebers })}
                    title="Go to Beliebers Group"
                />
                <Button
                    onPress={() => navigate("Exchange")}
                    title="Go to exchange"
                />
                <Button onPress={() => navigate("FTUE")} title="Go to FTUE" />
                <Button
                    onPress={() => navigate("Wallet")}
                    title="Go to wallet"
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    groups: state.groups
});

export default connect(mapStateToProps)(Home);
