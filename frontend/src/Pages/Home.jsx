import React from 'react'
import NavBar from '../Components/NavBar'
// import Footer from '../Components/Footer'
import HomeSlider from '../Components/HomeSections/HomeSlider'
import FlashSales from '../Components/HomeSections/FlashSales'
import HomeCategory from '../Components/HomeSections/HomeCategory'
import GeneralProduct from '../Components/HomeSections/GeneralProduct'
// import BestSelling from '../Components/HomeSections/BestSelling'
// import Advantage from '../Components/HomeSections/Advantage'

const Home = () => {
  return (
    <div className=' overflow-x-hidden'>
    {/* Teepee Start
      <h1 className='bg-justbuy-purple text-white'>Use bg-justbuy-purple for our purple variant</h1>
      <h1 className='bg-justbuy-black text-white'>Use bg-justbuy-black for our black variant</h1>
      <h1 className='bg-justbuy-brown text-white'>Use bg-justbuy-brown for our brown variant</h1>
      <h1 className='bg-justbuy-star text-white'>Use bg-justbuy-star for our star variant</h1> */}

      <NavBar/>
      <HomeSlider/>
      <FlashSales/>
      {/* Teepee Ends */}
      {/* Dav Start */}
{/* 
      <BestSelling/> */}
      {/* <HomeCategory/> */}
      <GeneralProduct/>
      {/* Dav Ends */}
      {/* Mr Id Start */}
      {/* <Advantage/> */}
      {/* <Footer/> */}
      {/* Teepee Start */}
    </div>
  )
}

export default Home
