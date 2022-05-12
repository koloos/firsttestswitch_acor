import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../../GlobalStyle';
import Axios from 'axios';


function Recrutement() {

   const [offre, setOffre] = useState('');
   const [evenement, setEvenement] = useState('');

  return (
    <>
    <Container>
    <CoverRecrutement />
    <div onChange={(e)=>{
      setOffre(e.target.value);
    }}>

    </div>
  </Container>
  </>
  )
}

const CoverRecrutement = styled.div`
  width: 100%;
  height: 430px;
  background: url('./img/covers/recrutement.png'), linear-gradient(180deg, rgba(90, 188, 58, .6) 0% , rgba(90, 188, 58, .2) 100%);
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
`

export default Recrutement