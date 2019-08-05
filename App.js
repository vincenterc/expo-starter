import React from "react";
import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <Text>Expo starter!</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Text = styled.Text``;
