import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/Home/HomeScreen';
import ForecastScreen from '../screens/Forecast/ForecastScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import DetailsScreen from '../screens/Details/DetailsScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'sun';

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Forecast':
              iconName = 'calendar';
              break;
            case 'Search':
              iconName = 'search';
              break;
            case 'Moon':
              iconName = 'moon';
              break;
            case 'Settings':
              iconName = 'settings';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2196f3',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { paddingBottom: 6, paddingTop: 6, height: 60 },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Forecast" component={ForecastScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Moon" component={DetailsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
