import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Veja alguns de nossos trabalhos!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/cabeleleira.jpg'
              text='A própria leila cabeleleira para deixar seu cabelo dislumbrante!'
              label='Cabelos'
              path='/'
            />
            <CardItem
              src='images/manicure.webp'
              text='Manicure para deixar seus mãos prontas para um dia especial!'
              label='Manicure'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pedicure.jpg'
              text='Pedicure para deixar seus pés prontas para um dia especial!'
              label='Pedicure'
              path='/'
            />
            <CardItem
              src='images/massagem.jpg'
              text='Massagem com nossa melhor massagista para relaxar e renovar seu corpo!'
              label='Massagem'
              path='/'
            />
            <CardItem
              src='images/depilacao.jpg'
              text='Depilação para te deixar mais confiante!'
              label='Depilação'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
