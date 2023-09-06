import React, {useState} from 'react'
import { close, logonegro, menu, logorutilans } from '../assets';
import {navLinks} from '../constants/index';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className='w-full flex py-8 justify-between sticky top-0 z-50'>
      <div className='gap-x-3 flex items-center'>
        <img src={logorutilans} alt="rutilans" className='w-[157px] h-[35px]'/>
        {/* <img src={logonegro} alt="rutilans" className='w-[50px] h-[50px]'/> */}
        {/* <h1 className='font-poppins text-[24px] font-semibold'>Rutilans</h1> */}
      </div> 
      <ul className='list-none sm:flex hidden justify-end items-center flex-1 text-black text-[14px]'>
        {navLinks.map((link, index) => (
          <li 
            key={link.id}
            className='pl-10 font-poppins'
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center cursor-pointer'      >
        <img 
          src={open ? close : menu}
          alt="menu"
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setOpen((prev) => !prev)}
        />
        <div className={`${open ? 'flex' : 'hidden'} sidebar p-6 bg-black absolute top-20 my-2 mx-4 min-w-[140px] rounded-lg`}>
        <ul 
          className='list-none flex flex-col justify-center items-center flex-1 text-black text-[14px] '
        >
          {navLinks.map((link, index) => (
            <li 
              key={link.id}
              className={`font-poppins text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
      </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar