import React, { useState } from 'react';
import { TextInput } from 'react-native';

import BackButton from '../../components/BackButton';
import SafeAreaContainer from '../../components/Container';
import Input from '../../components/Input';
import {Container, Button, ButtonText, Main, CountText, CountContainer, TittleCount } from './styles';

const CountPage = () => {
  const [number, setNumber] = useState(0);
  const [text, onChangeText] = React.useState("");

  function HandleCount(item: number) {
    if(number + item >= 0){
      setNumber(number + item);
    }
  }

  return (
    <SafeAreaContainer>
      <BackButton/>
      <Container>
        <Main>
          <TittleCount>Contador</TittleCount>
          <CountContainer>
            <Button onPress={() => HandleCount(-1)}>
              <ButtonText>- 1</ButtonText>   
            </Button>
            <CountText>{number}</CountText>
            <Button onPress={() => HandleCount(1)}>
              <ButtonText>+ 1</ButtonText>  
            </Button>
          </CountContainer>
        </Main>
      </Container>
    </SafeAreaContainer>
  )
}


export default CountPage;