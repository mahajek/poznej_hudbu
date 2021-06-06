import React from 'react';

import { Artists } from '../Artists';

export const Umelci = () => {
  const classic = [
    {
      label: 'Wolfgang Amadeus Mozart',
      picture: '../../assets/img/mozart.jpg',
      text: 'Všeobecně známý jako hudební génius. Žil v druhé polovině 18. století a věnoval se hudbě od dětství. Život prožil převážně ve Vídni, ale nějaký čas strávil i v Praze. Těžko lze jmenovat jedno stěžejní dílo, je jich spousta, za zmínku stojí určitě Requiem, který, bohužel, nedokončil.',
      odkaz: 'https://www.youtube.com/watch?v=LDBmGj9xxpM',
    },
    {
      label: 'Ludwig van Beethoven',
      picture: '../../assets/img/beethoven.jpg',
      text: 'Život prožil převážně ve Vídni, pobýval ale i v Čechách. Byl současníkem Mozarta. Mezi jeho nejznámější skladby patří “Pro Elišku”, “Óda na radost” nebo “Měsíční svit”. Ke konci života úplně ohluchl.',
      odkaz: 'https://www.youtube.com/watch?v=jv2WJMVPQi8',
    },
    {
      label: 'Bedřich Smetana',
      picture: '../../assets/img/smetana.jpg',
      text: 'Označován za zakladatele české národní hudby. Žil v 19. století. Stejně jako Beethoven úplně ohluchl. Jeho nejznámější dílo je opera Prodaná nevěsta a symfonické sbírky Má vlast.',
      odkaz: 'https://www.youtube.com/watch?v=fr1uq4PHGks',
    },
    {
      label: 'Antonín Dvořák',
      picture: '../../assets/img/dvorak.jpg',
      text: 'Nejvýznamnější český skladatel, v zahraničí vůbec nejhranější. Žil ke konci 19. století. Nejznámější díla jsou Rusalka, Slovanské tance, 9. symfonie - “Novosvětská”.',
      odkaz: 'https://www.youtube.com/watch?v=2JIt6AawwD8',
    },
  ];
  const modern = [
    {
      label: 'Edith Piaf',
      picture: '../../assets/img/piaf.jpg',
      text: 'Světoznámá představitelka francouzského chansonu (doslovný překlad je “píseň”) s nezaměnitelným výrazem a hlasem. “Je ne regrette rien” je určitě její nejznámější píseň.',
      odkaz: 'https://www.youtube.com/watch?v=Q3Kvu6Kgp88',
    },
    {
      label: 'Frank Sinatra',
      picture: '../../assets/img/sinatra.jpg',
      text: 'Americký představitel jazzu, swingu, ale i popu. Držitel několika cen Grammy i Oscara. Měl skvělý přednes a hlas. Píseň “New York, New York” je určitě jednou z nejznámějších.',
      odkaz: 'https://www.youtube.com/watch?v=4ZlZ02EuPpo',
    },
    {
      label: 'Ella Fitzgerald',
      picture: '../../assets/img/ella.png',
      text: '“The First Lady of Song”. Americká ikona jazzu, která spolupracovala se všemi nejznámějšími představiteli jazzu. Patřila více jak půl století mezi nejpopulárnější jazzové zpěvačky. Výrazně se zapsala do historie americké hudby.',
      odkaz: 'https://www.youtube.com/watch?v=myRc-3oF1d0',
    },
    {
      label: 'Aretha Franklin',
      picture: '../../assets/img/aretha.jpg',
      text: '“Queen of Soul”, hlavní představitelka soulu, držitelka 18 cen Grammy. Pro mnohé současné zpěvačky je velkým vzorem.',
      odkaz: 'https://www.youtube.com/watch?v=7Ifw8JhDBvs',
    },
    {
      label: 'Elvis Presley',
      picture: '../../assets/img/presley.jpg',
      text: 'Žil v Memphisu v USA. Označován jako “Král rock and rollu”. Skloubil blues, spirituál a country. Překonal mnoho rekordů v prodeji desek. Byl také známý svými extravagantními kostýmy.',
      odkaz: 'https://www.youtube.com/watch?v=gj0Rz-uP4Mk',
    },
    {
      label: 'Beatles',
      picture: '../../assets/img/beatles.jpg',
      text: 'Britská rocková kapela považována za jednu z nejlepších v historii hudby. Je to nejvíce prodávaná kapela v historii hudby. Je ceněná především pro své inovace v hudbě.',
      odkaz: 'https://www.youtube.com/watch?v=srwxJUXPHvE',
    },
    {
      label: 'Michael Jackson',
      picture: '../../assets/img/jackson.jpg',
      text: '“King of Pop”, snad největší ikona populární hudby. Vnesl do hudby i do tance spoustu nových prvků. Byl jedním z prvních, co natáčeli skutečné hudební klipy. Jeho hudba je absolutně nadčasová a unikátní.',
      odkaz: 'https://www.youtube.com/watch?v=g3t9-kf7ZNA',
    },
    {
      label: 'Queen',
      picture: '../../assets/img/queen.jpg',
      text: 'V čele s Freddiem Mercurym, jedním z nejlepších zpěváků vůbec. Úspěšná až do dnešních dnů. Kombinuje rock, pop, ale i disco. Charakteristická je například skladba “Bohemian Rhapsody”.',
      odkaz: 'https://www.youtube.com/watch?v=HgzGwKwLmgM',
    },
    {
      label: 'Iveta Bartošová',
      picture: '../../assets/img/bartosova.jpg',
      text: 'Zlatá slavice, spolupracovala s Ladislavem Štaidlem i Karlem Svobodou. Na jeho hudbu nazpívala píseň “Tři oříšky”.',
      odkaz: 'https://www.youtube.com/watch?v=FB7_c0MnbX8',
    },
    {
      label: 'Karel Gott',
      picture: '../../assets/img/gott.jpg',
      text: 'Náš nejznámější zpěvák, kombinoval spoustu hudebních žánrů, včetně jazzu, swingu, popu, ale i country a blues. Jako jeden z mála českých umělců byl úspěšný i v zahraničí.',
      odkaz: 'https://www.youtube.com/watch?v=158aKdnWr7s',
    },
    {
      label: 'Zdeněk Svěrák a Jaroslav Uhlíř',
      picture: '../../assets/img/sverakuhlir.JPG',
      text: 'Skladatelská dvojice, známá pro svou “Hodinu zpěvu”, ale také filmovou hudbu. Například pro film “Vratné láhve” nebo pohádku “Tři veteráni”.',
      odkaz: 'https://www.youtube.com/watch?v=9YWcQRKNyjM',
    },
    {
      label: 'Jaroslav Samson Lenk',
      picture: '../../assets/img/lenk.JPG',
      text: 'Folkový písničkář hrající také s Vlastou Redlem. Složil hudbu i k několika Večerníčkům. Držitel několika zlatých a platinových desek.',
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
