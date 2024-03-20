import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Kakashi from '../assets/kakashi.jpg'

const ExploreCard = () => {
  return (
    <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              height: '90%',
              width: 120,
              marginTop: 0,
              borderColor: "white",
              padding: 5,
              marginRight: 7,
              backgroundColor: 'white'
            }}
          >
            <Image
              source={Kakashi}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 10,
                marginBottom: 38,
              }}
            />
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 11,
              fontWeight: 400,
              marginTop: 2,
            }}
          >
            pragyan4261
          </Text>
        </View>
  )
}

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: 'white',
//     height: '90%',
//     width: '23%',
//     borderRadius: 10,
    
    

    
//   }
// })

export default ExploreCard