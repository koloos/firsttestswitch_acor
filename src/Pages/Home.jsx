import React from 'react'
import styled from 'styled-components'
import { Container, Citation } from '../GlobalStyle';
import { AccueilChiffres } from '../Accueil/Components/AccueilChiffres/SectionChiffres';
import { Territoire } from '../Accueil/Components/SectionTerritoire/TerritoireSection';
import { NotreMissionSection } from '../Accueil/Components/SectionNotreMission/NotreMissionSection';
import { Actualites } from '../Accueil/Components/SectionActualites/ActualitesSection';


function Home() {
  return (
    <>
      <Container>
        <CoverHome />
        <Citation>
          "Chaque personne a sa place dans la société, nous aidons à la
          trouver."
        </Citation>
        <Territoire />
        <NotreMissionSection />
        <Actualites />
      <AccueilChiffres />
      </Container>
    </>
  )
}

/* CoverHome */

const CoverHome = styled.div`
  width: 100%;
  height: 430px;
  background: url('./img/covers/accueil0r.png'), linear-gradient(180deg, rgba(90, 188, 58, .6) 0% , rgba(90, 188, 58, .2) 100%);
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default Home
