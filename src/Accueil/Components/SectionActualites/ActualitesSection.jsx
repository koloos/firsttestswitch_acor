import React from 'react';
import { SectionActualites, Event, HeaderEvent, LinkTitleEvent } from './ActualitesSectionStyle';

export function Actualites() {
  return (
    <SectionActualites id="accueilActualites">
          <Event>
            <HeaderEvent>
              <LinkTitleEvent to="/actualites/evenements"><h3>Evènement</h3></LinkTitleEvent>
            </HeaderEvent>
            <img
              src="./img/cd642022/demijournee/19042022.png"
              alt="Evènement du 19 Avril 2022 à PAU"
            />
          </Event>
          <Event>
            <HeaderEvent>
              <LinkTitleEvent to="/actualites/evenements"><h3>Evènement</h3></LinkTitleEvent>
            </HeaderEvent>
            <img
              src="./img/cd642022/demijournee/19042022.png"
              alt="Evènement du 19 Avril 2022 à PAU"
            />
          </Event>
          <Event>
            <HeaderEvent>
              <h3 className='ResSociaux'>Réseaux sociaux</h3>
            </HeaderEvent>
          </Event>
          <Event>
            <HeaderEvent>
              <LinkTitleEvent to="/actualites/temoignages"><h3>Témoignages</h3></LinkTitleEvent>
            </HeaderEvent>
          </Event>
          <Event>
            <HeaderEvent>
              <LinkTitleEvent to="/actualites/presse"><h3>Presse</h3></LinkTitleEvent>
            </HeaderEvent>
            <img
              src="./img/cd642022/demijournee/19042022.png"
              alt="Evènement du 19 Avril 2022 à PAU"
            />
          </Event>
          <Event>
            <HeaderEvent>
              <LinkTitleEvent to="/actualites/notreactulaites"><h3>Actualités</h3></LinkTitleEvent>
            </HeaderEvent>
          </Event>
        </SectionActualites>
  )
}

export default Actualites;