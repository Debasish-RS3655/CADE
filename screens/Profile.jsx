import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  StatusBar
} from "react-native";
import React, { useState } from "react";
import Zenitsu from "../assets/zenitsu.png";
import Kakashi from "../assets/kakashi.jpg";
import { Entypo, AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const Profile = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView
      style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      
      <View
        style={{
          backgroundColor: "#BB84E8",
          height: "15%",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 10,
          marginTop: -30
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "22%",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            top: -25,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{fontSize: 16, fontWeight: 'bold', left: 10}}>Profile</Text>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Entypo
            name="dots-three-vertical"
            size={22}
            color="black"
            style={{ position: "relative", top: -25 }}
          />
        </TouchableOpacity>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                elevation: 5,
                width: "50%",
                justifyContent: "center",
                alignItems: "center",
                height: "15%",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate("EditProfile");
                }}
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 20,
                  columnGap: 10,
                  backgroundColor: "blue",
                  width: "100%",
                  height: 35,
                }}
              >
                <MaterialIcons name="mode-edit" size={24} color="white" />
                <Text style={{ fontSize: 18, color: "white" }}>
                  Edit Profile
                </Text>
              </TouchableOpacity>
              {/* Add more options here */}
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 20,
                  columnGap: 10,
                  marginRight: 38,
                }}
              >
                <Entypo name="cross" size={24} color="black" />
                <Text style={{ fontSize: 18, color: "red" }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 150,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: -30,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>12K</Text>
          <Text>Followers</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <Image
            source={Zenitsu}
            style={{
              height: 140,
              width: 140,
              borderRadius: 80,
              borderColor: "white",
              borderWidth: 5,
              position: "relative",
              top: -55,
              objectFit: "cover",
            }}
          />
          <Text
            style={{
              position: "relative",
              top: -50,
              fontSize: 14,
              fontWeight: "bold",
              fontStyle: 'italic',
              width: '100%',
              textAlign: "center"
              
            }}
          >
            pragyan4261
          </Text>
          <Text style={{ position: "relative", top: -47, fontSize: 16 }}>
            This is me
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: -30,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>567</Text>
          <Text>Following</Text>
        </View>
      </View>
      <View
        style={{
          height: 160,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <TouchableOpacity style={{width: '90%', backgroundColor: '#BB84E8', position: 'relative', top: -60, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 7}}>
          
            <Text style={{color: 'white'}}>
            Edit Profile
            </Text>
            
          
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#BB84E8",
              height: 40,
              // marginTop: 10,
              width: "48%",
              borderRadius: 7,
              justifyContent: "center",
              alignItems: "center",
              position: 'relative',
              top: -45,
              flexDirection: "row",
              gap: 10
            }}
          >
            <Ionicons name="wallet" size={20} color="white" />
            <Text style={{ fontWeight: "bold", color: "white" }}>Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#BB84E8",
              height: 40,
              // marginTop: 10,
              width: "48%",
              borderRadius: 7,
              justifyContent: "center",
              alignItems: "center",
              position: 'relative',
              top: -45,
              flexDirection: "row",
              gap: 10
            }}
          >
            <MaterialIcons name="settings" size={20} color="white" />
            <Text style={{ fontWeight: "bold", color: "white" }}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 40,
          width: "100%",
          marginTop: -50,
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "lightblue",
            height: "100%",
            width: "33%",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>My Posts</Text>
        </View>
        <View
          style={{
            backgroundColor: "lightblue",
            height: "100%",
            width: "33%",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>NFT Purchased</Text>
        </View>
        <View
          style={{
            backgroundColor: "lightblue",
            height: "100%",
            width: "33%",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Tagged</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-between",
          rowGap: 1,
          marginTop: 5,
        }}
      >
        <Image source={Zenitsu} style={{ height: 120, width: "33%" }} />
        <Image source={Kakashi} style={{ height: 120, width: "33%" }} />
        <Image source={Zenitsu} style={{ height: 120, width: "33%" }} />
        <Image source={Kakashi} style={{ height: 120, width: "33%" }} />
        <Image source={Zenitsu} style={{ height: 120, width: "33%" }} />
        <Image source={Kakashi} style={{ height: 120, width: "33%" }} />
        <Image source={Zenitsu} style={{ height: 120, width: "33%" }} />
        <Image source={Kakashi} style={{ height: 120, width: "33%" }} />
        <Image source={Zenitsu} style={{ height: 120, width: "33%" }} />
        <Image source={Kakashi} style={{ height: 120, width: "33%" }} />
        <Image source={Zenitsu} style={{ height: 120, width: "33%" }} />
        <Image source={Kakashi} style={{ height: 120, width: "33%" }} />
        <Image source={Zenitsu} style={{ height: 120, width: "33%" }} />
        <Image source={Kakashi} style={{ height: 120, width: "33%" }} />
        <Image source={Zenitsu} style={{ height: 120, width: "33%" }} />
        <Image source={Kakashi} style={{ height: 120, width: "33%" }} />
      </View>
    </ScrollView>
  );
};

export default Profile;
