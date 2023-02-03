import React from 'react';
import logo from '../Assets/Logo.svg';
import menu from '../Assets/HamburgerMenu.svg';

const icons = [
  {src: logo, alt: 'logo commune'},
  {src: menu, alt: 'logo menu'},
];

function Nav() {
  return (
    <div className='pt-14 flex justify-between'>
  
    {icons.map(({src, alt}) => (
      <img key={src} className='cursor-pointer' src={src} alt={alt} />
    ))}
    </div>
);
}

export default Nav;