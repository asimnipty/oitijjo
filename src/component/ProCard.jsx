import React from 'react'
import Products from './Products'
const ProCard = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-5 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
            <div className=' absolute w-full h-full rounded-xl text-white'>
                <p className='font-bold text-xl px-2 pt-4'> Clothing</p>
                <p className='px-2'> Item </p>
                <button className='border-white bg-white text-black mx-3 p-1 text-xl absolute bottom-4 rounded-md'> Order Now</button>
            </div>
            <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
            src="https://as2.ftcdn.net/v2/jpg/00/94/13/55/1000_F_94135525_YmKvyY9mmbvuDuHXil05gNtCtHp74m0S.jpg" alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div className=' absolute w-full h-full rounded-xl text-white'>
                <p className='font-bold text-xl px-2 pt-4'> Beauty </p>
                <p className='px-2'> Item</p>
                <button className='border-white bg-white text-black mx-3 p-1 text-xl absolute bottom-4 rounded-md'> Order Now</button>
            </div>
            <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
            src="https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        
        <div className='rounded-xl relative'>
            <div className=' absolute w-full h-full rounded-xl text-white'>
                <p className='font-bold text-xl px-2 pt-4'> Health </p>
                <p className='px-2'> Item </p>
                <button className='border-white bg-white text-black mx-3 p-1 text-xl absolute bottom-4 rounded-md'> Order Now</button>
            </div>
            <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
            src="https://images.pexels.com/photos/2377045/pexels-photo-2377045.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
    </div>
  )
}

export default ProCard