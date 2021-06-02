import React, { useState } from 'react';
import './style.css';

// ovčáci čtveráci '&=0=R=T=V=:!=R=T=V=:!=D=D=C=U=S=9!=D=D=C=U=S=9!=T=S=R=:.
// oda na radost '&=0T=T=U=V!=V=U=T=S!=R=R=S=T!=T´=C=S=!=T=T=U=V!=V=U=T=S!=R=R=S=T!=S³=B=R=.


export const Nota = (props) => {
  const [zahraj, setZahraj] = useState('');

  const { nazev, spravne } = props;

  const changeClass = () => {
    if (spravne) {
      return 'nota--spravne';
    }
    return 'nota';
  };

  const vypisNotu = () => {
    if (nazev === '&') {
      return "'&=0";
    }
    if (nazev === 'C') {
      return 'R=';
    }
    if (nazev === 'D') {
      return 'S=';
    }
    if (nazev === 'E') {
      return 'T=';
    }
    if (nazev === 'F') {
      return 'U=';
    }
    if (nazev === 'G') {
      return 'V=';
    }
    if (nazev === 'E1/8') {
      return 'D=';
    }
    if (nazev === 'D1/8') {
      return 'C=';
    }
    if (nazev === '!') {
      return '!=';
    }
    if (nazev === ':') {
      return ':';
    }
    if (nazev === '.') {
      return '.';
    }
    if (nazev === '9') {
      return '9';
    }
    return '';
  };

  return <div className={changeClass()}>{vypisNotu()}</div>;
};
