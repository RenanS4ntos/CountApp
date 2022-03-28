import styled from 'styled-components/native';
import {COLORS, FONT_FAMILY} from '../../global/globalStyles';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: ${COLORS.backgroundPageColorWhite};
  justify-content: center;
`;

export const Main = styled.View`
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`;

export const TitleApp = styled.Text`
  font-family: ${FONT_FAMILY.semiBold};
  font-size: 25px;
  color: ${COLORS.titleLightBlue};
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  background-color: ${COLORS.darkBlue};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: ${FONT_FAMILY.bold};
  font-size: 18px;
  color: ${COLORS.textWhite};
`;


