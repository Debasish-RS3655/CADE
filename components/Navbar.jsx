import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
// import { FontAwesome6 } from '@expo/vector-icons';
import { Feather, FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Notification from '../screens/Notifications';
import MessagingPage from '../screens/MessagingPage';
import Zenitsu from '../assets/zenitsu.png';

const Navbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navbar}>
      <View style={styles.container1}>
        {/* <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <FontAwesome6 name="bars" size={24} color="black" />
        </TouchableOpacity> */}
      
      <Text style={styles.text}>Hello! Alex 👋</Text>
      </View>
      <View style={{flexDirection: 'row', columnGap: 10}}>
      {/* <TouchableOpacity style={styles.container2} onPress={()=>navigation.navigate(Notification)}>
      <Feather name="bell" size={24} color="black" />
      </TouchableOpacity> */}
      {/* <TouchableOpacity style={styles.container2} onPress={()=>navigation.navigate(MessagingPage)}> */}
      <TouchableOpacity style={styles.container2} onPress={()=>navigation.openDrawer()}>
      {/* <Feather name="message-square" size={24} color="black" /> */}
      <Image source={{uri: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'}} style={{width: 30, height: 30, borderRadius: 30}}/>
      </TouchableOpacity>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 15,
        justifyContent: "space-between",
        alignItems: "center",
        width: "94%",
        gap: 5,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 14,
        color: "black",
        fontWeight: "bold",
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