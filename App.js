// Debashish Buragohain

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { GunProvider } from './src/backend/gun/provider';
import Home from './src/frontend/Home';

export default function App() {
  // define the gun instance here
  return (
    <>
      <GunProvider>
        <View style={styles.container}>
          <Home />
          <StatusBar style='auto' />
        </View>
      </GunProvider>
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