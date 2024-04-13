import { View, TextInput, ScrollView } from 'react-native'
import React from 'react'
import PeopleCard from '../components/PeopleCard'
import { Feather } from '@expo/vector-icons'

const People = () => {
  return (
    <View style={{paddingTop: 10, alignItems: 'center', marginBottom: 7, backgroundColor: 'white'}}>
      <View style={{width: '93%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        borderRadius: 10,
        gap: 10,
        elevation: 5, marginBottom: 10}}>
      <Feather name="search" size={24} color='gray' />
      <TextInput placeholder='Search For People' style={{backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      width: '85%',
      height: 45,
        
      padding: 8}}></TextInput>
    </View>
    <View style={{height: '100%', width: '93%'}}>
      <PeopleCard />

    </View>

    </View>
  )
}

export default People