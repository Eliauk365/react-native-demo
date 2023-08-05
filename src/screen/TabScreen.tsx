import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import VideoScreen from './VideoScreen';
const Tab = createBottomTabNavigator();
const TabScreen: React.FC<{}> = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title: '首页', tabBarLabel: '首页'}}
      />
      <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={{title: '视频', tabBarLabel: '视频'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: '我的', tabBarLabel: '我的'}}
      />
    </Tab.Navigator>
  );
};
export default TabScreen;
