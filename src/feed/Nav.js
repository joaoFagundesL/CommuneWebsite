import React from 'react';
import logo from '../Assets/Logo.svg';
import menu from '../Assets/HamburgerMenu.svg';

function Nav() {
  return (
    <div className='pt-14 flex justify-between'>
      <img className='cursor-pointer' src={logo} alt="Commune logo" />
      <img className='cursor-pointer' src={menu} alt="Menu logo" />
    </div>
);
}

export default Nav;