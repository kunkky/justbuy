import React, { useState, useEffect } from 'react';
import rec from '../../Asset/rec.svg';
import leftArrow from '../../Asset/leftArrow.svg';
import rightArrow from '../../Asset/rightArrow.svg';
import Music from './Music';
import axios from 'axios';
import ReactStars from 'react-rating-stars-component';
import {useNavigate} from "react-router-dom"

const GeneralProduct = () => {
  const [allProduct, setallProuduct] = useState([]);
  const navigate = useNavigate();

  const getAllItems = () => {
    axios.get('https://justbuy.onrender.com/api/v1/getAllProducts').then((response) => {
      setallProuduct(response.data.data);
    });
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <div className='flex flex-col '>
      <Music />
      <div className='pt-10 flex flex-col md:flex-row gap-2 md:gap-2 items-center text-[#660B7F] px-4 md:px-8'>
        <img src={rec} alt='' className='md:mr-2' />
        <h1 className='text-xl sm:text-xl'>Our Products</h1>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-between px-4 md:px-8'>
        <div>
          <h1 className='text-xl sm:text-2xl font-bold'>Explore Our Products</h1>
        </div>
        <div className='flex gap-3 pr-3'>
          <img src={leftArrow} alt='' />
          <img src={rightArrow} alt='' />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid gap-5 px-2 md:px-8 pt-10'>
        {allProduct.slice(0, 8).map((product) => (
          <div
            key={product.id}
            className=' p-2  p-4 shadow-md rounded-md hover:bg-[purple] hover:text-white transition duration-300 hover:scale-110 ease-in-out '
          >
            <div className=' flex items-center justify-center object-cover'>
              <img src={product.productImages} alt={product.productName} srcSet='' className='' />
            </div>
            <div className=' font-semibold'>{product.productName}</div>
            <div className='flex items-center gap-4 justify-between text-xl text-[green] font-bold'>
              ${product.productPrice} <ReactStars count={3} size={20} activeColor='#ffd700'  value={product.prodcutRating} edit={false}/>
            </div>
            <div className=' font-medium'>Item sold: {product.numberSold}</div>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center pt-10'>
        <button className='text-white bg-[purple] rounded shadow-sm w-23 hover:bg-purple-900 py-3 px-6 font-semibold transition duration-300 ease-in-out focus:outline-none' onClick={()=>navigate("/allProducts")}>
          View All Products
        </button>
      </div>
    </div>
  );
};

export default GeneralProduct;
