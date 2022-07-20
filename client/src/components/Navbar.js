import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            CABELELEILA
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Início
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/home'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Serviços
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/lista/agendamentos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Agendamentos
              </Link>
            </li>

            <li>
              <Link
                to='/'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sair
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Sair</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
