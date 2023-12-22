import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-5'>
      <div className='max-h-[500px] relative'>
        <div className=' absolute w-full h-full text-gray-200 text-center'>
          <h1 className='pt-6 text-xl'> Best<span className=' text-orange-300'> Style</span> </h1>
          <h1 className='pt-6 text-2xl'> Live <span className='text-orange-300'>Your Life</span></h1>
        </div>
        <img className='w-full max-h-[500px]' src='https://singhanias.in/cdn/shop/collections/4f787f63d1021eea91159dc842b3e957.jpg?v=1688999464' />
        
      </div>
    </div>
      
  )
}

export default Hero