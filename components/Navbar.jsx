import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
// import { FontAwesome6 } from '@expo/vector-icons';
import { Feather, FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Notifications from '../screens/Notifications';

const Navbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navbar}>
      <View style={styles.container1}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <FontAwesome6 name="bars" size={28} color="white" />
        </TouchableOpacity>
      
      <Text style={styles.text}>CADE</Text>
      </View>
      <TouchableOpacity style={styles.container2} onPress={()=>navigation.navigate(Notifications)}>
      <Feather name="bell" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        marginTop: 50,
        marginBottom: 30,
        justifyContent: "space-between",
        alignItems: "center",
        width: "94%",
    },
    text: {
        fontSize: 25,
        color: "white",
    },
    container1: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {

    }
})
export default Navbar