import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  AntDesign,
  Octicons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Login from "./Login";

const PasswordButton = ({ passwordview, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {passwordview ? (
        <Feather name="eye-off" size={20} color="gray" />
      ) : (
        <Feather name="eye" size={20} color="gray" />
      )}
    </TouchableOpacity>
  );
};
const PasswordButton2 = ({ confirmpasswordview, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {confirmpasswordview ? (
        <Feather name="eye-off" size={20} color="gray" />
      ) : (
        <Feather name="eye" size={20} color="gray" />
      )}
    </TouchableOpacity>
  );
};

const SignUp = () => {
  const [passwordview, setPasswordView] = useState(false);
  const [confirmpasswordview, setConfirmPasswordView] = useState(false);

  const toggleButton = () => {
    setPasswordView((prevView) => !prevView);
  };
  const toggleButton2 = () => {
    setConfirmPasswordView((prevView) => !prevView);
  };

  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
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
          marginTop: 20,
        }}
      >
        Sign Up
      </Text>

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
          marginRight: 20,
          marginLeft: 20,
        }}
      >
        <Octicons name="person" size={20} color="gray" />
        <TextInput
          inputMode="text"
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
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
          borderRadius: 10,
          gap: 10,
          elevation: 5,
          marginTop: 30,
          marginRight: 20,
          marginLeft: 20,
        }}
      >
        <MaterialCommunityIcons name="email-outline" size={20} color="gray" />
        <TextInput
          inputMode="email"
          placeholder="Enter your email address"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
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
          marginRight: 20,
          marginLeft: 20,
        }}
      >
        <Feather name="lock" size={20} color="gray" />
        <TextInput
          inputMode="text"
          placeholder="Enter your password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
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
          marginRight: 20,
          marginLeft: 20,
        }}
      >
        <Feather name="lock" size={20} color="gray" />
        <TextInput
          inputMode="text"
          placeholder="Confirm your password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={{
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            width: "74%",
            height: 45,

            padding: 8,
          }}
        ></TextInput>
        <PasswordButton2
          confirmpasswordview={confirmpasswordview}
          onPress={toggleButton2}
        />
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
            height: 45,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
            marginTop: 20,
          }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 14 }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30, width: "90%", alignItems: "center" }}>
        <Text style={{ textAlign: "left", fontSize: 14 }}>
          Already have an account?
          <Text
            style={{ color: "#BB84E8", fontSize: 14 }}
            onPress={() => navigation.navigate(Login)}
          >
            {" "}
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SignUp;

// const styles = StyleSheet.create({})
