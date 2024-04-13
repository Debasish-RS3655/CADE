import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import Kakashi from '../assets/kakashi.jpg'
import { FlashList } from '@shopify/flash-list';
import LottieView from 'lottie-react-native';
import Loader from '../assets/Lottie/Loader1.gif';
const PeopleCard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=2&_limit=10`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{width: '100%', flexDirection: 'row', justifyContent:'space-evenly', flexWrap: 'wrap', alignItems: 'center', marginTop: 10}}>
     <View style={{justifyContent: 'center', alignItems: 'center', borderRadius: 7, flexDirection: 'column', backgroundColor: 'white', gap: 10, elevation: 4, paddingHorizontal: 5, paddingVertical: 10}}>
      <Image source={Kakashi} style={{height: 80, width: 80, borderRadius: 50, objectFit: 'cover'}}/>
      <Text>pragyan4261</Text>
     <View style={{flexDirection: 'row', marginTop: -7}}>
        <Text>Global Rank: </Text>
         <Text>273 </Text>
      </View>
       <View style={{flexDirection: 'row', width: '95%', justifyContent: 'space-between', height: 30, alignItems: 'center', borderRadius: 7}}>
        <TouchableOpacity style={{width: '50%', backgroundColor: '#BB84E8', alignItems: 'center', height: '100%', justifyContent: 'center', borderTopLeftRadius: 7, borderBottomLeftRadius: 7, borderRightWidth: 1.5, borderRightColor: 'white'}}><Text style={{color: 'white', fontSize: 12}}>Follow</Text></TouchableOpacity>
         <TouchableOpacity style={{width: '50%', backgroundColor: '#BB84E8', alignItems: 'center', height: '100%', justifyContent: 'center', borderTopRightRadius: 7, borderBottomRightRadius: 7}}><Text style={{color: 'white', fontSize: 12}}>Message</Text></TouchableOpacity>
       </View>
       {/* <TouchableOpacity style={{width: '95%',height: 30, backgroundColor: '#BB84E8', alignItems: 'center', justifyContent: 'center', borderRadius: 7}}>
         <Text style={{color: 'white', fontSize: 12}}>View Artworks</Text>
       </TouchableOpacity> */}
     </View>
     </View>
  );

  if (loading) {
    return <Text>Loading...</Text>;
    // return <Image source={Loader} style={{width: 100, height: 100}}/>
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={{  marginTop: 0 , height: '100%', paddingBottom: '31%'}}>
      <FlashList
      columnWrapperStyle={{justifyContent: 'space-between', alignItems: 'center'}}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Assuming each item has a unique id
        estimatedItemSize={100}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PeopleCard;

  