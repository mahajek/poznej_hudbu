import React from 'react';
import './style.css';

export const Artists = (props) => {
  const { label, picture, text } = props;

  return (
    <div className="umelci__item">
      <p className="umelci__label">{label}</p>
      <div className="image">
        <img className="umelci__picture" src={picture} />
        <div className="image__overlay">
          <a href="https://www.youtube.com/watch?v=7Ifw8JhDBvs">
            <img
              className="image__icon"
              src="../../assets/img/iconmonstr-youtube-6-240.png"
              alt="youtube icon"
            />
          </a>
        </div>
      </div>
      <p className="umelci__text">{text} </p>
    </div>
  );
};
