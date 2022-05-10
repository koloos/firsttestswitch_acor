import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* Section notre mission entière - A.CO.R + Offres */
export const SectionNotreMission = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(176, 226, 159);
  margin-top: 20px;
  padding-bottom: 50px;
`

/* Description A.CO.R - Côté gauche */
export const Description = styled.div`
  width: 425px;
  height: 355px;
  margin-left: 50px;
  margin-top: 20px;

  h3 {
    color: white;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 46px;
    padding-bottom: 20px;
    transition: all 3s transform;
  }

  p {
    font-size: 20px;
    text-align: justify;
  }
`

export const LinkTitleOffre = styled(Link)`
  text-decoration: none;
  color:white;
  
  :hover{
    text-shadow: 4px 0px 0px rgb(90, 188, 58);;
  }
`

/* Offres recrutement - Côté droit */
export const ContainRecrutement = styled.div`
  display: flex;
  flex-direction: column;
  width: 623px;
  height: 370px;
  margin-right: 50px;
`

/* Titre + icone perso */
export const HeaderRecrutement = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  height: 100px;

  h3 {
    color: white;
    text-transform: uppercase;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 46px;
  }

  img {
    width: 60px;
    height: 60px;
    margin-left: 40px;
    margin-bottom: 20px;
  }
`

/* Offre */

/* fond */
export const Offres = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 623px;
  height: 263px;
  background: white;
  padding-top: 100px;
  padding-bottom: 35px;
  padding-right: 50px;
  box-shadow: 2px 4px 2px rgb(90, 188, 58);
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border: 1px solid rgb(90, 188, 58);

  button {
    color: white;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: rgb(90, 188, 58);
    border: 3px solid white;
    border-radius: 10px;
    box-shadow: 2px 4px 2px rgb(90, 90, 90);
    padding: 10px;
    cursor: pointer;
    margin-top: 35px;
  }

  button:hover {
    color: rgb(90, 188, 58);
    background: white;
    border: 3px solid rgb(90, 188, 58);
  }

  button:active {
    color: rgb(180, 180, 180);
  }

  button:visited {
    color: rgb(90, 90, 90);
  }
`
export const LinkOffre = styled(Link)`
  text-decoration: none;
`
/* Contenu Offre */
export const ContainOffre = styled.div`
  display: flex;
  align-items: center;

  .Pin {
    transform: rotate(-25deg);
    color: rgb(90, 188, 58);
    font-size: 60px;
    margin-bottom: 10px;
  }

  p {
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    color: rgb(90, 90, 90);
    font-size: 20px;
    margin-left: 20px;
  }
`