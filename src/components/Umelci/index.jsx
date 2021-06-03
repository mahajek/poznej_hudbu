import React from 'react';
import './style.css';

import { Artists } from '../Artists';

export const Umelci = () => {
  const classic = [
    {
      label: 'Wolfgang Amadeus Mozart',
      picture: '../../assets/img/mozart.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Ludwig van Beethoven',
      picture: '../../assets/img/beethoven.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Bedřich Smetana',
      picture: '../../assets/img/smetana.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Antonín Dvořák',
      picture: '../../assets/img/dvorak.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
  ];
  const modern = [
    {
      label: 'Edith Piaf',
      picture: '../../assets/img/piaf.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Frank Sinatra',
      picture: '../../assets/img/sinatra.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Ella Fitzgerald',
      picture: '../../assets/img/ella.png',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Aretha Franklin',
      picture: '../../assets/img/aretha.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Elvis Presley',
      picture: '../../assets/img/presley.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Beatles',
      picture: '../../assets/img/beatles.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Michael Jackson',
      picture: '../../assets/img/jackson.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Queen',
      picture: '../../assets/img/queen.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Pink Floyd',
      picture: '../../assets/img/pinkfloyd.png',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Karel Gott',
      picture: '../../assets/img/gott.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Zdeněk Svěrák a Jaroslav Uhlíř',
      picture: '../../assets/img/sverakuhlir.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
    {
      label: 'Jaroslav Samson Lenk',
      picture: '../../assets/img/lenk.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
    },
  ];

  return (
    <div className="umelci">
      <p className="umelci__paragraph">Představitelé klasické hudby</p>
      <div className="umelci__classic">
        {classic.map((item) => (
          <Artists
            key={item.label}
            label={item.label}
            picture={item.picture}
            text={item.text}
          />
        ))}
      </div>
      <p className="umelci__paragraph">Představitelé moderní hudby</p>
      <div className="umelci__modern">
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
