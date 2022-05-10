import React from 'react';
import { ContainSectionChiffres, ContainCircles, OneCircle, CircleChiffre, LinkTitleChiffres } from '../AccueilChiffres/SectionChiffresStyles'; 

export function AccueilChiffres() {
  return (
    <ContainSectionChiffres>
        <LinkTitleChiffres to="/notrehistoire"><h3>A.CO.R c'est</h3></LinkTitleChiffres>
        <p>(Les chiffres clés)</p>
        <ContainCircles>
          <OneCircle>
          <CircleChiffre>
          <h4>28</h4>
          </CircleChiffre>
          <p>Le nombre de salariés présents dans le 64</p>
          </OneCircle>
          <OneCircle>
          <CircleChiffre>
          <h4>28</h4>
          </CircleChiffre>
          <p>Le nombre de salariés présents dans le 64</p>
          </OneCircle>
          <OneCircle>
          <CircleChiffre>
          <h4>28</h4>
          </CircleChiffre>
          <p>Le nombre de salariés présents dans le 64</p>
          </OneCircle>
        </ContainCircles>
    </ContainSectionChiffres>
  )
}