import React from 'react';
import { Container } from '../../GlobalStyle';
import styled from 'styled-components';

function NotreMission() {
  return (
    <>
      <Container>
        <TitleNotreMission>Nos Actions</TitleNotreMission>
      </Container>
    </>
  )
}

const TitleNotreMission = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-size: 48px;
  font-weight: 600;
  color: rgb(90, 188, 58);
  text-transform: uppercase;
  padding-top: 40px;
`;

export default NotreMission