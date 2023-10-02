import React, { useState, useEffect } from 'react';
import axios from 'axios';
import rec from '../../Asset/rec.svg';
import jam from '../../Components/Assets/speaker.png'
// import days from '../../Asset/days timer.svg'
// import hour from '../../Asset/hour timer.svg'
// import min from '../../Asset/min timer.svg'
// import sec from '../../Asset/sec timer.svg'

import { Spin } from 'antd';

const BestSelling = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    axios
      .get("https: justbuy.onrender.com/api/v1/getBestSellingProducts")
      .then((response) => {
        setProducts(response.data.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
<>
    <div className="h-screen">
      <div className="flex flex-col md:flex-row gap-2 md:gap-2 items-center text-[#660B7F] px-4 md:px-8">
        <img src={rec} alt="" className="md:mr-2" />
        <h1 className="text-lg md:text-xl font-semibold">
          This Month's Best Sellers
        </h1>
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
        <div className=" flex flex-wrap gap-2 md:gap-4 lg:gap-6 justify-center items-center pt-8 px-2 md:px-8">
          {products.slice(0, 4).map((product) => (
            <div
              className="bg-opacity-70 bg-[#F5F5F5]  hover:bg-[#660B7F] hover:text-white transition duration-300 shadow-sm rounded border border-[#660B7F] w-[10rem] md:w-[12rem] flex flex-col cursor-pointer mb-2 hover:scale-105 ease-in-out hover:shadow-lg"
              key={product.id}
            >
              <div className=" flex justify-center items-center w-1/2 h-1/2 md:w-3/5 md:h-3/5 xl:w-4/5 xl:h-4/5 ">
                <img src={product.productImages} alt="" srcSet="" />
              </div>

         <div className="text-center text-lg md:text-sm lg:text-sm font-semibold mb-2">
           {product.productName}
         </div>
         <div> 
         price : {product.productPrice}
         </div>
         </div>
        
       
       
        ))}
      </div>
      
      )}
    </div>
    <div className="md:w-1/2">
      <img src={jam} alt="Music Jam" className="mx-auto max-w-full" />
    </div>




     </>
    );
  };

export default BestSelling;