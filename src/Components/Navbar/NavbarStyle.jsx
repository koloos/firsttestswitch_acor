import { Link } from 'react-router-dom';
import styled from 'styled-components';

/*Bloc Nav */
export const Nav = styled.nav`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  left: 0;
  background: white;
  font-family: 'Nunito', sans-serif;
  color: white;
  position: fixed;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 34px;
  box-shadow: 0 2px 2px 0 rgba(90, 188, 58, 0.6);
`
/*Côté gauche - Actualités */
export const NavBcgLeft1 = styled.div`
  width: 250px;
  height: 60px;
  line-height: 60px;
  margin-left: 0;
  left: 0;
  background: rgb(90, 188, 58);
  /* transform: skewX(-20deg); */
  color: white;

  &:hover {
    width: 250px;
    background-color: white;
    box-shadow: 2px 4px 0px rgba(90, 188, 58);
    color: rgb(90, 188, 58);
    border: 2px solid rgb(90, 188, 58);
  }
`
/*Côté gauche - Actualités */

/*Liens */
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2px 0 10px;

  &:hover {
    color: rgb(90, 188, 58);
  }
`

/*Côté gauche - Notre Mission */
export const NavBcgLeft2 = styled.div`
  width: 350px;
  height: 60px;
  line-height: 60px;
  margin-left: 0;
  left: 0;
  background: rgb(90, 188, 58);
  border-bottom-right-radius: 15px;
  padding-left: 7px;
  color: white;

  &:hover {
    width: 350px;
    background-color: white;
    box-shadow: 2px 4px 0px rgba(90, 188, 58);
    color: rgb(90, 188, 58);
    border: 2px solid rgb(90, 188, 58);
  }

  /* &::before{
      content: '';
      width: 40vh;
      height: 10vh;
      padding: 5vh;
      
      transform: skew(-40deg, 0deg);
      border-bottom-right-radius: 15px;
      position: relative;
    } */
`
/*Côté gauche - Notre Mission */

/*Logo */
export const Logo = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  margin-left: 20px;
  transition: transform .25s, visibility .25s ease-in-out;

  &:hover {
    border-radius: 60px;
    box-shadow: inset 0px 0px 30px rgba(255, 255, 255, .3);
    transform: scale(1.2);
  };

  img{
    width: 100%;
  }
`
/*Logo */

/*Côté droit - Rejoignez-nous */
export const NavBcgRight = styled.div`
  width: 350px;
  height: 60px;
  line-height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: rgb(90, 188, 58);
  /* transform: skew(-40deg, 0deg); */
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-right: 60px;

  &:hover {
    /* transform: skew(-40px); */
    width: 350px;
    background-color: white;
    box-shadow: 2px 4px 0px rgb(90, 188, 58);
    color: rgb(90, 188, 58);
    border: 2px solid rgb(90, 188, 58);
  }
`
/*Côté droit - Rejoignez-nous */

export const StyledLinkIconeInterne = styled(Link)`
  color: rgb(90, 188, 58);
  font-size: 3rem;
  margin: 0 4px -6px;
  overflow: hidden;
  flex-shrink: 0;

  &:hover {
    color: rgb(176, 226, 159);
  }
`
/*Réseaux */
export const Reseaux = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 10%;
  max-width: 110px;
  margin: -8px auto 0;
`

export const StyledLinkIcone = styled.a`
  color: rgb(90, 188, 58);
  font-size: 3rem;
  margin: 0 4px -6px;
  overflow: hidden;
  flex-shrink: 0;

  &:hover {
    color: rgb(176, 226, 159);
  }
` 

/*Bloc Nav */

