import React from 'react';
import styled from 'styled-components';
import { Container} from '../GlobalStyle';

function NotreHistoire() {
  return (
    <>
      <Container>
        <CoverNotreHistoire />
        <TitleNotreHistoire>L'histoire de A.CO.R</TitleNotreHistoire>
      </Container>
    </>
  )
}

const CoverNotreHistoire = styled.div`
  width: 100%;
  height: 430px;
  background: url('./img/covers/notrehistoire.png'), linear-gradient(180deg, rgba(90, 188, 58, .6) 0% , rgba(90, 188, 58, .2) 100%);
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const TitleNotreHistoire = styled.h1`
  font-family: 'Nunito', sans-serif;
    font-size: 48px;
    font-weight: 600;
    color: rgb(90, 188, 58);
    text-transform: uppercase;
    text-align: center;
`;


export default NotreHistoire
