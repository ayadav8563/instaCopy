import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, MyProfile, Reel, Search, Upload } from '_screens';
import MyTabBar from './MyTabBar';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Upload" component={Upload} />
      <Tab.Screen name="Reel" component={Reel} />
      <Tab.Screen name="Profile" component={MyProfile} />
    </Tab.Navigator>
  );
}

export default BottomTab;