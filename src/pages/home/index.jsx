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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            consectetur dicta quia adipisci quos aliquid perspiciatis unde nulla
            omnis sit, consequatur suscipit dolorum corrupti impedit at animi
            maxime reiciendis officiis? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Amet ipsam minus natus accusantium quis
            praesentium quod ab quidem. Sapiente sunt praesentium quia facere
            pariatur ipsa molestias nesciunt veniam ad dolorum?Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Voluptas id assumenda
            fuga architecto voluptatibus mollitia, alias nobis atque qui
            dignissimos aperiam et earum natus, tempora recusandae! Cum minima
            maiores perferendis voluptatum ut quo eaque et fugit facilis animi,
            id deserunt paria
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
