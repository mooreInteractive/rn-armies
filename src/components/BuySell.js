import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";

class BuySell extends Component {
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
                <Text>Buy/Sell Screen</Text>
                <Button
                    onPress={() => navigate("Home")}
                    title="Go home"
                />
            </View>
        )
    };
}

const mapStateToProps = state => ({
    groups: state.groups
});

export default connect(mapStateToProps)(BuySell);
