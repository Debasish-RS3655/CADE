import { View, Text, TouchableOpacity, TextInput, Linking, Button } from "react-native";
import CheckBox from "expo-checkbox";
import React, { useState } from "react";
import {
  AntDesign,
  Octicons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Signup from "./SignUp";

const PasswordButton = ({passwordview, onPress}) =>{
  return(
  <TouchableOpacity onPress={onPress}>
      {passwordview ? <Feather name="eye-off" size={20} color="gray" /> : <Feather name="eye" size={20} color="gray" />}
    </TouchableOpacity>

  )
}

const Login = () => {

  const [passwordview, setPasswordView] = useState(false);

  const toggleButton = () => {
    setPasswordView(prevView => !prevView);
  };
  const handlepress = () => {
    Linking.openURL("https://client-chi-taupe.vercel.app/");
  };
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={{ width: "100%", backgroundColor: "white", height: "100%" }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: "relative", top: 5, left: 15 }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          fontSize: 19,
          color: "black",
          marginBottom: 20,
          marginTop: 50,
        }}
      >
        Login
      </Text>
      
      <View style={{ marginTop: 5, alignItems: "center", marginBottom: 7 }}>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 12,
            gap: 10,
            elevation: 5,
            marginTop: 30,
          }}
        >
          <MaterialCommunityIcons name="email-outline" size={24} color="gray" />
          <TextInput
            inputMode="email"
            placeholder="Enter your email address"
            keyboardType="email-address"
            // value={email}
            // onChangeText={text => setEmail(text)}
            style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              width: "85%",
              height: 45,

              padding: 8,
            }}
          ></TextInput>
        </View>

        <View
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 12,
            gap: 10,
            elevation: 5,
            marginTop: 30,
          }}
        >
          <Feather name="lock" size={24} color="gray" />
          <TextInput
            inputMode="text"
            placeholder="Enter your password"
            secureTextEntry={true}
            // value={password}
            // onChangeText={text => setPassword(text)}
            style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              width: "74%",
              height: 45,

              padding: 8,
            }}
          ></TextInput>
          <PasswordButton passwordview={passwordview} onPress={toggleButton} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginRight: 20,
          marginLeft: 20,
          justifyContent: "space-between",
          marginTop: 30,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text style={{ left: 7, fontSize: 14 }}>Remember Password</Text>
        </View>
        <Text style={{ color: "#BB84E8", fontSize: 14 }}>Forgot Password</Text>
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
            marginTop: 30,
          }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 30,
          marginLeft: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 14 }}>Don't have an account?</Text>
        <Text
          style={{ left: 7, color: "#BB84E8", fontSize: 14 }}
          onPress={() => navigation.navigate(Signup)}
        >
          Sign Up
        </Text>
      </View>
      <Text style={{ textAlign: "center", marginRight: 40, marginLeft: 40, fontSize: 14, marginTop: '65%' }}>
        By signing in you are agreeing to our{" "}
        <Text style={{ color: "#BB84E8" }} onPress={handlepress}>
          Terms and Privacy Policy
        </Text>
      </Text>
    </View>
  );
};

export default Login;
