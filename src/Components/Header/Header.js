import React from 'react'
import './Header.css'
import logo from '../../assets/Logo name.svg';
import menu from '../../assets/icons8-menu-250.png';
import { useState } from 'react';
import close from '../../assets/Group 3439.png';

const Header = () => {

  const [Menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!Menu);
  }

  return (
    <div className='flex justify-center items-center py-4'>
      <div className='hidden lg:flex justify-center items-center gap-16'>
        <a className='w-20 text-center cursor-pointer hover:text-[#7880FE]'>Home</a>
        <a className='w-20 text-center cursor-pointer hover:text-[#7880FE]'>About me</a>
        <img className='' src={logo} alt='logo' />
        <a className='w-20 text-center cursor-pointer hover:text-[#7880FE]'>Work</a>
        <a className='w-20 text-center cursor-pointer hover:text-[#7880FE]'>Contact</a>
      </div>

      <div onClick={handleMenu} className='absolute z-10 cursor-pointer'>
        {
          !Menu ? <img className='w-10 fixed top-10 right-10 lg:hidden text-white' src={menu} alt='' /> : <img className='w-10 fixed top-10 right-10 lg:hidden' src={close} alt='' />

        }
      </div>
      <div className='block lg:hidden'>
        <div className={!Menu ? 'fixed top-0 h-full w-[60%] left-[-100%] ease-in-out duration-700' : 'fixed left-0 top-0 w-[60%] h-full bg-indigo-900 ease-in-out duration-700 '}>
          <ul className='pt-20 text-center' >
            <li className='p-4 font-light transition duration-500 ease-out hover:ease-in cursor-pointer'>Home</li>
            <li className='p-4 font-light transition duration-500 ease-out hover:ease-in cursor-pointer'>About me</li>
            <li className='p-4 font-light transition duration-500 ease-out hover:ease-in cursor-pointer'>Work</li>
            <li className='p-4 font-light transition duration-500 ease-out hover:ease-in cursor-pointer'>Contact</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Header