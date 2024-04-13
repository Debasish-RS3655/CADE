import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, RefreshControl } from 'react-native';
import { FlashList } from "@shopify/flash-list";

const PostItem = React.memo(({ item }) => (
  <View style={{ marginBottom: 20 }}>
    <Image
      style={{ width: '100%', height: 300 }}
      source={{ uri: item.url }}
    />
    <Text style={{ marginTop: 10, fontSize: 16 }}>{item.title}</Text>
  </View>
));

const Categories = () => {
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
        renderItem={({ item }) => <PostItem item={item} />}
        keyExtractor={(item) => item.key} // Use generated keys as unique identifiers
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
        ListFooterComponent={renderFooter}
        estimatedItemSize={150}
        showsVerticalScrollIndicator={false}
        horizontal={true}
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
    </View>
  );
};

export default Categories;