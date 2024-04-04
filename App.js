// GUN needs to be defined in the global scope

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

import Home from './src/frontend/Home';

export default function App() {
  const [gunInstance, setGun] = useState(null);
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
      setGun(gun);
    })();
  }, [])

  return (
    <>
      <PolyfillCrypto />
      <View style={styles.container}>
        {(gunInstance !== undefined && gunInstance !== null) && <Home gun={gun}/>}
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