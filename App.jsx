import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesome6, MaterialIcons, Feather } from '@expo/vector-icons';
import Login from './screens/Login'
import Signup from './screens/SignUp'
import Notification from './screens/Notifications'

// Import screens
import Posts from './screens/Posts';
import Profile from './screens/Profile';
import Create from './screens/CreatePost';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = () => {
  return (
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Posts" component={Posts} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="SignUp" component={Signup} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Notifications" component={StackNavigator} />
      </Drawer.Navigator>
  )
}
const StackNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Notification" component={Notification}/>
    </Stack.Navigator>
  )
}
const App = () => {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarShowLabel: false}}> 
        <Tab.Screen name="Home" component={DrawerNavigator}  options={{ headerShown: false, tabBarIcon: ({size,color})=>(
          <Feather name="home" size={30} color={color} />
        )}}/>
        <Tab.Screen name="Create" component={Create}  options={{ headerShown: false, tabBarIcon: ({size,color})=>(
          <FontAwesome6 name="edit" size={30} color={color} />
        )}}/>
        <Tab.Screen name="UserProfile" component={Profile}  options={{ headerShown: false, tabBarIcon: ({size,color})=>(
          <MaterialIcons name="account-circle" size={35} color={color} />
        )}}/>
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
