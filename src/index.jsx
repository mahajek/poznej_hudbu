import React from 'react';
import { render } from 'react-dom';
import './style.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { PageHome } from './pages/home/index';
import { PageNotes } from './pages/notes/index';
import { PageInstruments } from './pages/instruments/index';
import { PageComposers } from './pages/composers/index';
import { PageParents } from './pages/parents/index';

const App = () => (
  <>
    <div className="wrap">
      <Router>
        <div>
          <Switch>
            <Route path="/poznej-noty">
              <PageNotes />
            </Route>
            <Route path="/poznej-nastroje">
              <PageInstruments />
            </Route>
            <Route path="/poznej-skladatele">
              <PageComposers />
            </Route>
            <Route path="/poznej-srodici">
              <PageParents />
            </Route>
            <Route path="/">
              <PageHome />
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
