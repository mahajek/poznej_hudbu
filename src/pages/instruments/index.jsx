import { render } from 'react-dom';
import './style.css';
import React, { useState } from 'react';

import { Nastroje } from '../../components/Nastroje';
import { Kviz } from '../../components/Kviz';
import { Navigace } from '../../components/Navigace';

export const Instruments = () => {
  const questions = [
    {
      questionText: 'Jaký nástroj je na obrázku?',
      obrazek: '../../assets/img/kviz_saxofon.jpg',
      answerOptions: [
        { answerText: 'Akustická kytara', isCorrect: false },
        { answerText: 'Flétna', isCorrect: false },
        { answerText: 'Harfa', isCorrect: false },
        { answerText: 'Saxofon', isCorrect: true },
      ],
    },
    {
      questionText: 'Pro jaký hudební žánr je typický mixážní pult?',
      answerOptions: [
        { answerText: 'Jazz', isCorrect: false },
        { answerText: 'Elektronická hudba', isCorrect: true },
        { answerText: 'Klasická hudba', isCorrect: false },
        { answerText: 'Heavy metal', isCorrect: false },
      ],
    },
    {
      questionText: 'Který nástroj v symfonickém orchestru nenajdeme?',
      answerOptions: [
        { answerText: 'Syntezátor', isCorrect: true },
        { answerText: 'Housle', isCorrect: false },
        { answerText: 'Hoboj', isCorrect: false },
        { answerText: 'Klavír', isCorrect: false },
      ],
    },
    {
      questionText: 'Do jaké skupiny nástrojů patří housle?',
      answerOptions: [
        { answerText: 'Dechové', isCorrect: false },
        { answerText: 'Bicí', isCorrect: false },
        { answerText: 'Samozvučné', isCorrect: false },
        { answerText: 'Strunné', isCorrect: true },
      ],
    },
  ];

  return (
    <>
      <main>
        <div className="main-page">
          <h1 className="main-page__nadpis">Poznej nástroje</h1>
          <Navigace />
          <Kviz otazky={questions} />
          <Nastroje />
        </div>
      </main>
    </>
  );
};
