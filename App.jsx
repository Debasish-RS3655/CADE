import React, {useState, useEffect, useRef} from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import Login from './screens/Login'
import Signup from './screens/SignUp'
import Notification from './screens/Notifications'
import Search from './screens/Search'
import Statistics from './screens/Statistics'
import MessagingPage from './screens/MessagingPage';
import IndividualPost from './screens/IndividualPost';
import People  from './screens/People';
import CommentPage from './screens/CommentPage';
import {View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native'
import LottieView from 'lottie-react-native';
import * as Updates from 'expo-updates'; // Import Updates

// Import screens
import Posts from './screens/Posts';
import Profile from './screens/Profile';
import Create from './screens/CreatePost';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Custom Splash Screen Component
const SplashScreen = () => {
  // const navigation = useNavigation();
  // const handleGetStarted = () => {
  //   navigation.navigate('Login');
  // };

  return (
    <View style={styles.container}>
      <LottieView
        source={require('./assets/Lottie/react1.json')}
        autoPlay
        style={styles.animation}
        resizeMode="cover"
      />
      {/* <Text>CADE</Text> */}
    </View>
  );
};

// Custom Drawer Content Component
const CustomDrawerContent = (props) => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate('Profile'); // Navigate to the Profile screen
  };

  
  return (
//     <DrawerContentScrollView {...props} style={{ flex: 1 }}>
//   <View style={{ flex: 1, justifyContent: 'space-between' }}>
//     <View>
//       <View style={styles.drawerHeader}>
//         <TouchableOpacity onPress={goToProfile}>
//           <Image source={{ uri: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' }} style={styles.profileImage} />
//         </TouchableOpacity>
//         <Text style={styles.profileText}>Alex Kalita</Text>
//       </View>
//       <DrawerItemList {...props} />
//     </View>
//     <View style={{ alignItems: 'center', marginBottom: 20 }}>
//       <Text>CADE</Text>
//     </View>
//   </View>
// </DrawerContentScrollView>



<View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground
          source={{uri: 'https://media.istockphoto.com/id/1208738316/photo/abstract-geometric-network-polygon-globe-graphic-background.webp?b=1&s=170667a&w=0&k=20&c=Ewa2JDeA8E9k9ch3IYWkSYdEkTEhyaMNfNLkClag-j4='}}
          style={{padding: 20, marginTop: -4}}>
          <Image
            source={{uri: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'}}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              marginBottom: 5,
            }}>
            Alex Kalita
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#fff',
                marginRight: 5,
              }}>
              280 Coins
            </Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} color='#BB84E8'/>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} color='#BB84E8'/>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>


  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
screenOptions={({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    let iconSize;
    let iconColor;
    iconSize = focused ? 28 : 25
    iconColor = focused ? '#BB84E8' : color;
    if (route.name === 'HomeScreen') {
      iconName = focused ? 'home' : 'home-outline';
      return <Ionicons name={iconName} size={iconSize} color={iconColor} />;
    } else if (route.name === 'Search') {
      iconName = focused ? 'search-sharp' : 'search';
      return <Ionicons name={iconName} size={iconSize} color={iconColor} />;
    } else if (route.name === 'Create') {
      iconName = focused ? 'add-circle': 'add-circle-outline';
      return <MaterialIcons name={iconName} size={iconSize} color={iconColor} />
    } else if (route.name === 'Statistics') {
      iconName = focused ? 'stats-chart': 'stats-chart-outline';
      return <Ionicons name={iconName} size={iconSize} color={iconColor} />;
    } else if (route.name === 'People') {
      iconName = focused? 'people-sharp' : 'people-outline';
      return <Ionicons name={iconName} size={iconSize} color={iconColor} />
    }
  },
  tabBarShowLabel: false
})}
> 
<Tab.Screen 
  name="HomeScreen" 
  component={StackNavigator} 
  options={{ headerShown: false,  tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'gray' }}
  
/>
<Tab.Screen 
  name="Search" 
  component={Search} 
  options={{ headerShown: false, tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'gray' }} 
/>
<Tab.Screen 
  name="Create" 
  component={Create} 
  options={{ headerShown: false, tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'gray' }} 
/>
<Tab.Screen 
  name="Statistics" 
  component={Statistics} 
  options={{ headerShown: false, tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'gray' }} 
/>
<Tab.Screen 
  name="People" 
  component={People} 
  options={{ headerShown: false, tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'gray' }} 
/>
</Tab.Navigator>
  )
}

const StackNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Drawer" component={Posts} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="IndividualPost" component={IndividualPost} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="MessagingPage" component={MessagingPage} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="CommentPage" component={CommentPage} />

    </Stack.Navigator>
  )
}
const App = () => {

  const {
    currentlyRunning,
    availableUpdate,
    isUpdateAvailable,
    isUpdatePending
  } = Updates.useUpdates();

  React.useEffect(() => {
    if (isUpdatePending) {
      // Update has successfully downloaded; apply it now
      Updates.reloadAsync();
    }
  }, [isUpdatePending]);
  const navigationRef = useRef(null);
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  // Function to hide splash screen after a certain time
  useEffect(() => {
    setTimeout(() => {
      setIsSplashVisible(false);
    }, 4000); // Adjust the time duration as needed
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
    <NavigationContainer ref={navigationRef}>
    {isSplashVisible ? (
          <SplashScreen navigation={navigationRef} />
        ) : (
          <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: '#BB84E8',
            // drawerActiveBackgroundColor: '#aa18ea',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#333',
            drawerLabelStyle: {
              marginLeft: -25,
              fontSize: 14,
            }}}
          drawerContent={props => <CustomDrawerContent {...props} />}
          
        >
          <Drawer.Screen name="Home" component={TabNavigator} options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={focused ? '#fff' : '#BB84E8'} />
            ),
            drawerItemStyle: {
              borderRadius: 40, paddingLeft: 2
            }
            
          }}/>
          <Drawer.Screen name="Profile" component={Profile} options={{
            drawerIcon: ({ focused, color, size }) => (
              <AntDesign name={focused ? 'user' : 'user'} size={size} color={focused ? '#fff' : '#BB84E8'} />
            ),
            drawerItemStyle: {
              borderRadius: 40, paddingLeft: 2
            }
            
          }}/>
          <Drawer.Screen name="Notifications" component={Notification} options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'notifications' : 'notifications-outline'} size={size} color={focused ? '#fff' : '#BB84E8'} />
            ),
            drawerItemStyle: {
              borderRadius: 40, paddingLeft: 2
            }

          }}/>
          <Drawer.Screen name="Messages" component={MessagingPage} 
           options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'chatbubbles' : 'chatbubbles-outline'} size={size} color={focused ? '#fff' : '#BB84E8'} />
            ),
            drawerItemStyle: {
              borderRadius: 40, paddingLeft: 2
            }
          }}/>
          <Drawer.Screen name="Login" component={Login} 
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <AntDesign name={focused ? 'login' : 'login'} size={size} color={focused ? '#fff' : '#BB84E8'} />
            ),drawerItemStyle: {
              borderRadius: 40, paddingLeft: 2
            }}}/>
          <Drawer.Screen name="SignUp" component={Signup} options={{
            drawerIcon: ({ focused, color, size }) => (
              <AntDesign name={focused ? 'login' : 'login'} size={size} color={focused ? '#fff' : '#BB84E8'} />
            ),drawerItemStyle: {
              borderRadius: 40, paddingLeft: 2
            }}}/>
        </Drawer.Navigator>
        )}
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    flex: 0.3,
    width: 20,
    height: 20,
  },
  drawerHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1,
    
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginTop: 20
  },
  profileText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
  }
});

export default App;
