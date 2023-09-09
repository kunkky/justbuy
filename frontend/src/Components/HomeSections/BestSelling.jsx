import React, { useState, useEffect } from 'react';
import axios from 'axios';
import rec from '../../Asset/rec.svg';
import jam from '../../Asset/jbl.svg'
import days from '../../Asset/days timer.svg'
import hour from '../../Asset/hour timer.svg'
import min from '../../Asset/min timer.svg'
import sec from '../../Asset/sec timer.svg'

import { Spin } from 'antd';

const BestSelling = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    axios
      .get('https://justbuy.onrender.com/api/v1/getBestSellingProducts')
      .then((response) => {
        setProducts(response.data.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };
  
  useEffect(() => {
    getData()
 
  }, []);

  return (
    <div className=" pt-20 ">
      <div className="flex flex-col md:flex-row gap-2 md:gap-2 items-center text-[#660B7F] px-4 md:px-8">
        <img src={rec} alt="" className="md:mr-2" />
        <h1 className="text-xl sm:text-xl font-semibold">This Month's Best Sellers</h1>
      </div>

      <div className="flex items-center justify-between px-4 md:px-8">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Best Selling Products</h1>
        </div>
        <div className="flex gap-3 pr-3">
          <button className="bg-[#660B7F] hover:bg-[#4A0679] w-24 h-8 rounded-md text-white shadow-lg transition duration-300 ease-in-out">
            View All
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center mt-4">
          <Spin size="large" />
        </div>
      ) : (
        <div className="flex  gap-2 md:gap-4 lg:gap-6 justify-center items-center pt-8 px-2 md:px-8 ">
        {products.slice(0,4).map((product) => (
          <div className='bg-opacity-70 bg-[#F5F5F5]  hover:bg-[#660B7F] hover:text-white transition duration-300 shadow-sm rounded border border-[#660B7F] w-[10rem] md:w-[12rem] flex flex-col cursor-pointer mb-2 hover:scale-105 ease-in-out hover:shadow-lg'>
         <div
         key={product.id}
         className=""
       >
         <div className="w-1/2 h-1/2 md:w-3/5 md:h-3/5 xl:w-4/5 xl:h-4/5">
          <img src={product.productImages} alt="" srcset="" />
         </div>
         </div>

    
         <div className=" text-lg md:text-sm lg:text-sm font-semibold mb-2">
           {product.productName}
         </div>

         <div className=' flex gap-3'> 
         <div>
          #{product.productPrice} 
        </div>
        <div>
          {product.discountRate}
        </div>
         </div>
         </div>
        
       
       
        ))}
      </div>
      
      )}
 <div className='min-h-screen pt-20 sm:pt-10 md:pt-10 lg:pt-10 flex items-center justify-center'>

  <section className=" bg-[#0C000F] container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 py-16">
    <div className="md:w-1/2 text-center md:text-left">
    <p className="text-xl mb-8 text-[#00FF66]">
        categories
      </p>
      <h1 className=" text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
        Enhance Your Music Experience
      </h1>
      <p className="text-xl mb-8 text-white">
        Explore a world of music with our premium service.
      </p>
      <div className="flex justify-center md:justify-start gap-4">
        <div className="text-center">
          <img src={days} alt="Days" className="w-12 h-12 md:w-10 md:h-10" />
        
        </div>
        <div className="text-center">
          <img src={hour} alt="Hours" className="w-12 h-12 md:w-10 md:h-10" />
       
        </div>
        <div className="text-center">
          <img src={min} alt="Minutes" className="w-12 h-12 md:w-10 md:h-10" />
     
        </div>
        <div className="text-center">
          <img src={sec} alt="Seconds" className="w-12 h-12 md:w-10 md:h-10" />
         
        </div>
      </div>
      <div className="mt-8">
        <button className=" text-white bg-[#00FF66] rounded shadow-sm w-32 hover:bg-purple-900 py-3 px-6  font-semibold transition duration-300 ease-in-out focus:outline-none">
          Buy Now
        </button>
      </div>
    </div>
    <div className="md:w-1/2">
      <img src={jam} alt="Music Jam" className="mx-auto max-w-full" />
    </div>
  </section>
 </div>





    </div>
  );
};

export default BestSelling;