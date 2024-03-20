import { View, Text, FlatList, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import ExploreCard from "./ExploreCard"

const Explore = () => {

  return (
    <View style={styles.explore}>
      <Text style={styles.text}>Explore</Text>
      <ScrollView horizontal style={styles.scrollview}>
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        
      </ScrollView>
      {/* <FlatList horizontal={true} render={ExploreCard}/> */}
      
    </View>
  )
}

const styles = StyleSheet.create({
    explore: {
        marginTop: 20,
        height: 230,
        width: '93%',
        // backgroundColor: 'yellow'
    },
    text:{
      color: 'white',
    },
    scrollview: {
      // width: '100%',
      flexDirection: 'row',
      marginTop: 10
      
    },
    innerview: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5
    }
})

export default Explore