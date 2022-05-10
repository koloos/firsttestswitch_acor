import styled from 'styled-components';

export const SectionTerritoire = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* background: rgb(90, 188, 58); */
`

/* Côté gauche - Carte */
export const Carte = styled.div`
  width: 599px;

  img {
    width: 100%;
  }
`
/* Côté gauche - Carte */

/* Côté droit - Sélecteur Département*/
export const ContainInput = styled.div`
  width: 599px;
  height: 85px;
  display: flex;
  flex-direction: column;

  /* Sélecteur : Sélectionner votre département */

  label {
    margin-left: 150px;
    font-size: 20px;
    font-weight: 300;
    font-family: 'Lato', sans-serif;
  }
`