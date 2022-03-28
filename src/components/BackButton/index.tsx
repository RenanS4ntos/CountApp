import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  BorderlessButton,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { COLORS } from '../../global/globalStyles';


interface BackButtonProps {
  color?: string;
}

export default function BackButton({ color }: BackButtonProps) {
  const navigation = useNavigation();

  return (
    <GestureHandlerRootView
      style={{
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 10,
        backgroundColor: 'transparent',
      }}
    >
      <BorderlessButton onPress={() => navigation.goBack()}>
        <Feather
          name="chevron-left"
          size={40}
          color={color || COLORS.darkBlue}
          style={{ paddingLeft: 5 }}
        />
      </BorderlessButton>
    </GestureHandlerRootView>
  );
}
