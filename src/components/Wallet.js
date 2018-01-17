import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";

class Wallet extends Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text>Wallet Screen</Text>
            </View>
        )
    };
}

const mapStateToProps = state => ({
    coins: state.coins
});

export default connect(mapStateToProps)(Wallet);
