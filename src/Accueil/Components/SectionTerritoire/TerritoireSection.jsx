import React from 'react';
import { TerritoireSelecteur } from '../SelecteurTerr/TerritoireSelecteur';
import {SectionTerritoire, Carte, ContainInput } from './TerritoireSectionStyle';

export function Territoire() {
  return (
    <SectionTerritoire>
    <Carte>
      <img src="./img/cartereseauacor.png" alt="Territoire" />
    </Carte>
    <ContainInput>
      <label>Sélectionnez votre département :</label>
    <TerritoireSelecteur />
    </ContainInput>
  </SectionTerritoire>
  )
}

export default SectionTerritoire