import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import NotificationCard from '../components/NotificationCard'

const Notifications = () => {
    const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: 'white', marginTop: 0, flexDirection: 'row', alignItems: 'center', columnGap: 10, height: 40, paddingBottom: 5, paddingLeft: 12 }}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{position: 'relative'}}>
        <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      <Text style={{fontSize: 16, fontWeight: 'bold', position: 'relative'}}>Notifications</Text>
      </View>
      <NotificationCard />
    </View>
  )
}

export default Notifications