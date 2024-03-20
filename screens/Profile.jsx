import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Zenitsu from '../assets/zenitsu.png'
import Kakashi from '../assets/kakashi.jpg'
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const Profile = () => {
  const navigation  = useNavigation();
  
  return (
    <ScrollView style={{flex: 1, flexDirection: 'column',backgroundColor: 'white'}} showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: '#BB84E8', height: '15%', width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10}}>
        <View style={{flexDirection: 'row', width: '22%', justifyContent: 'space-between', alignItems: 'center', position: 'relative', top: -25}}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="black" />
          </TouchableOpacity>
        {/* <Text style={{fontSize: 20}}>CADE</Text> */}
        </View>
        <Entypo name="dots-three-vertical" size={24} color="black" style={{position: 'relative', top: -25}}/>
      </View>
      <View style={{flexDirection: 'row', width: '100%',height: 150, justifyContent: 'space-around', alignItems: 'center'}}>
        <View style={{justifyContent: 'center', alignItems: 'center', position: 'relative', top: -30}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>12K</Text>
            <Text>Followers</Text>
        </View>
        <View style={{flexDirection:'column',justifyContent: 'center', alignItems: 'center'}}>
        <Image source={Zenitsu} style={{height: 140, width: 140, borderRadius: 80, borderColor: 'white', borderWidth: 7, position: 'relative', top: -55, objectFit: 'cover'}}/>
        <Text style={{position: 'relative', top: -50, fontSize: 20,  fontWeight: 'bold'}}>username</Text>
        <Text style={{position: 'relative', top: -47, fontSize: 18}}>This is me</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', position: 'relative', top: -30}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>567</Text>
            <Text>Following</Text>
        </View>
      </View>
      <View style={{height: 160, width:'100%', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{backgroundColor: 'lightblue', height: 140, width:'90%', borderRadius: 20, rowGap: 10, flexDirection: 'column', justifyContent: 'center',alignItems: 'center'}}>
          <View style={{flexDirection:'row', justifyContent: 'space-around', alignItems: 'center', width: '100%'}}>
            <TouchableOpacity style={{backgroundColor: 'blue', width: '35%', height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 30}}><Text style={{color: 'white'}}>Follow</Text></TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: 'blue', width: '35%', height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 30}}><Text style={{color: 'white'}}>Message</Text></TouchableOpacity>
          </View>
          <View style={{backgroundColor: 'white', height: 4, width: '85%', borderRadius: 30}}></View>
          <View style={{flexDirection: 'row', width: '90%', justifyContent: 'space-around'}}>
            <View style={{backgroundColor: 'white', height: 40, width: 40, borderRadius: 10}}></View>
            <View style={{backgroundColor: 'white', height: 40, width: 40, borderRadius: 10}}></View>
            <View style={{backgroundColor: 'white', height: 40, width: 40, borderRadius: 10}}></View>
            <View style={{backgroundColor: 'white', height: 40, width: 40, borderRadius: 10}}></View>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%'}}>
          <TouchableOpacity style={{backgroundColor: 'blue', height: 40, marginTop: 10, width: '45%', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}><Text style={{fontWeight: 'bold', color: 'white'}}>Wallet</Text></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'blue', height: 40, marginTop: 10, width: '45%', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}><Text style={{fontWeight: 'bold', color: 'white'}}>Settings</Text></TouchableOpacity>
        </View>
      </View>
      <View style={{ height: 40, width:'100%', marginTop: 40, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row'}}>
        <View style={{backgroundColor: 'lightblue', height:'100%', width: '33%', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
          <Text>My Posts</Text>
        </View>
        <View style={{backgroundColor: 'lightblue', height:'100%', width: '33%', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
          <Text>NFT Purchased</Text>
        </View>
        <View style={{backgroundColor: 'lightblue', height:'100%', width: '33%', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Tagged</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', width: '100%', justifyContent: 'space-between', rowGap: 8, marginTop: 5}}>
        <Image source={Zenitsu} style={{height: 120, width: '32%'}}/>
        <Image source={Kakashi} style={{height: 120, width: '32%'}}/>
        <Image source={Zenitsu} style={{height: 120, width: '32%'}}/>
        <Image source={Kakashi} style={{height: 120, width: '32%'}}/>
        <Image source={Zenitsu} style={{height: 120, width: '32%'}}/>
        <Image source={Kakashi} style={{height: 120, width: '32%'}}/>
        <Image source={Zenitsu} style={{height: 120, width: '32%'}}/>
        <Image source={Kakashi} style={{height: 120, width: '32%'}}/>
        <Image source={Zenitsu} style={{height: 120, width: '32%'}}/>
        <Image source={Kakashi} style={{height: 120, width: '32%'}}/>
        <Image source={Zenitsu} style={{height: 120, width: '32%'}}/>
        <Image source={Kakashi} style={{height: 120, width: '32%'}}/>
        <Image source={Zenitsu} style={{height: 120, width: '32%'}}/>
        <Image source={Kakashi} style={{height: 120, width: '32%'}}/>
        <Image source={Zenitsu} style={{height: 120, width: '32%'}}/>
        <Image source={Kakashi} style={{height: 120, width: '32%'}}/>

      </View>
    </ScrollView>
  )
}


export default Profile;