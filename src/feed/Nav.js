import React from 'react';
import logo from '../Assets/Logo.svg';
import menu from '../Assets/HamburgerMenu.svg';

function Nav() {
  return (
    <div className='pt-14 flex justify-between'>
      <img src={logo} className='cursor-pointer' alt="" />

      <ul className='hidden xl:flex xl:gap-8 xl:items-center'>
        <li className='text-paragraphColor cursor-pointer'>Features</li>
        <li className='text-paragraphColor cursor-pointer'>Affiliates</li>
        <li className='text-paragraphColor cursor-pointer'>Princing</li>
        <li className='text-paragraphColor cursor-pointer'>Communites</li>
        <li className='bg-button font-semibold cursor-pointer rounded-md py-4 px-6 text-white'>Join Waitlist</li>
      </ul>

      <img src={menu} className='cursor-pointer xl:hidden' alt="" />
    
    </div>
);
}

export default Nav;