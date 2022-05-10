import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Bas = styled.footer`
  width: 100%;
  margin-top: 5vh;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -4px 2px 0 rgba(90, 188, 58, 0.5);
`;

/* Logo */
export const Logo = styled.div``

export const ImgLogo = styled.img`
  width: 100px;
  margin-right: 5vh;
  margin-left: 60px;
`;

/* Logo */

/*Réseaux sociaux icones */
export const Reseaux = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icone = styled.i`
  color: white;
  margin-right: 2vh;

  &:hover {
    color: rgb(176, 226, 159);
  }
`;

/*Réseaux sociaux icones */

/*Liens */
export const StyledLinkIcone = styled.a`
  color: white;
  font-size: 3rem;
  margin-right: 3vh;

  &:hover {
    color: rgb(176, 226, 159);
  }
`;
/*Liens */

/*Côté droit */

/*Fond */
export const FBcgRight = styled.div`
  padding-left: 15rem;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3rem;
  background-color: rgb(90, 188, 58);
  height: 80px;
  font-family: 'Lato', sans-serif;
  color: white;
  border: 0.1rem round rgb(90, 188, 58);
  border-top-left-radius: 30px;
`;
/*Liens */
export const Links = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 20px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    color: rgb(176, 226, 159);
  }
`
/*Côté droit */