import React from 'react';
import './style.css';

import { Artists } from '../Artists';

// const Artists = (props) => {
//   <div className="umelci__item">
//     <p className="umelci__label">{props.label}</p>
//     <img className="umelci__picture" src={props.picture} />
//     <p className="umelci__text">{props.text} </p>
//   </div>;
// };

export const Umelci = () => {
  
  const classic = [
    {
      label: 'Wolfgang Amadeus Mozart',
      picture: '../../assets/img/mozart.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Ludwig van Beethoven',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Bedřich Smetana',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Antonín Dvořák',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
  ];
  const modern = [
    {
      label: 'Edith Piaf',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Mozart',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Mozart',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Mozart',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Edith Piaf',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Mozart',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Mozart',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Mozart',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
  ];

  return (
    <div className="umelci">
      <p className="umelci__section">Představitelé klasické hudby</p>
      <div>
        {classic.map((item) => (
          <Artists label={item.label} picture={item.picture} text={item.text} />
        ))}
      </div>
      <p className="umelci__section">Představitelé klasické hudby</p>
      <div>
        {modern.map((item) => (
          <Artists
            key={item.label}
            label={item.label}
            picture={item.picture}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};
