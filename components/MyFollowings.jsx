import { View, Text, StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import CatApi from '../testapi/api'


const MyFollowings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MyFollowings</Text>
      <View style={{backgroundColor: 'orange', width:'100%', height: '90%'}}>
      <CatApi />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '93%',
  },
  text: {
    color: 'black',
  }
})

export default MyFollowings