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

  // const getData = () => {
  // };
  
  useEffect(() => {
 
    axios
      .get('https://fakestoreapi.com/products?limit=6')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className=" pt-32 ">
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
        <div className="flex gap-2 md:gap-4 lg:gap-6 justify-center items-center pt-8 px-2 md:px-8 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-opacity-70 bg-gray-900 hover:bg-[#660B7F] hover:text-white transition duration-300 shadow-sm rounded border border-[#660B7F] w-40 h-40 md:w-48 md:h-48 flex flex-col items-center cursor-pointer mb-2 hover:scale-105 ease-in-out hover:shadow-lg"
          >
            <div className="w-20 h-20 md:w-24 md:h-24">
          
            </div>
            <div className="text-center text-lg font-semibold mb-2">{product.title}</div>
          </div>
        ))}
      </div>
      
      )}
 <section className="py-10 md:py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 md:mx-10 bg-[#0C000F] text-white shadow-lg ">

    <div className="p-6 md:pt-10">
      <div>
        <p className="text-[#00FF66] font-bold text-lg md:text-xl">Categories</p>
      </div>
      <div className="pt-6">
        <h1 className="text-2xl md:text-5xl font-semibold ">Enhance Your <br /> Music Experience</h1>
      </div>
      <div className="flex items-center gap-3 pt-6">
        <img src={days} alt="Days" className="w-8 h-8 md:w-10 md:h-10" />
        <img src={hour} alt="Hours" className="w-8 h-8 md:w-10 md:h-10" />
        <img src={min} alt="Minutes" className="w-8 h-8 md:w-10 md:h-10" />
        <img src={sec} alt="Seconds" className="w-8 h-8 md:w-10 md:h-10" />
      </div>
      <div className="pt-6">
        <button className="bg-[#00FF66] hover:bg-[#4A0679] w-24 md:w-28 h-10 text-white rounded-lg shadow-lg transition duration-300 ease-in-out focus:outline-none">
          Buy Now
        </button>
      </div>
    </div>

    <div className="flex justify-center items-center">
      <div>
        <img src={jam} alt="Music Jam" className="max-h-40 md:max-h-full" />
      </div>
    </div>

  </div>
</section>



    </div>
  );
};

export default BestSelling;
