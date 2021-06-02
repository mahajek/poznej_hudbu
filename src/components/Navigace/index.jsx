import React from 'react';
import { render } from 'react-dom';
import './style.css';

import { Link, NavLink } from 'react-router-dom';

export const Navigace = (props) => {
  return (
    <div className="navigace">
      <NavLink to="/" className="navigace__item navigace__item--notes">
        Domů
      </NavLink>
      <NavLink
        to="/poznej-noty"
        className="navigace__item navigace__item--notes"
        activeClassName="is-active"
      >
        Poznej noty
      </NavLink>

      <NavLink
        to="/poznej-pisnicky"
        className="navigace__item navigace__item--songs"
        activeClassName="is-active"
      >
        Poznej písničky
      </NavLink>

      <NavLink
        to="/poznej-nastroje"
        className="navigace__item navigace__item--instruments"
        activeClassName="is-active"
      >
        Poznej nástroje
      </NavLink>

      <NavLink
        to="/poznej-umelce"
        className="navigace__item navigace__item--composers"
        activeClassName="is-active"
      >
        Poznej umělce
      </NavLink>
    </div>
  );
};
