import React, { ReactElement } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import AppRoutes from './AppRoutes';
import { COLORS } from '../global/globalStyles';



export default function Routes(): ReactElement {
  return (
    <>
      <StatusBar
      barStyle="light-content"
      translucent
      backgroundColor={COLORS.darkBlue}
    />
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
    </>
  )
}