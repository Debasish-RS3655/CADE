import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

export default function Home({gun}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            var pair = await Gun.SEA.pair();
            gun.user().auth(pair, function () {
                let createdUser = gun.user().is;
                setUser(JSON.stringify(createdUser));
            });
        })();
    }, [])

    return (<View style={styles.container}>
        {( <Text>Welcome to Gun: {user}</Text>)}
        <StatusBar style='auto' />
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});