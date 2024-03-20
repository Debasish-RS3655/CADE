import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { AntDesign, Octicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Login from './Login'

const SignUp = () => {

    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null); 
  return (
    <View>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{position: 'relative', top: 50, left: 15}}>
        <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
    <Text
      style={{
        textAlign: 'center',
        fontSize: 25,
        color: 'black',
        marginBottom: 20,
        marginTop: 80,
      }}>
      Sign Up
    </Text>
    <View
      style={{
        padding: 3,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 30,
        borderWidth: 1.6,
        borderColor: 'gray',
        borderRadius: 10,
        flexDirection: 'row'
      }}>
        <View style={{height: 50, width: '10%', backgroundColor:'transparent', marginHorizontal: 7, justifyContent: 'center', alignItems: 'center'}}>
        <Octicons name="person" size={24} color="gray" />
        </View>
      <TextInput
        inputMode="text"
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />
    </View>
    <View
      style={{
        padding: 3,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 30,
        borderWidth: 1.6,
        borderColor: 'gray',
        borderRadius: 10,
        flexDirection: 'row'
      }}>
        <View style={{height: 50, width: '10%', backgroundColor:'transparent', marginHorizontal: 7, justifyContent: 'center', alignItems: 'center'}}>
        <MaterialCommunityIcons name="email-outline" size={24} color="gray" />
        </View>
      <TextInput
        inputMode="email"
        placeholder="Enter your email address"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
      />
    </View>
    <View
      style={{
        padding: 3,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 30,
        borderWidth: 1.6,
        borderColor: 'gray',
        borderRadius: 10,
        flexDirection: 'row'
      }}>
        <View style={{height: 50, width: '10%', backgroundColor:'transparent', marginHorizontal: 7, justifyContent: 'center', alignItems: 'center'}}>
        <Feather name="lock" size={24} color="gray" />
        </View>
      <TextInput
        inputMode="text"
        placeholder="Enter your password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
        style={{width: '72%'}}
      />
      <View style={{height: 50, width: '10%', backgroundColor:'transparent', marginHorizontal: 7, justifyContent: 'center', alignItems: 'center'}}>
        <Feather name="eye" size={24} color="gray" />
        </View>
    </View>
    <View
      style={{
        padding: 3,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 30,
        borderWidth: 1.6,
        borderColor: 'gray',
        borderRadius: 10,
        flexDirection: 'row'
      }}>
        <View style={{height: 50, width: '10%', backgroundColor:'transparent', marginHorizontal: 7, justifyContent: 'center', alignItems: 'center'}}>
        <Feather name="lock" size={24} color="gray" />
        </View>
      <TextInput
        inputMode="text"
        placeholder="Confirm your password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        style={{width: '72%'}}
      />
      <View style={{height: 50, width: '10%', backgroundColor:'transparent', marginHorizontal: 7, justifyContent: 'center', alignItems: 'center'}}>
        <Feather name="eye" size={24} color="gray" />
        </View>
    </View>
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          width: '90%',
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 7,
          marginTop: 20,
        }}
        >
        <Text style={{textAlign: 'center', color: 'white', fontSize: 19}}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    <View style={{marginTop: 30, width: '90%', alignItems: 'center'}}>
      <Text style={{textAlign: 'left', fontSize: 16}}>
        Already have an account?
        <Text style={{color: 'blue', fontSize: 18}} onPress={()=>navigation.navigate(Login)}>  Login</Text>
      </Text>
    </View>
  </View>
  )
}

export default SignUp

// const styles = StyleSheet.create({})