// import { View, Text, StyleSheet } from 'react-native'
// import React, {useState} from 'react'
// import Explore from '../components/Explore'
// import MyFollowings from '../components/MyFollowings'
// import SearchBar from '../components/SearchBar'
// import Navbar from '../components/Navbar'
// //import TabBar from '../components/TabBar'

// const Posts = () => {
//   const [refreshkey, setRefreshKey] = useState(0);
//   const refresh = () => {
//     setRefreshKey(prevKey=>prevKey+1);
//   }
//   return (
//     <View style={styles.posts}>
//       <Navbar />
//       <SearchBar />
//       <Explore />
//       <MyFollowings refresh={refreshkey} onRefresh={refresh}/>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//     posts: {
//         flex: 1,
//         width: '100%',
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//     }
// })
// export default Posts





import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Explore from '../components/Explore';
import MyFollowings from '../components/MyFollowings';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';

const Posts = () => {
  const [refreshkey, setRefreshKey] = useState(0);
  const refresh = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <LinearGradient
      colors={['#BB84E8', '#BB84E8']} // Adjust colors as needed
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Navbar />
      <SearchBar />
      <Explore />
      <MyFollowings refresh={refreshkey} onRefresh={refresh} />
    </LinearGradient>
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




