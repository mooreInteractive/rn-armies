import React, { Component } from "react";
import { connect } from "react-redux";
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    TouchableHighlight
} from "react-native";

class Home extends Component {
    navToGroupPage(coin, label) {
        const { navigate } = this.props.navigation;
        navigate("GroupPage", {
            coin,
            label
        });
    }
    renderArmyButton(key, label, imgSrc) {
        return (
            <TouchableHighlight
                onPress={this.navToGroupPage.bind(this, key, label)}
            >
                <Image style={styles.groupImage} source={imgSrc} />
            </TouchableHighlight>
        );
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center"
                }}
            >
                <View style={{ flexDirection: "row" }}>
                    {this.renderArmyButton(
                        "beliebers",
                        "Beliebers",
                        require("../../assets/icons/BiebCoin.png")
                    )}
                    {this.renderArmyButton(
                        "kaycats",
                        "Katy Cats",
                        require("../../assets/icons/KatyCoin.jpg")
                    )}
                </View>
                <Button
                    onPress={() => navigate("Exchange")}
                    title="Go to exchange"
                />
                <Button
                    onPress={() => navigate("Wallet")}
                    title="Go to wallet"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
    coins: state.coins
});

export default connect(mapStateToProps)(Home);
