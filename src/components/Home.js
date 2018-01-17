import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";

class Home extends Component {
    render() {
        const { navigate } = this.props.navigation;
        let beliebers = this.props.coins.beliebers.plural;
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
                    onPress={() =>
                        navigate("GroupPage", {
                            coinName: beliebers,
                            coinKey: "beliebers"
                        })
                    }
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
    coins: state.coins
});

export default connect(mapStateToProps)(Home);