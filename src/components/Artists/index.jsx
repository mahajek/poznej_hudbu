import React from 'react';

export const Artists = (props) => {
  const { label, picture, text } = props;

  return (
    <div className="umelci__item">
      <p className="umelci__label">{label}</p>
      <img className="umelci__picture" src={picture} />
      <p className="umelci__text">{text} </p>
    </div>
  );
};
