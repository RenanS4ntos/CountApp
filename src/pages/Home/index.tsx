import { useNavigation } from '@react-navigation/native';
import React from 'react';
import SafeAreaContainer from '../../components/Container';
import {Container, TitleApp, Button, ButtonText, Main } from './styles';

const Home = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaContainer>
      <Container>
        <Main>
          <TitleApp>App Teste | React Native</TitleApp>
          <Button onPress={() => navigation.navigate('CountPage')}>
            <ButtonText>Go ➡️</ButtonText>   
          </Button>
        </Main>
      </Container>
    </SafeAreaContainer>
  );
};


export default Home;