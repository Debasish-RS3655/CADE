import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import Art from "../assets/digital-art.jpg";
import CommentPage from "./CommentPage";
import CommentCard from "../components/CommentCard";

const LikeButton = ({ liked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {liked ? <AntDesign name="like1" size={20} color="#BB84E8" /> : <AntDesign name="like2" size={20} color="black" />}
    </TouchableOpacity>
  );
};

const IndividualPost = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;
  const [liked, setLiked] = useState(false);

  const toggleButton = () => {
    setLiked(prevLiked => !prevLiked);
  };

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

</View>
<Image
        source={Art}
        style={{ width: "100%",height: 400}}
      />
<View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 10,
          paddingTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "30%",
            gap: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "47%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
            <LikeButton liked={liked} onPress={toggleButton} />
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold'}}>567</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "46%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate(CommentPage)}
            >
              <FontAwesome name="comment-o" size={20} color="black" />
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold'}}>56</Text>
          </View>
        </View>
        <Entypo name="share" size={20} color="black" />
      </View>
<Text
        style={{
          fontSize: 16,
          paddingHorizontal: 10,
          paddingVertical: 10,
          fontWeight: "bold",
          color: "black",
        }}
      >
        Have a Break! Have a Kitkat
      </Text>

<View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 13, fontWeight: "bold", color: "gray" }}>
          April 8, 2024
        </Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Entypo name="dot-single" size={20} color="gray" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <MaterialIcons name="remove-red-eye" size={20} color="gray" />
          <Text style={{ fontSize: 13, fontWeight: "bold", color: "gray" }}>
            8.4K Views
          </Text>
        </View>
      </View>

<Text
        style={{
          width: "100%",
          paddingHorizontal: 10,
          marginTop: 10,
          fontSize: 14,
        }}
      >
        {item.title}
      </Text>


<View
        style={{
          width: "100%",
          paddingHorizontal: 10,
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            padding: 4,
            textAlign: "center",
            borderWidth: 1,
            borderRadius: 3,
            fontSize: 12,
            color: "#BB84E8",
            borderColor: "#BB84E8",
          }}
        >
          Digital Art
        </Text>
        <Text
          style={{
            padding: 4,
            textAlign: "center",
            borderWidth: 1,
            borderRadius: 3,
            fontSize: 12,
            color: "#BB84E8",
            borderColor: "#BB84E8",
          }}
        >
          Animals
        </Text>
        <Text
          style={{
            padding: 4,
            textAlign: "center",
            borderWidth: 1,
            borderRadius: 3,
            fontSize: 12,
            color: "#BB84E8",
            borderColor: "#BB84E8",
          }}
        >
          Abstract
        </Text>
      </View>

<View
        style={{
          flexDirection: "row",
          paddingHorizontal: 10,
          marginTop: 20,
          width: "100%",
          gap: 10,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", gap: 7 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Owner:</Text>
          <Text style={{ fontStyle: "italic", fontSize: 14 }}>
            pragyan4261
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#BB84E8",
            paddingHorizontal: 10,
            borderRadius: 5,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
          
        >
          <Text style={{ color: "white", fontSize: 13 }}>View Profile</Text>
        </TouchableOpacity>
      </View>
<View
   style={{
            flexDirection: "row",
            // justifyContent: "center",
            alignItems: "center",
            gap: 10,
            paddingHorizontal: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Comments</Text>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>52</Text>
        </View>
  <CommentCard />
  <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', marginBottom: 10}}>
    <View style={{borderRadius: 5,
            height: 30}}>
  <TouchableOpacity
          style={{
            backgroundColor: "#BB84E8",
            paddingHorizontal: 10,
            borderRadius: 5,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            // borderColor: '#BB84E8',
            // borderWidth: 1,
          }}
          
        >
          <Text style={{ color: "white", fontSize: 13 }}>View all comments</Text>
        </TouchableOpacity>

    </View>
  </View>
</ScrollView>
)
}

export default IndividualPost;