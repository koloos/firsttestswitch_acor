import React from 'react';
import { ContainSelect } from '../SelecteurTerr/TerritoireSelecteurStyles';

export function TerritoireSelecteur() {
  return (
    <ContainSelect>
      <div id="app-cover">
        <div id="select-box">
          <input type="checkbox" id="options-view-button" />
            <div id="select-button" className="brd">
              <div id="selected-value">
                <span>Sélectionnez votre département</span>
              </div>
              <div id="chevrons">
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
            <div id="options">
              <div className="option">
                <input className="s-c top" type="radio" name="platform" value="Ariège" data-left="./img/dpt/Pamiers-09.png"/>
                  <input className="s-c bottom" type="radio" name="platform" value="Ariège"/>
                    <img className="ariege" src="./img/dpt/Pamiers-09.png" alt="09-Pamiers"/>
                    <span className="label">Ariège</span>
                    <span className="opt-val">Ariège</span>
                  </div>
                  <div className="option">
                    <input className="s-c top" type="radio" name="platform" value="Gers" />
                      <input className="s-c bottom" type="radio" name="platform" value="Gers" />
                        <img className="gers" src="./img/dpt/vic-fezensac-32.png" alt="32-Gers" />
                        <span className="label">Gers</span>
                        <span className="opt-val">Gers</span>
                      </div>
                      <div className="option">
                        <input className="s-c top" type="radio" name="platform" value="Lot-et-Garonne" />
                          <input className="s-c bottom" type="radio" name="platform" value="Lot-et-Garonne" />
                            <img className="lotEtGaronne" src="./img/dpt/tonneins-47.png" alt="47-Lot-et-Garonne" />
                            <span className="label">Lot-et-Garonne</span>
                            <span className="opt-val">Lot-et-Garonne</span>
                          </div>
                          <div className="option">
                            <input className="s-c top" type="radio" name="platform" value="Pyrénées Atlantique" />
                              <input className="s-c bottom" type="radio" name="platform" value="Pyrénées Atlantique" />
                                <img className="pyreneesAtlantique" src="./img/dpt/pau-64.png" alt="64-Pyérénées Atlantique" />
                                <span className="label">Pyrénées Atlantique</span>
                                <span className="opt-val">Pyrénées Atlantique</span>
                              </div>
                              <div className="option">
                                <input className="s-c top" type="radio" name="platform" value="Hautes Pyrénées" />
                                  <input className="s-c bottom" type="radio" name="platform" value="Hautes Pyrénées" />
                                    <img className="hautesPyrenees" src="./img/dpt/tarbes-65.png"alt="Hautes Pyrénées" />
                                    <span className="label">Hautes Pyrénées</span>
                                    <span className="opt-val">Hautes Pyrénées</span>
                                  </div>
                                  <div id="option-bg"></div>
                              </div>
                          </div>
                      </div>
                    </ContainSelect>
                    );
}