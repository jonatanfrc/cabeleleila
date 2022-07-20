import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';


function HeroSection() {

  let navigate = useNavigate();

  const goCadastrarAgendamento = () => {
    navigate('/cadastrar/agendamentos')
  }
  
  return (
    <div className='hero-container'>
      <img src='/videos/cabeleireira-leila.gif' autoPlay loop muted />
      <h1>BEM VINDA(O)</h1>
      <p>Pronta pra ficar linda(o)?</p>
      <div className='hero-btns'>
        <button
          className='btnAgendamento'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={goCadastrarAgendamento}
        >
          Agende seu horário!
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
