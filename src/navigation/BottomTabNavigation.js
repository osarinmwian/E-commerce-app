import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import {Ionicons }from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { Home, Profile, Search } from '../screens';

const Tab = createBottomTabNavigator();
const  BottomTabNavigation =() =>{

    const screenOption = {
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: WP(18),
        }
    }
  return (
    <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
            tabBarIcon: (({focused})=> {
                return<Ionicons name={focused ? "home" : "home-outline"} 
             size={20} 
             color={focused ? COLORS.primary : COLORS.gray}/>

            })
        }}
        />
      
       
        <Tab.Screen 
        name="Search" 
        component={Search}
        options={{
            tabBarIcon: (({focused})=> {
             return<Ionicons name={focused ? "search-sharp": "search-outline"} 
             size={20} 
             color={focused ? COLORS.primary : COLORS.gray}/>

            })
        }}
        />

<Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
            tabBarIcon: (({focused})=> {
             return<Ionicons name={focused ? "person" : "person-outline"} 
             size={20} 
             color={focused ? COLORS.primary : COLORS.gray}/>

            })
        }}
        />
      
    </Tab.Navigator>
  )
}

export default BottomTabNavigation
