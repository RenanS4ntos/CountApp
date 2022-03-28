import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import CountPage from '../pages/CountPage';

const AppStack = createNativeStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Dashboard"
  >
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="CountPage" component={CountPage} />
  </AppStack.Navigator>
);

export default AppRoutes;