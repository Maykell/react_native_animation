import React from 'react';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

const Container = styled.View`
  flex: 1;
  background-color: brown;
  justify-content: flex-end;
`;

const CartContainer = styled(Animatable.View).attrs(() => ({
  animation: 'slideInUp',
  duration: 900,
  iterationCount: 'infinite',
  easing: 'ease-out',
  useNativeDriver: true,
}))`
  height: 50px;
  background-color: green;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

const CartLabel = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 700;
`;

const CartValue = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 700;
`;

const App = () => (
  <Container>
    <CartContainer>
      <CartLabel>Sacola</CartLabel>
      <CartValue>R$ 100,00</CartValue>
    </CartContainer>
  </Container>
);

export default App;
