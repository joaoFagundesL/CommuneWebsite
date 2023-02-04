import React, { useState } from 'react';
import logo from '../Assets/Logo.svg';
import menu from '../Assets/HamburgerMenu.svg';
import SecondButton from '../components/SecondButton';

const menuText = ['Features', 'Affiliates', 'Pricing', 'Communites'];

const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='pt-14 flex justify-between'>
      <img src={logo} className='cursor-pointer' alt="" />

      <nav className={`
        ${menuOpen ? 'menu-nav opened bg-slate-500' : 'menu-nav bg-slate-500'}`}>

    <style>{`
     html, body {
      max-width: 100%;
      overflow-x: hidden;
  }
  
      .menu-nav.opened {
        transform: translateX(0%);
        transition: transform 350ms ease-in;
      }
      .menu-nav {
        display: flex;
        justify-content: center;
        position: absolute;
        transform: translateX(100%);
        inset: 0 0 0 30%;
        transition: transform 350ms ease-in;
      }

      @media screen and (min-width: 1280px) {
        .menu-nav {
          transform: translateX(0);
          inset: 0 0 0 0;
      }
    `}</style>

        <ul className={`xl:items-center xl:gap-8 xl:flex xl:flex-row xl:mt-0 ${menuOpen? 'flex gap-8 items-center flex-col mt-24' : 'hidden'}`}>

          { menuText.map((text, index) => (
            <li key={index} className={`cursor-pointer ${menuOpen ? 'text-white' : 'text-paragraphColor'}`}>{text}</li>
          ))}

          <li className=''>
            <SecondButton className='bg-button font-semibold cursor-pointer rounded-md py-4 px-6 text-white' text="Join Waitlist"/>
          </li>
        </ul>
      </nav>

      <img src={menu} onClick={ () => setMenuOpen(!menuOpen) } className={`${menuOpen ? 'z-50 absolute top-6 right-6' : ''}  cursor-pointer xl:hidden`} alt="menu logo" />
    
    </div>
  );
}

export default Nav;
