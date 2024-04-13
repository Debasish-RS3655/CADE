import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { FlashList } from '@shopify/flash-list';

const NotificationCard = () => {
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
    <View style={{ height: '100%', padding: 15, backgroundColor: 'white', flexDirection: 'row', columnGap: 20, alignItems: 'center'}}>
      <Image
      style={{ height: 45, width: 45, borderRadius: 60 }}
      source={{ uri: item.url }}
    />
    <View style={{flexDirection: 'column', width: '90%', rowGap: 2, height: 'auto'}}>
      <Text style={{fontWeight: 'bold'}}>pragyan4261</Text>
      <View style={{rowGap: 2}}>
      <Text>{item.url}</Text>
      <Text style={{color: 'gray'}}>15h ago</Text>
      </View>

    </View>
    </View>
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={{ flex: 1, marginTop: 0 }}>
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Assuming each item has a unique id
        estimatedItemSize={100}
      />
    </View>
  );
};

export default NotificationCard;
