import React from 'react';
import { render } from 'react-dom';
import './style.css';

import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <main>
        <div className="home-page">
          <h1 className="home-page__h1">Poznej hudbu</h1>
          <h2 className="home-page__h2">
            Proč je hudba v životě dětí důležita?
          </h2>
          <div className="home-page__text">
            Vítám vás všechny na svých stránkách. Jmenuji se Hudba a budu vás
            provázet po celý život. Jsem už hodně stará a dost si toho pamatuji.
            Spoustu lidí, kteří mě hýčkali, nástrojů, kterým jsem propůjčila
            hlas. Jsem tady vlastně od nepaměti a doufám, že ještě dlouho budu.
            I díky vám. V lidském životě jsem nedílnou součástí ať už si to sami
            uvědomujete nebo ne. Slyšíte mě už i u maminky v bříšku, představte
            si to! Mám spoustu podob, ale pořád jsem to já. Umím být vážná i
            rozpustilá. Veselá i hodně smutná. Pomalá a nebo rychlá. Záleží,
            jakou mě kdo stvoří a jakou si mě vyberete. Jsem slyšet pomocí
            hudebních nástrojů nebo lidského hlasu a lidé si mě zapisují podle
            docela zvláštních značek - říká se jim noty. Všechno vám tady ukážu,
            abyste mému světu lépe porozumněli, nemějte strach. Umím také
            pomáhat - zkuste si pustit veselou písničku nebo si zazpívat, když
            jste smutní. Uvidíte, že se zase začnete smát. A teď už honem, ať se
            poznáme líp!
          </div>
          <section>
            <div className="notes">
              <Link to="/poznej-noty">Poznej noty</Link>
            </div>
            <div className="instruments">
              <Link to="/poznej-nastroje">Poznej nástroje</Link>
            </div>
            <div className="composers">
              <Link to="/poznej-umelce">Poznej umělce</Link>
            </div>
            <div className="songs">
              <Link to="/poznej-pisnicky">Poznej písničky</Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
