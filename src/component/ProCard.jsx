import React, {useState} from 'react'
import {data} from './data'
import Products from './Products'
import b1 from '../assets/images/banner/b1.jpg'
import b2 from '../assets/images/banner/b2.jpg'
import b4 from '../assets/images/banner/b4.jpg'


const ProCard = () => {

  return (
    <div className='max-w-[1640px] mx-auto p-5 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
            <div className=' absolute w-full h-full rounded-xl text-white'>
                <p className='font-bold text-xl px-2 pt-4'> Clothing</p>
                <p className='px-2'> Item </p>
                <a href="https://www.facebook.com/shajunii?mibextid=ZbWKwL" target='_blank'>
                <button  className='border-white bg-white text-black mx-3 p-1 text-xl absolute bottom-4 rounded-md'> Order Now</button>
                </a>
            </div>
            <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
            src='https://www.shutterstock.com/image-photo/indian-traditional-clothes-saris-background-260nw-549956632.jpg' alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div className=' absolute w-full h-full rounded-xl text-white'>
                <p className='font-bold text-xl px-2 pt-4'> Beauty </p>
                <p className='px-2'> Item</p>
                <a href="https://www.facebook.com/shajunii?mibextid=ZbWKwL" target='_blank'>
                <button  className='border-white bg-white text-black mx-3 p-1 text-xl absolute bottom-4 rounded-md'> Order Now</button>
                </a>
            </div>
            <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
            src={b4} alt="" />
        </div>
        
        <div className='rounded-xl relative'>
            <div className=' absolute w-full h-full rounded-xl text-white'>
                <p className='font-bold text-xl px-2 pt-4'> Health </p>
                <p className='px-2'> Item </p>
                <a href="https://www.facebook.com/shajunii?mibextid=ZbWKwL" target='_blank'>
                <button  className='border-white bg-white text-black mx-3 p-1 text-xl absolute bottom-4 rounded-md'> Order Now</button>
                </a>
            </div>
            <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
            src={b2} alt="" />
        </div>
        
    </div>

  )
}


export default ProCard