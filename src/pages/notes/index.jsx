import React from 'react';
import { render } from 'react-dom';
import './style.css';

import { Klavesy } from '../../components/Klavesy/index';

export const PageNotes = (
  <>
    <main>
      <div class="main-page">
        <h1>Poznej noty</h1>
        <div class="music-symbols"></div>
        <Klavesy />
      </div>
    </main>
  </>
);
