import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Explore from '../components/Explore';
import MyFollowings from '../components/MyFollowings';
// import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';

const Posts = () => {
  const [refreshkey, setRefreshKey] = useState(0);
  const refresh = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (

    // <LinearGradient
    //   colors={['#BB84E8', '#BB84E8']} // Adjust colors as needed
    //   start={{ x: 0, y: 0 }}
    //   end={{ x: 1, y: 1 }}
    //   style={styles.container}
    // >
    <View style={{flex: 1, alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%', backgroundColor: 'white'}}>
      <Navbar />
      {/* <SearchBar /> */}
      {/* <Explore /> */}
      <MyFollowings refresh={refreshkey} onRefresh={refresh} />

    </View>
    // </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
});

export default Posts;




