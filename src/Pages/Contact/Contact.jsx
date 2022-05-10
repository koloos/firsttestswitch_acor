import React from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalStyle'
import {
  Cadre,
  ContainCadre,
  PyrA,
  DescriptionDpt,
  Row,
  LinkDpt,
} from './ContactStyle'

function Contact() {
  return (
    <>
      <Container>
        <CoverContact />
        <TitleContact>Nos contacts</TitleContact>
        {/* {
        props.map(
          (prop) => <ContactVille prop={prop} />
          )
      } */}
        {/* <PyrA /> */}
        <ContainCadre>
          <Cadre>
            <img src="./img/dpt/Pamiers-09.png" alt="Pamiers" />
            <DescriptionDpt>
              <Row>
                <i class="fa-solid fa-location-dot"></i>
                <LinkDpt target="_blank" href="https://www.google.com/maps/place/A.CO.R+(Action+pour+le+Conseil+et+le+Recrutement)/@43.1180653,1.6149011,15z/data=!4m5!3m4!1s0x0:0x86dde1f7f860df2a!8m2!3d43.1180307!4d1.614788">
                  <p>
                    66 Bd. Alsace Lorraine <br /> 09100 Pamiers
                  </p>
                </LinkDpt>
              </Row>
            </DescriptionDpt>
          </Cadre>
          <Cadre>
            <img src="./img/dpt/vic-fezensac-32.png" alt="Vic Fezensac" />
            <DescriptionDpt>
              <Row>
                <i class="fa-solid fa-location-dot"></i>
                <LinkDpt target="_blank" href="https://www.google.com/maps/place/A.CO.R+(Action+pour+le+Conseil+et+le+Recrutement)/@43.3067019,-0.3764657,15z/data=!4m2!3m1!1s0x0:0x26088299e31689a1?sa=X&ved=2ahUKEwiW_-j_0cr3AhUO_xoKHYaoA-QQ_BJ6BAgzEAU">
                <p>
                  18 rue des cordeliers <br /> 32190 Vic-Fezensac
                </p>
                </LinkDpt>                
              </Row>
            </DescriptionDpt>
          </Cadre>
          <Cadre>
            <img src="./img/dpt/tonneins-47.png" alt="Tonneins" />
            <DescriptionDpt>
              <Row>
                <i class="fa-solid fa-location-dot"></i>
                <LinkDpt target="_blank" href="https://www.google.com/maps/place/A.CO.R+(Action+pour+le+Conseil+et+le+Recrutement)/@44.3917362,0.3107862,15z/data=!4m2!3m1!1s0x0:0x19599b46e4135c89?sa=X&ved=2ahUKEwi-xuKV0sr3AhVVgM4BHYLvAhcQ_BJ6BAhXEAU">
                <p>
                  54 rue Gambetta <br /> 47400 Tonneins
                </p>
                </LinkDpt>
              </Row>
            </DescriptionDpt>
          </Cadre>
          <Cadre>
            <img src="./img/dpt/pau-64.png" alt="Pau" />
            <DescriptionDpt>
              <Row>
                <i class="fa-solid fa-location-dot"></i>
                <LinkDpt target="_blank" href="https://www.google.com/maps/place/A.CO.R+(Action+pour+le+Conseil+et+le+Recrutement)/@43.3067019,-0.3764657,15z/data=!4m5!3m4!1s0x0:0x26088299e31689a1!8m2!3d43.3067019!4d-0.3764657">
                <p>
                  15 av. Jean Mermoz <br /> 64000 Pau
                </p>
                </LinkDpt>
              </Row>
            </DescriptionDpt>
          </Cadre>
          <Cadre>
            <img src="./img/dpt/tarbes-65.png" alt="Tarbes" />
            <DescriptionDpt>
              <Row>
                <i class="fa-solid fa-location-dot"></i>
                <LinkDpt target="_blank" href="https://www.google.com/maps/place/A.CO.R+(Action+pour+le+Conseil+et+le+Recrutement)/@43.2357917,0.0610833,15z/data=!4m5!3m4!1s0x0:0x6ee4a5ab4409524f!8m2!3d43.2358729!4d0.0610984">
                <p>
                  43 rue du Corps Franc Pommies <br /> 65000 Tarbes
                </p>
                </LinkDpt>
              </Row>
            </DescriptionDpt>
          </Cadre>
        </ContainCadre>
      </Container>
    </>
  )
}

/* CoverContact */

const CoverContact = styled.div`
  width: 100%;
  height: 430px;
  background: url('./img/covers/contact.png'),
    linear-gradient(
      180deg,
      rgba(90, 188, 58, 0.6) 0%,
      rgba(90, 188, 58, 0.2) 100%
    );
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
`

const TitleContact = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-size: 48px;
  font-weight: 600;
  color: rgb(90, 188, 58);
  text-transform: uppercase;
  text-align: center;
  padding-top: 40px;
`

export default Contact
