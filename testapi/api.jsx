import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, RefreshControl, ImageBackground } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import Zenitsu from '../assets/zenitsu.png'
import Kakashi from '../assets/kakashi.jpg'
import digitalart from '../assets/digital-art.jpg'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import IndividualPost from '../screens/IndividualPost';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet'; // Import BottomSheet component

const LikeButton = ({ liked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {liked ? <AntDesign name="like1" size={20} color="#BB84E8" /> : <AntDesign name="like2" size={20} color="#BB84E8" />}
    </TouchableOpacity>
  );
};

const PostItem = React.memo(({ item, openBottomSheet }) => {
  const [liked, setLiked] = useState(false);

  const toggleButton = () => {
    setLiked(prevLiked => !prevLiked);
  };
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('IndividualPost', { item });
  };
  return (
    <View style={{ marginBottom: 15, backgroundColor: 'white', padding: 5, borderRadius: 10, flexDirection: 'column', rowGap: 5, elevation: 2}}>
      <TouchableOpacity onPress={handlePress}>
      <ImageBackground
        style={{ width: '100%', height: 300 }}
        source={digitalart}
        borderRadius={10}
      >
        <ImageBackground source={{uri: 'https://t4.ftcdn.net/jpg/03/83/25/83/240_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg'}} style={{ height: 30, width: 30, zIndex: 0, position: 'relative', top: 5, left: 5 }} borderRadius={30}>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', height: 30, width: 30, borderRadius: 30, position: 'relative', zIndex: 2 }}>
          </View>
        </ImageBackground>
      </ImageBackground>

      </TouchableOpacity>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{width: '70%'}}>
          <Text style={{ marginTop: 10, fontSize: 13, width: '80%' }}>{item.title}</Text>
          <Text style={{fontSize: 12, color: 'gray', paddingTop: 5}}>Posted 14h ago</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '16%'}}>
            <TouchableOpacity onPress={openBottomSheet}>
              <FontAwesome name="comment-o" size={20} color="#BB84E8" />

            </TouchableOpacity>
          <LikeButton liked={liked} onPress={toggleButton} />
          </View>
          
        </View>
      </View>
    </View>
  );
});

const Feed = () => {
  const bottomSheetRef = useRef(null); // Ref for bottom sheet

  // Function to open the bottom sheet
  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = useCallback(async (pageNumber) => {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=4`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!cache[page]) {
      fetchData(page)
        .then(data => {
          if (page === 1) {
            setPosts(data.map((item, index) => ({ ...item, key: index.toString() }))); // Generating unique keys
          } else {
            setPosts(prevPosts => [...prevPosts, ...data.map((item, index) => ({ ...item, key: `${prevPosts.length + index}` }))]); // Generating unique keys
          }
          setCache(prevCache => ({ ...prevCache, [page]: data }));
        });
    }
  }, [page, cache, fetchData]);

  const handleRefresh = () => {
    setRefreshing(true);
    setPage(1);
    setCache({});
    setPosts([]);
    setRefreshing(false);
  };

  const handleLoadMore = () => {
    if (!loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const renderFooter = () => {
    if (loading) {
      return <ActivityIndicator style={{ marginVertical: 20 }} size="large" color="#0000ff" />;
    } else {
      return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlashList
        data={posts}
        renderItem={({ item }) => <PostItem item={item} openBottomSheet={openBottomSheet}/>}
        keyExtractor={(item) => item.key} // Use generated keys as unique identifiers
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
        ListFooterComponent={renderFooter}
        estimatedItemSize={350}
        showsVerticalScrollIndicator={false}
        refreshControl={ // Add pull-to-refresh functionality
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }
        getItemLayout={(data, index) => (
          { length: 320, offset: 320 * index, index }
        )}
      />
      {/* Bottom sheet placed outside of the list */}
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        enablePanDownToClose={true}
        snapPoints={['50%','75%', '100%']}
      >
        <BottomSheetScrollView style={{ height: '100%', backgroundColor: 'white' }}>
          <Text>Comments</Text>
          {/* Add your comments component here */}
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

export default Feed;
