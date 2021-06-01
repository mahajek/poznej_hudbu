import React from 'react';

export const Artists = (props) => {
  <div className="umelci__item">
    <p className="umelci__label">{props.label}</p>
    <img className="umelci__picture" src={props.picture} />
    <p className="umelci__text">{props.text} </p>
  </div>;
};

