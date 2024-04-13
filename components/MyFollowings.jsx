import { View, Text, StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import CatApi from '../testapi/api'


const MyFollowings = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>MyFollowings</Text> */}
      <View style={{backgroundColor: 'transparent', width:'100%', height: '100%'}}>
      <CatApi />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '94%',
    paddingTop: 0,
  },
  text: {
    color: 'white',
    marginBottom: 10,
  }
})

export default MyFollowings