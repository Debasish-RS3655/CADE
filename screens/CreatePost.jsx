import {View, Text, Image, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import Zenitsu from '../assets/zenitsu.png';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const CreatePost = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <View style={{backgroundColor: 'transparent', width: '100%', height: 80, marginBottom: 20, paddingTop: 30, alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 15}}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{width: '93%', borderRadius: 20}}>

      <ImageBackground style={{width: '100%', height: 200, justifyContent:'center', alignItems: 'center', }} source={Zenitsu} resizeMode='cover' borderRadius={10}>
        <View style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: 10}} />
        <Text style={{fontSize: 30, color: 'white'}}>Upload Image</Text>
      </ImageBackground>
        </TouchableOpacity>
      <View style={{width: '93%', marginTop: 20}}>
        <Text style={{marginBottom: 5, fontWeight: 'bold', fontSize: 16}}>Title</Text>
        <TextInput
          placeholder="Enter the title"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 7,
            paddingLeft: 10,
          }}
        />
      </View>
      <View style={{width: '93%', marginTop: 20}}>
        <Text style={{marginBottom: 5, fontWeight: 'bold', fontSize: 16}}>Description</Text>
        <TextInput
          placeholder="Enter the description"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 7,
            paddingLeft: 10,
          }}
        />
      </View>
      <View style={{width: '93%', marginTop: 20}}>
        <Text style={{marginBottom: 5, fontWeight: 'bold', fontSize: 16}}>Tags</Text>
        <TextInput
          placeholder="Enter suitable tags"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 7,
            paddingLeft: 10,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 150,
          width: '93%',
          justifyContent: 'space-around',
          alignItems: 'center',
          
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '30%',
            height: 100,
            borderRadius: 20,
            backgroundColor: '#CF9FFF',
            
          }}>
          <Text>Bid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '30%',
            height: 100,
            borderRadius: 20,
            backgroundColor: '#CF9FFF',
          }}>
          <Text>Sell</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: 70, width: '93%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', width: '30%', height: 45, borderRadius: 10, backgroundColor: 'blue',}}>
            <Text style={{color: 'white'}}>Save Draft</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', width: '30%', height: 45, borderRadius: 10, backgroundColor: 'blue'}}>
            <Text style={{color: 'white'}}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePost;
