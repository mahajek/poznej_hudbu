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
          <h2>Proč je hudba v životě dětí důležita?</h2>
          <h3>
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
            id deserunt pariatur quasi fuga dignissimos quos esse ullam
            provident nam vel. Reprehenderit deleniti ea hic vitae iure sed
            temporibus? Quidem quis voluptate incidunt fugit cum, perspiciatis
            voluptates! Quibusdam, enim dolores libero impedit, accusamus a
            culpa amet reprehenderit, laboriosam iste modi. Nostrum, odio nisi
            corporis minima voluptas acc
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
