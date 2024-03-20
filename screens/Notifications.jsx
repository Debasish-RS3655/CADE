import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Notifications = () => {
    const navigation = useNavigation();
  return (
    <View style={{flex: 1, marginTop: 50}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
      <Text>Notifications</Text>
    </View>
  )
}

export default Notifications