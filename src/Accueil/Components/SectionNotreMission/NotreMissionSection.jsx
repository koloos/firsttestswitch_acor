import React from 'react';
import { IoPin } from 'react-icons/io5';
import { SectionNotreMission, Description, ContainOffre, ContainRecrutement, HeaderRecrutement, Offres, LinkOffre, LinkTitleOffre } from './NotreMissionSectionStyle';

export function NotreMissionSection() {
  return (
    <SectionNotreMission id="notremission">
    <Description>
      <LinkTitleOffre to="/notremission"><h3> A.CO.R</h3></LinkTitleOffre>
      <p>
        Spécialisé en insertion professionnelle, nous accompagnons des
        demandeurs d’emploi et travaillons en prise directe avec les
        entreprises locales pour faire émerger des opportunités d’emplois.
      </p>
    </Description>
    <ContainRecrutement>
      <HeaderRecrutement>
        <LinkTitleOffre to="/recrutement"><h3>Nos offres</h3></LinkTitleOffre>
        <img src="./img/iconezoomprofile.svg" alt="icone zoom" />
      </HeaderRecrutement>
      <Offres>
        <ContainOffre>
          <IoPin className="Pin" />
          <p>Chargé.e de Relations entreprises - 64</p>
        </ContainOffre>
        <ContainOffre className="offre2">
          <IoPin className="Pin" />
          <p>Chargé.e de Relations entreprises - 65</p>
        </ContainOffre>
        <LinkOffre to="/recrutement">
          <button type="button">Voir les offres</button>
        </LinkOffre>
      </Offres>
    </ContainRecrutement>
  </SectionNotreMission>
  )
}

export default NotreMissionSection