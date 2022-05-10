import React from 'react';
import { Bas, Container, Logo, ImgLogo, FBcgRight, Reseaux, StyledLinkIcone, Links, StyledLink, Icone } from '../Footer/FooterStyle';

function Footer() {
  return (
    <Bas>
      <Container>
        <Logo>
          <ImgLogo src="./img/logoacor.png" alt="Logo" />
        </Logo>
        <FBcgRight>
          <Reseaux>
            <StyledLinkIcone target="_blank" href="https://www.facebook.com/acoremploi/">
              <Icone className="fa-brands fa-facebook-square"></Icone>
            </StyledLinkIcone>
            <StyledLinkIcone target="_blank" href="https://twitter.com/acor_emploi">
              <Icone className="fa-brands fa-twitter-square"></Icone>
            </StyledLinkIcone>
            <StyledLinkIcone target="_blank" href="https://www.instagram.com/acor_emploi/">
              <Icone className="fa-brands fa-instagram-square"></Icone>
            </StyledLinkIcone>
            <StyledLinkIcone target="_blank" href="https://fr.linkedin.com/company/action-pour-le-conseil-et-recrutement">
              <Icone className="fa-brands fa-linkedin"></Icone>
            </StyledLinkIcone>
          </Reseaux>
          <Links>
            <StyledLink to="/notrehistoire">-Notre histoire</StyledLink>
            <StyledLink to="/mentionslegales">-Mentions légales</StyledLink>
          </Links>
        </FBcgRight>
      </Container>
    </Bas>
  )
}


export default Footer
