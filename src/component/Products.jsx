import React, { useState } from "react";
import { data } from "./data";
import vdo1 from "../assets/vdo01.mp4";

const Products = () => {
  const [produts, setProducts] = useState(data);
  // filter by category
  const filterProduct = (category) => {
    setProducts(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div className=" max-w-[1640px] m-auto px-4 py-12">
      <h1 className=" text-orange-500 font-bold text-4xl text-center">
        {" "}
        TOP Rated Products
      </h1>
      {/* filter row */}
      <div className=" flex flex-col lg:flex-row pt-10">
        {/* filter type */}
        <div>
          <div className=" flex justify-between space-x-4">
            <button
              onClick={() => setProducts(data)}
              className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              All
            </button>
            <button
              onClick={() => filterProduct("clothing")}
              className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Clothing
            </button>
            <button
              onClick={() => filterProduct("saree")}
              className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Saree
            </button>
            <button
              onClick={() => filterProduct("beauty")}
              className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Health & beauty
            </button>
            <button
              onClick={() => filterProduct("style")}
              className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Lifestyle
            </button>
            <button
              onClick={() => filterProduct("other")}
              className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Others
            </button>
          </div>
        </div>
      </div>
      {/* product display */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {produts.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg hover:scale-105 duration-300"
          >
            <img
              className=" w-full h-[200px] rounded-t-lg"
              src={item.image}
              alt={item.index}
            />
            <div>
              <p className="p-2 font-bold text-blue-950">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 duration-300">
        <div className='pt-10 items-center shadow-lg '>
          <video src={vdo1} className="rounded-lg h-[300px]" />
          <p className=" text-center p-2 font-bold text-blue-950">PLAY</p>
        </div>
      </div>
        
        
      
    </div>
  );
};

export default Products;
