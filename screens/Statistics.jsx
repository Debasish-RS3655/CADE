import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'

const Statistics = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>

    <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 10, height: 50, paddingBottom: 10, paddingLeft: 12 }}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{position: 'relative'}}>
        <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      <Text style={{position: 'relative', fontSize: 16, fontWeight: 'bold'}}>Statistics</Text>
    </View>
    <ScrollView style={{flex: 1}} justifyContent='center' alignItems='center'>
      <Text>Coming Soon...</Text>
    </ScrollView>
    </View>
  )
}

export default Statistics