import React from 'react';
import { render } from 'react-dom';
import './style.css';

import { Link } from 'react-router-dom';



export const Home = () => {
  return (
    <>
      <main>
        <div className="main-page">
          <h1>Poznej hudbu</h1>
          <h2>Hudebně-zábavný web</h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            consectetur dicta quia adipisci quos aliquid perspiciatis unde nulla
            omnis sit, consequatur suscipit dolorum corrupti impedit at animi
            maxime reiciendis officiis? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Amet ipsam minus natus accusantium quis
            praesentium quod ab quidem. Sapiente sunt praesentium quia facere
            pariatur ipsa molestias nesciunt veniam ad dolorum?
          </h3>
          <section>
            <div className="notes">
              <Link to="/poznej-noty">Poznej noty</Link>
            </div>
            <div className="instruments">
              <Link to="/poznej-nastroje">Poznej nástroje</Link>
            </div>
            <div className="composers">
              <Link to="/poznej-skladatele">Poznej skladatele</Link>
            </div>
            <div className="parents">
              <Link to="/poznej-srodici">Poznej hudbu s rodiči</Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
