import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { AntDesign, Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Profile from './Profile'
import Zenitsu from "../assets/zenitsu.png";
import Art from '../assets/digital-art.jpg'
import CommentPage from "./CommentPage";


const IndividualPost = ({route}) => {
  const navigation = useNavigation();
  const {item} = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          backgroundColor: "white",
          marginTop: 0,
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
          height: 40,
          marginBottom: 10,
          paddingLeft: 12,
          
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{}}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView 
  style={{ flex: 1 }}
  contentContainerStyle={{ alignItems: "flex-start", width: '100%', height: '100%' }}
>
        <Image
          source={Art}
          style={{ width: "100%", objectFit: "cover", height: "50%" }}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingHorizontal: 10, paddingTop: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '30%', gap: 30}}>
            <View style={{flexDirection: 'row', width:'42%', justifyContent: 'space-between', alignItems: 'center'}}>
              <TouchableOpacity>
            <AntDesign name="like2" size={20} color="black" />

              </TouchableOpacity>
              <Text>567</Text>
            </View>
            <View  style={{flexDirection: 'row', width:'42%', justifyContent: 'space-between', alignItems: 'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate(CommentPage)}>
              <FontAwesome name="comment-o" size={20} color="black" />

            </TouchableOpacity>
              <Text>56</Text>
              </View>
          </View>
          <Entypo name="share" size={20} color="black" />

        </View>
        <Text style={{fontSize: 19, paddingHorizontal: 10, paddingVertical: 10, fontWeight: 'bold', color: 'black'}}>{item.title}</Text>
        <View style={{width: '100%', flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: 10}}>
          <Text>April 8, 2024</Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}> 
          <Entypo name="dot-single" size={20} color="black" />

          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 4}}>
          <MaterialIcons name="remove-red-eye" size={20} color="black" />
          <Text>8.4K Views</Text>
          
          </View>
        </View>
        <Text style={{width: '100%', paddingHorizontal: 10, marginTop: 10, fontSize: 16}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas non assumenda, saepe est earum impedit.</Text>
        
          <View style={{width: '100%', paddingHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', gap: 20, marginTop: 20}}>
            <Text style={{backgroundColor: 'pink', padding: 4, textAlign: 'center', borderRadius: 5}}>Digital Art</Text>
            <Text style={{backgroundColor: 'pink', padding: 4, textAlign: 'center', borderRadius: 5}}>Animals</Text>
            <Text style={{backgroundColor: 'pink', padding: 4, textAlign: 'center', borderRadius: 5}}>Abstract</Text>
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 10, marginTop: 20, width: '100%',gap: 10, justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', gap: 10}}>
          <Text>Owner:</Text>
          <Text>pragyan4261</Text>

          </View>
          <TouchableOpacity style={{backgroundColor: '#BB84E8', paddingHorizontal: 10, borderRadius: 5, height: 30, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white'}}>View Profile</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10, paddingHorizontal: 10, marginTop: 20}}>
          <Text>Comments</Text>
          <Text>52</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default IndividualPost;
