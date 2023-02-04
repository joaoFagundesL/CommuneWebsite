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

      <nav className={`xl:flex xl:static xl:bg-inherit xl:translate-x-0 xl:min-h-0
        ${menuOpen 
        ? 'flex justify-center absolute top-0 left-2/4 bottom-0 right-0 bg-slate-500 translate-x-0 transition-transform' 
        :  ' flex justify-center absolute top-0 left-2/4 bottom-0 right-0 bg-slate-500 translate-x-full transition-transform'}`}> 


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