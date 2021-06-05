import React from 'react';


import { Artists } from '../Artists';

export const Umelci = () => {
  const classic = [
    {
      label: 'Wolfgang Amadeus Mozart',
      picture: '../../assets/img/mozart.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
      odkaz: 'https://www.youtube.com/watch?v=LDBmGj9xxpM',
    },
    {
      label: 'Ludwig van Beethoven',
      picture: '../../assets/img/beethoven.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
      odkaz: 'https://www.youtube.com/watch?v=jv2WJMVPQi8',
    },
    {
      label: 'Bedřich Smetana',
      picture: '../../assets/img/smetana.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
      odkaz: 'https://www.youtube.com/watch?v=fr1uq4PHGks',
    },
    {
      label: 'Antonín Dvořák',
      picture: '../../assets/img/dvorak.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
      odkaz: 'https://www.youtube.com/watch?v=2JIt6AawwD8',
    },
  ];
  const modern = [
    {
      label: 'Edith Piaf',
      picture: '../../assets/img/piaf.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
      odkaz: 'https://www.youtube.com/watch?v=Q3Kvu6Kgp88',
    },
    {
      label: 'Frank Sinatra',
      picture: '../../assets/img/sinatra.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
      odkaz: 'https://www.youtube.com/watch?v=4ZlZ02EuPpo',
    },
    {
      label: 'Ella Fitzgerald',
      picture: '../../assets/img/ella.png',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
      odkaz: 'https://www.youtube.com/watch?v=myRc-3oF1d0',
    },
    {
      label: 'Aretha Franklin',
      picture: '../../assets/img/aretha.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
      odkaz: 'https://www.youtube.com/watch?v=7Ifw8JhDBvs',
    },
    {
      label: 'Elvis Presley',
      picture: '../../assets/img/presley.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
      odkaz: 'https://www.youtube.com/watch?v=gj0Rz-uP4Mk',
    },
    {
      label: 'Beatles',
      picture: '../../assets/img/beatles.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
      odkaz: 'https://www.youtube.com/watch?v=srwxJUXPHvE',
    },
    {
      label: 'Michael Jackson',
      picture: '../../assets/img/jackson.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
      odkaz: 'https://www.youtube.com/watch?v=g3t9-kf7ZNA',
    },
    {
      label: 'Queen',
      picture: '../../assets/img/queen.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
      odkaz: 'https://www.youtube.com/watch?v=HgzGwKwLmgM',
    },
    {
      label: 'Pink Floyd',
      picture: '../../assets/img/pinkfloyd.png',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
      odkaz: 'https://www.youtube.com/watch?v=jv2WJMVPQi8',
    },
    {
      label: 'Karel Gott',
      picture: '../../assets/img/gott.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
      odkaz: 'https://www.youtube.com/watch?v=158aKdnWr7s',
    },
    {
      label: 'Zdeněk Svěrák a Jaroslav Uhlíř',
      picture: '../../assets/img/sverakuhlir.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
      odkaz: 'https://www.youtube.com/watch?v=9YWcQRKNyjM',
    },
    {
      label: 'Jaroslav Samson Lenk',
      picture: '../../assets/img/lenk.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odioLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos quis voluptas eligendi excepturi odio.',
      odkaz: 'https://www.youtube.com/watch?v=1f54CYTpDp4',
    },
  ];

  return (
    <div className="umelci">
      <p className="umelci__nadpis">Představitelé klasické hudby</p>
      <div className="umelci__classic">
        {classic.map((item) => (
          <Artists
            key={item.label}
            label={item.label}
            picture={item.picture}
            text={item.text}
            odkaz={item.odkaz}
          />
        ))}
      </div>
      <p className="umelci__nadpis">Představitelé moderní hudby</p>
      <div className="umelci__modern">
        {modern.map((item) => (
          <Artists
            key={item.label}
            label={item.label}
            picture={item.picture}
            text={item.text}
            odkaz={item.odkaz}
          />
        ))}
      </div>
    </div>
  );
};
