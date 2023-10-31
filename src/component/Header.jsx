import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import yt from '../assets/icons/yt.png'
import fb from '../assets/icons/fb.png'
import ig from '../assets/icons/ig.png'


const Header = () => {
  return (
    <div className=' flex p-5 top-0 justify-between'>
      <div className='flex '>
        <AiOutlineMenu size={30} />
        <h1 className=' font-extrabold text-xl pl-5 pb-5' > <span className=' text-red-700'>Life</span>Style </h1>

      </div>
      <div className='flex space-x-2'>
        <img src={yt} className=' h-6' />
        <img src={fb} className=' h-6' />
        <img src={ig} className=' h-6' />
        
      </div>
      
    </div>


  )
}

export default Header