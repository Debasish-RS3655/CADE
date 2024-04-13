import { View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import ExploreGallery from '../components/ExploreGallery'

const Search = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* <View style={{backgroundColor: 'white', marginTop: 0, flexDirection: 'row', alignItems: 'center', columnGap: 10, height: 80, paddingBottom: 10, paddingLeft: 12 }}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{position: 'relative', top: 20}}>
        <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      <Text style={{fontSize: 16, fontWeight: 'bold', position: 'relative', top: 20}}>Search</Text>
      </View> */}
      <View style={{marginTop: 5, alignItems: 'center', marginBottom: 7}}>

      <View style={{width: '95%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        borderRadius: 12,
        gap: 10,
        elevation: 5}}>
      <Feather name="search" size={24} color='gray' />
      <TextInput placeholder='Search Here' style={{backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      width: '85%',
      height: 45,
        
      padding: 8,}}></TextInput>
    </View>
      </View>
      <View style={{height: '93%', width: '100%' }}>

      <ExploreGallery />
      </View>
    </View>
  )
}

export default Search