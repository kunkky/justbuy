import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Rate, Spin } from 'antd';
import ReactStars from 'react-rating-stars-component';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {

    axios
      .get('https://justbuy.onrender.com/api/v1/getAllProducts')
      .then((response) => {
        setProducts(response.data.data);
        setLoading(false); 
      })
      .catch((error) => {

        console.error('Error fetching data:', error);
        setLoading(false); 
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">All Products</h1>
      <Spin spinning={loading} tip="Loading..." size='large'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-md p-4 hover:bg-[purple] hover:scale-105 ease-in-out hover:shadow-lg hover:text-white transition duration-300 shadow-sm rounded border">
              <img src={product.productImages} alt={product.productName} className="w-full object-cover" />
              <h2 className="text-lg font-semibold mt-2">{product.productName}</h2>
              <p className="text-gray-600 mt-1">{product.description}</p>
              <div className='flex justify-between items-center'>
              <p className="text-green-600 font-semibold mt-1">${product.productPrice}</p>
              <ReactStars count={3} size={20} activeColor='#ffd700'value={product.productRating} edit={false}/>
              </div>
            </div>
          ))}
        </div>
      </Spin>
      <div className="flex justify-center items-center pt-10">
        <button className="text-white bg-[purple] rounded shadow-sm w-23 hover:bg-purple-900 py-3 px-6 font-semibold transition duration-300 ease-in-out focus:outline-none" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
