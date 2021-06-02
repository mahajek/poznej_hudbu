import React from 'react';

export const Artists = (props) => {
  <div className="umelci__item">
    <p className="umelci__label">{props.otazky.label}</p>
    <img className="umelci__picture" src={props.otazky.picture} />
    <p className="umelci__text">{props.otazky.text} </p>
  </div>;
};

