import React from 'react';
import {
  RouteConfig,
  NavigationState,
  NavigationContainer,
  EventMapBase,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import TabScreen from '../screen/TabScreen';
import UserCenterScreen from '../screen/UserCenterScreen';
import SettingScreen from '../screen/SettingScreen';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import UpgradeModalScreen from '../screen/UpgradeModalScreen';
export type AppRouteConfig = RouteConfig<
  AppParamList,
  keyof AppParamList,
  NavigationState,
  NativeStackNavigationOptions,
  EventMapBase
>;
const routes: AppRouteConfig[] = [
  {
    name: 'Tab',
    getComponent: () => TabScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'UserCenter',
    component: UserCenterScreen,
    options: {
      title: '个人中心',
    },
  },
  {
    name: 'Setting',
    component: SettingScreen,
  },
  {
    name: 'Upgrade',
    component: UpgradeModalScreen,
    options: {
      headerShown: false,
      presentation: 'transparentModal',
      animation: 'fade',
    },
  },
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'Video',
    component: HomeScreen,
  },
  {
    name: 'Profile',
    component: ProfileScreen,
  },
];
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitle: '',
        }}>
        {routes.map(route =>
          route.component ? (
            <Stack.Screen
              name={route.name}
              component={route.component}
              options={route.options}
              key={route.name}
            />
          ) : (
            <Stack.Screen
              name={route.name}
              getComponent={route.getComponent!}
              options={route.options}
              key={route.name}
            />
          ),
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
