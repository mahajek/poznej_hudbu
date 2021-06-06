import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

import { Klavesy } from '../../components/Klavesy';
import { Kviz } from '../../components/Kviz';
import { Navigace } from '../../components/Navigace';

export const Notes = () => {
  const questions = [
    {
      questionText: 'Na kolik dob se počítá nota půlová?',
      answerOptions: [
        { answerText: 'Na čtyři doby', isCorrect: false },
        { answerText: 'Na tři doby', isCorrect: false },
        { answerText: 'Na dvě doby', isCorrect: true },
        { answerText: 'Na jednu dobu', isCorrect: false },
      ],
    },
    {
      questionText: 'Jakým tónem začíná stupnice C dur?',
      answerOptions: [
        { answerText: 'Tónem H', isCorrect: false },
        { answerText: 'Tónem C', isCorrect: true },
        { answerText: 'Tónem G', isCorrect: false },
        { answerText: 'Tónem D', isCorrect: false },
      ],
    },
    {
      questionText: 'Jaká nota je na obrázku?',
      obrazek: '../../assets/img/kviz_nota_e.png',
      answerOptions: [
        { answerText: 'Nota E', isCorrect: true },
        { answerText: 'Nota A', isCorrect: false },
        { answerText: 'Nota C', isCorrect: false },
        { answerText: 'Nota D', isCorrect: false },
      ],
    },
    {
      questionText: 'Jaká pomlka je na obrázku?',
      obrazek: '../../assets/img/kviz_pomlka_pulova.png',
      answerOptions: [
        { answerText: 'Pomlka půlová', isCorrect: true },
        { answerText: 'Pomlka celá', isCorrect: false },
        { answerText: 'Pomlka čtvrťová', isCorrect: false },
        { answerText: 'Pomlka osminová', isCorrect: false },
      ],
    },
  ];

  return (
    <>
      <main>
        <div className="main-page">
          <div className="main-page__navigace">
            <h1 className="main-page__nadpis">Poznej noty</h1>
            <Navigace />
          </div>
          <div className="main-page__notes">
            <div>
              <Klavesy className="klavesy__notes" />
              <div className="notes__text">
                My jsme noty, těší nás. Vypadáme různě a podle toho, jestli máme
                plné bříško nebo ne, se ozýváme. S prázdným bříškem zpíváme
                dlouho, s plným je náš zpěv o něco kratší. Řadíme se různě za
                sebou a tak vznikají písničky. Mezi sebou máme i své kamarádky -
                pomlky. Když se mezi nás zařadí, je chvíli ticho. Ale to nám
                nevadí, my pak zpíváme dál.{' '}
              </div>
              <div className="prehled-not">
                <img src="../../assets/img/prehled_not.png" alt="Přehled not" />
              </div>
            </div>
            <Kviz otazky={questions} />
          </div>
        </div>
      </main>
    </>
  );
};
