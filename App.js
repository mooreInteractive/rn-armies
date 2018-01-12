import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    resizeMode="contain"
                    style={styles.image}
                    source={require("./assets/team_armies.png")}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Artist Fan Armies coming your way. Join the best ones
                        and help your favorite artist reach their stardom.
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        textAlign: "center",
        padding: 15,
        fontSize: 24,
        fontWeight: "bold"
    },
    textContainer: {
        flex: 3
    },
    image: {
        flex: 1,
        marginTop: 50
    }
});
