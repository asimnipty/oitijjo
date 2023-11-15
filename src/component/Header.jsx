import React from 'react';
import { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import yt from '../assets/icons/yt.png'
import fb from '../assets/icons/fb.png'
import ig from '../assets/icons/ig.png'
import cl from '../assets/icons/clo.png'
import b from '../assets/icons/b.png'
import sa from '../assets/icons/sa.png'
import t2 from '../assets/icons/t2.png'
import logo from '../assets/logo.jpeg'


const Header = () => {

  const [nav, setNav] = useState(false);

  return (
    <div className=' flex p-5 justify-between items-center'>
      <div  className='flex '>
        <AiOutlineMenu onClick={()=> setNav(!nav)} size={30} className=' cursor-pointer' />
        <img src={logo} className=' h-10 cursor-pointer pl-5' />
        <h1 className=' font-extrabold text-xl pl-5' > <span className=' text-red-700'>Life</span>Style </h1>

      </div>
      <div className='flex space-x-3'>
        <img src={yt} className=' h-6 cursor-pointer' />
        <img src={fb} className=' h-6 cursor-pointer' />
        <img src={ig} className=' h-6 cursor-pointer' />
      </div>
      {/* { nav ? <div className=' bg-blue-300 fixed w-full h-screen z-10 top-0 left-0'> </div> : ' '} */}
      
      {/* side menu */}
      
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white duration-300'}>
        <AiOutlineClose size={30} onClick={()=>setNav()} className=' absolute right-4 top-4 cursor-pointer'/>
        <div className='flex'>
          <img src={logo} className='pt-4 pl-5 h-12 cursor-pointer' />
          <h2 className=' font-extrabold text-xl pl-5 pt-4' > <span className=' text-red-700'>Life</span>Style </h2>
        </div>
        
        <nav> 
          <ul className='flex-col p-5 text-l font-bold text-gray-600'>
            <li className='flex py-6 items-center'> <img src={cl} className='h-6 mr-2' /> Trending</li> 
            <li className='flex py-6 items-center'> <img src={b} className='h-6 mr-2' /> Style</li> 
            <li className='flex py-6 items-center'> <img src={sa} className='h-6 mr-2' /> Beauty</li> 
            <li className='flex py-6 items-center'> <img src={t2} className='h-6 mr-2' /> Blog</li> 
            <li className='flex py-6 items-center'> <img src={cl} className='h-6 mr-2' /> Media</li> 
              
          </ul>
         </nav>       
      </div>
    </div>


  )
}

export default Header