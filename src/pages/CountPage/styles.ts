import styled from 'styled-components/native';
import {COLORS, FONT_FAMILY} from '../../global/globalStyles';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const Main = styled.View`
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`;

export const TittleCount = styled.Text`
  font-family: ${FONT_FAMILY.semiBold};
  font-size: 20px;
  color: ${COLORS.darkBlue};
`;

export const CountContainer = styled.View`
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  background: #fff;

  padding: 0 20px;
  border-radius: 8px;
  border: 1px solid ${COLORS.lightBlue};
`;

export const Button = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  background-color: ${COLORS.darkBlue};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: -18px;
`;

export const ButtonText = styled.Text`
  font-family: ${FONT_FAMILY.bold};
  font-size: 18px;
  color: ${COLORS.textWhite};
`;

export const CountText = styled.Text`
  font-family: ${FONT_FAMILY.bold};
  font-size: 25px;
  color: ${COLORS.darkBlue};
`;


