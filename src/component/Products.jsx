import React, {useState} from 'react'
import { data } from './data'

const Products = () => {
  
  const [produts, setProducts] = useState(data);
  // filter by category
  const filterProduct = (category) => {
    setProducts(
      data.filter((saj) => {
        return saj.category === category;
      })
    );
  };

  
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
            <button className='m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Saree</button>
            <button className='m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Health & beauty</button>
            <button className='m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Lifestyle</button>
            <button className='m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Others</button>
          </div>
        </div>
      </div>
      {/* product display */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {produts.map((item, index)=> (
          <div key={index} className='border rounded-lg shadow-lg hover:scale-105 duration-300'>
            <img className=' w-full h-[200px] rounded-t-lg' src={item.image} alt={item.index}/>
            <div>
              <p className='p-2 font-bold text-blue-950'>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products