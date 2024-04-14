import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CommentCard from "../components/CommentCard";

const CommentPage = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <View
        style={{
          backgroundColor: "white",
          marginTop: 0,
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
          height: 40,
          paddingBottom: 5,
          paddingLeft: 12,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: "relative" }}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", position: "relative" }}
          >
            Comments
          </Text>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", position: "relative" }}
          >
            64
          </Text>
        </View>
      </View>
      <CommentCard />
    </ScrollView>
  );
};

export default CommentPage;
