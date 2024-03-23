import React from 'react'
import b3 from '../assets/images/banner/b3.jpg'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-5'>
      <div className='max-h-[500px] relative'>
        <div className=' absolute w-full h-full text-white text-center'>
          <h1 className='pt-6 text-3xl'> Best<span className='text-black'> Style</span> </h1>
          <h1 className='pt-6 text-4xl'> Live <span className='text-black'>Your Life</span></h1>
        </div>
        <img className='w-full max-h-[500px] rounded-md' src={b3} />
        
      </div>
    </div>
      
  )
}

export default Hero