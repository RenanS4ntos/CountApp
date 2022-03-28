import React from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { COLORS } from '../../global/globalStyles';
import WaveFooter from '../../assets/waveFooter.png';



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
      <ImageBackground
          source={WaveFooter}
          style={{
            width: '100%',
            height:  100,
            position: 'absolute',
            bottom: -30,
          }}
      />
    </SafeAreaView>
  );
};

export default SafeAreaContainer;
