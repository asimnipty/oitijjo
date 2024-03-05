import React, {useState} from 'react'
import { data } from './data'

const Products = () => {
  
  const [produts, setProducts] = useState(data)
  
  return (
    <div className=' max-w-[1640px] m-auto px-4 py-12'>
      <h1 className=' text-orange-500 font-bold text-4xl text-center'> TOP Rated Products</h1>
        {/* filter row */}
      <div className=' flex flex-col lg:flex-row'>
        {/* filter type */}
        <div>
          <p className='font-bold text-gray-700'> Filter type</p>
          <div className=' flex justify-between space-x-4'>
            <button className='m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>All</button>
            <button className='m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Clothing</button>
            <button className='m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Health & beauty</button>
            <button className='m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Lifestyle</button>
            <button className='m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Others</button>
          </div>
        </div>
      </div>
      {/* product display */}
      <div>
        {produts.map((saj, index)=> (
          <div>
            <img src={saj.image} alt={saj.index}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products