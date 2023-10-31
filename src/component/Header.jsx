import React from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import yt from '../assets/icons/yt.png'
import fb from '../assets/icons/fb.png'
import ig from '../assets/icons/ig.png'
import cl from '../assets/icons/clo.png'
import b from '../assets/icons/b.png'
import sa from '../assets/icons/sa.png'
import t2 from '../assets/icons/t2.png'


const Header = () => {
  return (
    <div className=' flex p-5 justify-between items-center'>
      <div className='flex'>
        <AiOutlineMenu size={30} />
        <h1 className=' font-extrabold text-xl pl-5' > <span className=' text-red-700'>Life</span>Style </h1>

      </div>
      <div className='flex space-x-2'>
        <img src={yt} className=' h-6' />
        <img src={fb} className=' h-6' />
        <img src={ig} className=' h-6' />
        
      </div>
        <div className='fixed top-0 left-0 w-[300px] h-screen bg-white duration-300'>
        <AiOutlineClose size={30} className=' absolute right-4 top-4'/>
        <h2 className=' font-extrabold text-xl pl-5 pt-4' > <span className=' text-red-700'>Life</span>Style </h2>
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