import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Platform
} from "react-native";
import React, {useState, useEffect} from "react";
import Upload from "../assets/upload.webp";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const CreatePost = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  // Function to handle image upload
  // const handleImageUpload = () => {
  //   // Logic to upload the image and set the uploadedImage state
  //   // For demonstration purpose, just setting the uploaded image to the selected image
  //   setUploadedImage(image);
  //   // You should implement the logic to upload the image to your backend server here
  // };
  return (
    <ScrollView style={{height: '100%', backgroundColor: 'white'}}>
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          backgroundColor: "transparent",
          width: "100%",
          height: 60,
          marginBottom: 0,
          alignItems: "center",
          paddingLeft: 10,
          flexDirection: "row",
          columnGap: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Create</Text>
      </View>
      <TouchableOpacity style={{ width: "93%", borderRadius: 20 }} onPress={pickImage}>
        <ImageBackground
          style={{
            width: "100%",
            height: 250,
            justifyContent: "center",
            alignItems: "center",
          }}
          source={{ uri: uploadedImage ? '../assets/upload.webp' : image }}
          resizeMode="contain"
          borderRadius={10}
        >
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              borderRadius: 10,
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 25, color: "white" }}>
            {image ? "Image Uploaded!" : "Click To Upload Image"}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <View style={{ width: "93%", marginTop: 20, marginBottom: 7 }}>
        <Text style={{ marginBottom: 10, fontWeight: "bold", fontSize: 14 }}>
          Title
        </Text>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 12,
            elevation: 3,
            marginTop: 0,
          }}
        >
          <TextInput
            inputMode="text"
            placeholder="Enter the title"
            style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              width: "90%",
              height: 45,

              padding: 1,
            }}
          ></TextInput>
        </View>
      </View>
      <View style={{ width: "93%", marginTop: 10, marginBottom: 7 }}>
        <Text style={{ marginBottom: 10, fontWeight: "bold", fontSize: 14 }}>
          Description
        </Text>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 12,
            elevation: 3,
            marginTop: 0,
          }}
        >
          <TextInput
            inputMode="text"
            placeholder="Enter the description"
            style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              width: "90%",
              height: 45,

              padding: 1,
            }}
          ></TextInput>
        </View>
      </View>
      <View style={{ width: "93%", marginTop: 7 }}>
        <Text style={{ marginBottom: 5, fontWeight: "bold", fontSize: 14 }}>
          Tags
        </Text>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 12,
            elevation: 3,
            marginTop: 0,
          }}
        >
          <TextInput
            inputMode="text"
            placeholder="Enter the tags"
            style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              width: "90%",
              height: 45,

              padding: 1,
            }}
          ></TextInput>
        </View>
      </View>
      <View
        style={{
          height: 70,
          width: "93%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: 45,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            backgroundColor: "#BB84E8",
            borderRightWidth: 1,
            borderColor: "white",
          }}
        >
          <Text style={{ color: "white" }}>Save Draft</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: 45,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: "#BB84E8",
          }}
        >
          <Text style={{ color: "white" }}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default CreatePost;
