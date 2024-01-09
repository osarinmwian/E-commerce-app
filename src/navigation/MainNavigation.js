import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import {  ProductDetails } from '../screens';
import ViewProduct from '../screens/products/ViewProducts';
import Login from '../screens/auth/Login/Login';
import SignUp from '../screens/auth/SignUp/SignUp';




const Stack = createNativeStackNavigator();
export const MainNavigation = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen 
       name='Login'
       component={Login}
       options={{headerShown: false}}/>
        <Stack.Screen 
       name='SignUp'
       component={SignUp}
       options={{headerShown: false}}/>
    <Stack.Screen 
       name='BottomTabNavigation'
       component={BottomTabNavigation}
       options={{headerShown: false}}/>
    <Stack.Screen 
       name='ProductDetails'
       component={ProductDetails}
       options={{headerShown: false}}/>
           <Stack.Screen 
       name='ViewProduct'
       component={ViewProduct}
       options={{headerShown: false}}/>
   </Stack.Navigator>
  );
};
