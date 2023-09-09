
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import rec from '../../Asset/rec.svg';
import leftArrow from '../../Asset/leftArrow.svg';
import rightArrow from '../../Asset/rightArrow.svg';
import phone from '../../Asset/CellPhone.svg';
import computers from '../../Asset/Computer.svg';
import smartWatch from '../../Asset/SmartWatch.svg';
import Camera from '../../Asset/Camera.svg';
import Headphone from '../../Asset/Headphone.svg';
import Gamepad from '../../Asset/Gamepad.svg';
import BestSelling from "../../Components/HomeSections/BestSelling";
// const categoryData = [
//   {
//     productName: 'Phones',
//     productImg: phone,
//     categoryUrl: '/phones', // Define the URL for the Phones category
//   },
//   {
//     productName: 'Computers',
//     productImg: computers,
//     categoryUrl: '/computers', // Define the URL for the Computers category
//   },
//   {
//     productName: 'Smart Watches',
//     productImg: smartWatch,
//     categoryUrl: '/smart-watches', // Define the URL for the Smart Watches category
//   },
//   {
//     productName: 'Cameras',
//     productImg: Camera,
//     categoryUrl: '/cameras', // Define the URL for the Cameras category
//   },
//   {
//     productName: 'Headphones',
//     productImg: Headphone,
//     categoryUrl: '/headphones', // Define the URL for the Headphones category
//   },
//   {
//     productName: 'Gaming',
//     productImg: Gamepad,
//     categoryUrl: '/gaming', // Define the URL for the Gaming category
//   },
// ];

// const HomeCategory = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   return (
//     <div className="h-screen">
//       {loading ? (
//         <Spin size="large" className="flex items-center justify-center" />
//       ) : (
//         <>
//           <div className="flex flex-col md:flex-row gap-2 md:gap-2 items-center text-[#660B7F] px-4 md:px-8">
//             <img src={rec} alt="" className="md:mr-2" />
//             <h1 className="text-xl sm:text-xl">Categories</h1>
//           </div>

//           <div className="flex items-center justify-between px-4 md:px-8">
//             <div>
//               <h1 className="text-xl sm:text-2xl font-bold">Browse By Category</h1>
//             </div>
//             <div className="flex gap-3 pr-3">
//               <img src={leftArrow} alt="" />
//               <img src={rightArrow} alt="" />
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6 justify-center items-center pt-8 px-2 md:px-8">
//             {categoryData.map((item, index) => (
//               <Link target='blank'
//                 key={index}
//                 to={item.categoryUrl} // Set the URL for each category
//                 className="bg-opacity-70 bg-gray-900  hover:bg-[#660B7F] hover:text-white transition duration-300 shadow-sm rounded border border-[#660B7F] w-[10rem] md:w-[12rem] flex flex-col items-center cursor-pointer mb-2 hover:scale-105 ease-in-out hover:shadow-lg"
//               >
//                 <img src={item.productImg} alt={item.productName} className="max-h-40 md:max-h-48" />
//                 <div className="text-center text-sm sm:text-base md:text-lg py-2">
//                   {item.productName}
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </>
//       )}
//       <BestSelling />
//     </div>
//   );
// };

          <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6 justify-center items-center pt-8 px-2 md:px-8">
            {categoryData.map((item, index) => (
              <Link target='blank'
                key={index}
                to={item.categoryUrl} // Set the URL for each category
                className="bg-opacity-70 bg-gray-900  hover:bg-[#660B7F] hover:text-white transition duration-300 shadow-sm rounded border border-[#660B7F] w-[10rem] md:w-[12rem] flex flex-col items-center cursor-pointer mb-2 hover:scale-105 ease-in-out hover:shadow-lg"
              >
                <img src={item.productImg} alt={item.productName} className="max-h-40 md:max-h-48" />
                <div className="text-center text-sm sm:text-base md:text-lg py-2">
                  {item.productName}
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
      <BestSelling />
    </div>
  );
};

export default HomeCategory;
