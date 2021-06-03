import React from 'react';
import { render } from 'react-dom';
import './style.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home/index';
import { Notes } from './pages/Notes/index';
import { PoznejPisnicky } from './pages/PoznejPisnicky/index';
import { Instruments } from './pages/Instruments/index';
import { Composers } from './pages/Composers/index';

const App = () => (
  <>
    <div className="wrap">
      <Router>
        <div>
          <Switch>
            <Route path="/poznej-noty">
              <Notes />
            </Route>
            <Route path="/poznej-pisnicky">
              <PoznejPisnicky />
            </Route>
            <Route path="/poznej-nastroje">
              <Instruments nadpis="Poznej nástroje" />
            </Route>
            <Route path="/poznej-umelce">
              <Composers />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
    <footer className="footer">
      Pavla Varechová &amp; Markéta Hájková. 2021
    </footer>
  </>
);

render(<App />, document.querySelector('#app'));
