import React, { useState } from 'react';
import logo from '../Assets/Logo.svg';
import menu from '../Assets/HamburgerMenu.svg';
import SecondButton from '../components/SecondButton';
import styles from '../styles/Nav.component.css'

const menuText = ['Features', 'Affiliates', 'Pricing', 'Communites'];

const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='pt-14 flex justify-between'>
      <img src={logo} className='cursor-pointer' alt="" />

      <nav className={`${styles.menuNav}
        ${menuOpen ? styles.opened : ''}`}>


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
