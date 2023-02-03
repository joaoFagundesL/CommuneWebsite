import React from 'react';
import logo from '../Assets/Logo.svg';
import menu from '../Assets/HamburgerMenu.svg';
import SecondButton from '../components/SecondButton';

const menuText = ['Features', 'Affiliates', 'Pricing', 'Communites'];

function Nav() {
  return (
    <div className='pt-14 flex justify-between'>
      <img src={logo} className='cursor-pointer' alt="" />

      <ul className='hidden xl:flex xl:gap-8 xl:items-center'>

        { menuText.map(text => (
          <li className='text-paragraphColor cursor-pointer'>{text}</li>
        ))}

        <li className=''>
          <SecondButton className='bg-button font-semibold cursor-pointer rounded-md py-4 px-6 text-white' text="Join Waitlist"/>
        </li>
      </ul>

      <img src={menu} className='cursor-pointer xl:hidden' alt="" />
    
    </div>
  );
}

export default Nav;