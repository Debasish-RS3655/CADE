import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/Login'
import Signup from '../screens/SignUp'

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="SignUp" component={Signup} />
      
    </Drawer.Navigator>
  )
}

export default DrawerNavigation