import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../GlobalStyle';

function Presse() {
  return (
    <>
      <Container>
        <CoverActualite />
      </Container>
    </>
  )
}

const CoverActualite = styled.div`
  width: 100%;
  height: 430px;
  background: url('./img/covers/actualites.png'), linear-gradient(180deg, rgba(90, 188, 58, .6) 0% , rgba(90, 188, 58, .2) 100%);
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default Presse