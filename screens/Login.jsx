import { View, Text, TouchableOpacity, TextInput } from "react-native";
import CheckBox from "expo-checkbox";
import React, { useState } from "react";
import {
  AntDesign,
  Octicons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Signup from './SignUp'

const Login = () => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={{ width: "100%" }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: "relative", top: 50, left: 15 }}
      >
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          fontSize: 25,
          color: "black",
          marginBottom: 20,
          marginTop: 80,
        }}
      >
        Login
      </Text>
      <Text style={{ textAlign: "center", marginRight: 40, marginLeft: 40 }}>
        By signing in you are agreeing to our{" "}
        <Text style={{ color: "#BB84E8" }}>Terms and Privacy Policy</Text>
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
        <MaterialCommunityIcons name="email-outline" size={24} color="gray" />
        </View>
      <TextInput
        inputMode="email"
        placeholder="Enter your email address"
        keyboardType="email-address"
        // value={email}
        // onChangeText={text => setEmail(text)}
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
        // value={password}
        // onChangeText={text => setPassword(text)}
        style={{width: '72%'}}
      />
      <View style={{height: 50, width: '10%', backgroundColor:'transparent', marginHorizontal: 7, justifyContent: 'center', alignItems: 'center'}}>
        <Feather name="eye" size={24} color="gray" />
        </View>
    </View>
      <View
        style={{
          flexDirection: "row",
          marginRight: 20,
          marginLeft: 20,
          justifyContent: "space-between",
          marginTop: 30
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text style={{ left: 7, fontSize: 16 }}>Remember Password</Text>
        </View>
        <Text style={{ color: "#BB84E8", fontSize: 16 }}>Forgot Password</Text>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#BB84E8",
            width: "90%",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
            marginTop: 50,
          }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30, marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{fontSize: 15}}>
          Don't have an account?
        </Text>
        <Text style={{ left: 7, color: "#BB84E8", fontSize: 19 }} onPress={()=>navigation.navigate(Signup)}>Sign Up</Text>
      </View>
    </View>
  );
};

export default Login;
