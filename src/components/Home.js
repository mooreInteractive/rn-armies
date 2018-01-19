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
    static navigationOptions = ({ navigation }) => {
      return {
        headerRight: (
          <View style={{ flex: 1, flexDirection: "row"}}>
          <TouchableHighlight
              onPress={() => navigation.navigate("Exchange")}
          >
            <Image style={styles.headerImage} source={require("../../assets/icons/exchange.png")} />
          </TouchableHighlight>
          <TouchableHighlight
              onPress={() => navigation.navigate("Wallet")}
          >
            <Image style={styles.headerImage} source={require("../../assets/icons/wallet.png")} />
          </TouchableHighlight>
          </View>
        )
      }
    }

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
    renderNavButton(key, imgSrc) {
        const { navigate } = this.props.navigation;
        return (

                <Image style={styles.groupImage} source={imgSrc} />

        );
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    backgroundColor: "#000000"
                }}
            >
                <Text style={styles.mainTitle}>Fan Armies</Text>
                <View style={styles.tileContainer}>
                    {this.renderArmyButton(
                        "beliebers",
                        "Beliebers",
                        require("../../assets/icons/BiebCoin.png")
                    )}
                    {this.renderArmyButton(
                        "katycats",
                        "Katy Cats",
                        require("../../assets/icons/KatyCoin.jpg")
                    )}
                    {this.renderArmyButton(
                        "beyhive",
                        "Beyhive",
                        require("../../assets/icons/BeyCoin.jpeg")
                    )}
                    {this.renderArmyButton(
                        "guccigang",
                        "Gucci Gang",
                        require("../../assets/icons/GucciCoin.png")
                    )}
                    {this.renderArmyButton(
                        "harmonizers",
                        "Harmonizers",
                        require("../../assets/icons/HarmonyCoin.jpg")
                    )}
                    {this.renderArmyButton(
                        "swifties",
                        "Swifties",
                        require("../../assets/icons/SwiftCoin.jpg")
                    )}
                    {this.renderArmyButton(
                        "wutang",
                        "Wu-Tang",
                        require("../../assets/icons/WuTangCoin.jpg")
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 28,
        margin: 10,
        fontWeight: "bold",
        color: "#ffffff"
    },
    tileContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    groupImage: {
        width: 115,
        height: 115,
        margin: 5
    },
    headerImage: {
        width: 30,
        height: 30,
        margin: 5
    }
});

const mapStateToProps = state => ({
    coins: state.coins,
    user: state.user
});

export default connect(mapStateToProps)(Home);
