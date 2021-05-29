import React from 'react';
import { render } from 'react-dom';
import './style.css';

export const PageHome = (
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
          adipisicing elit. Amet ipsam minus natus accusantium quis praesentium
          quod ab quidem. Sapiente sunt praesentium quia facere pariatur ipsa
          molestias nesciunt veniam ad dolorum?
        </h3>
        <section>
          <div className="note">
            <a href="note.html">Poznej noty</a>
          </div>
          <div className="instruments">
            <a href="instruments.html">Poznej nástroje</a>
          </div>
          <div className="composer">
            <a href="composer.html">Poznej skladatele</a>
          </div>
          <div className="livemusic">
            <a href="livemusic.html">Poznej hudbu s rodiči</a>
          </div>
        </section>
      </div>
    </main>
    <footer>Pavla Varechová & Markéta Hájková. 2021</footer>
  </>
);

