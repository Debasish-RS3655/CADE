import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.bar}>
      <Feather name="search" size={24} color="black" />
      <TextInput placeholder='Search Here' style={styles.input}></TextInput>
    </View>
  )
}
const styles = StyleSheet.create({
    input: {
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      width: '80%',
      height: 45,
        
      padding: 8,
    },
    bar:{
        width: '93%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        borderRadius: 12,
        gap: 10,
        
    }
  
  });
export default SearchBar