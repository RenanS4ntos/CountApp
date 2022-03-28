import React from 'react';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { COLORS } from '../../global/globalStyles';


const SafeAreaContainer: React.FC = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.darkBlue,
        paddingTop: getStatusBarHeight(),
      }}
    >
      <GestureHandlerRootView
        style={{
          flex: 1,
          backgroundColor: COLORS.backgroundPageColorWhite,
        }}
      >
        {children}
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default SafeAreaContainer;
