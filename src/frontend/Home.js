// utilizig Gun from hooks instead of params
// Debashish Buragohain

import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { useGun } from "../backend/gun/hook/useGun";
import Gun from 'gun';

export default function Home() {
    const { gun, loading } = useGun();
    useEffect(() => {
        if (!loading) {
            (async () => {
                var pair = await Gun.SEA.pair();
                gun.user().auth(pair, function () {
                    let createdUser = gun.user().is;
                    console.log(JSON.stringify(createdUser));
                });
            })();
        }
    }, [loading]);

    return (<View style={styles.container}>
        {(<Text>Welcome to Gun</Text>)}
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