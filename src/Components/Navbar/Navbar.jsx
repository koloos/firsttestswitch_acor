import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavBcgLeft1, NavBcgLeft2, Logo, StyledLink, NavBcgRight, StyledLinkIcone, StyledLinkIconeInterne, Reseaux  } from '..//Navbar/NavbarStyle';

function Navbar() {
  return (
    <Nav>
      <NavBcgLeft1>
        <StyledLink to="/actualites" className="actualites">
          Actualités
        </StyledLink>
      </NavBcgLeft1>
      <NavBcgLeft2>
        <StyledLink to="/notremission" className="mission">
          Notre mission
        </StyledLink>
      </NavBcgLeft2>
      <Logo>
        <Link to="/">
          <img src="img/logoacor100.png" alt="Logo" />
        </Link>
      </Logo>
      <NavBcgRight>
        <StyledLink to="/recrutement">Rejoignez-nous</StyledLink>
      </NavBcgRight>
      <StyledLinkIconeInterne to="/contact">
        <i className="fa-solid fa-location-dot"></i>
      </StyledLinkIconeInterne>
      <StyledLinkIconeInterne to="/mail">
        <i className="fa-solid fa-envelope"></i>
      </StyledLinkIconeInterne>
      <Reseaux>
        <StyledLinkIcone href="https://www.facebook.com/acoremploi/" target="_blank">
          {/* <ExternalLink href=""> */}
          <i class="fa-brands fa-facebook-square"></i>
          {/* </ExternalLink> */}
        </StyledLinkIcone>
        <StyledLinkIcone href="https://twitter.com/acor_emploi" target="_blank">
          <i class="fa-brands fa-twitter-square"></i>
        </StyledLinkIcone>
        <StyledLinkIcone href="https://www.instagram.com/acor_emploi/" target="_blank" >
          <i class="fa-brands fa-instagram-square"></i>
        </StyledLinkIcone>
        <StyledLinkIcone href="https://fr.linkedin.com/company/action-pour-le-conseil-et-recrutement" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </StyledLinkIcone>
      </Reseaux>
    </Nav>
  )
}

export default Navbar
