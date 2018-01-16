import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";

class Exchange extends Component {
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
                <Text>Exchange Screen</Text>
                <Button
                    onPress={() => navigate("Home")}
                    title="Go home"
                />
            </View>
        )
    };
}

const mapStateToProps = state => ({
    coins: state.coins
});

export default connect(mapStateToProps)(Exchange);
