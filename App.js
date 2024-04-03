import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import PolyfillCrypto from 'react-native-webview-crypto';
import * as Crypto from 'expo-crypto';
window.crypto.getRandomBytes = Crypto.getRandomBytes;
window.crypto.getRandomBytesAsync = Crypto.getRandomBytesAsync;
window.crypto.getRandomValues = Crypto.getRandomValues;
import 'gun/lib/mobile';
import Gun from 'gun';
import 'gun/sea';
import 'gun/lib/radix';
import 'gun/lib/radisk';
import 'gun/lib/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import asyncStore from 'gun/lib/ras';


export default function App() {
  const [user, setUser] = useState(null);
  var gun = (gun_ref => {
    if (gun_ref.current == null) {
      gun_ref.current = Gun({
        peers: [],    // currently setting up without any peers
        store: asyncStore({ AsyncStorage })
      });
    }
    return gun_ref.current;
  })(useRef(null));


  useEffect(function () {
    (async function () {
      var pair = await Gun.SEA.pair();
      gun.user().auth(pair, function () {
        let createdUser = gun.user().is;
        setUser(createdUser);
        console.log(createdUser);
      });
    })();
  }, [])

  return (
    <>
      <PolyfillCrypto />
      <View style={styles.container}>
        <Text>Welcome to Gun: ${JSON.stringify(user)}</Text>
        <StatusBar style='auto' />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});