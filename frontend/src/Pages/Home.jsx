import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import HomeSlider from '../Components/HomeSections/HomeSlider'
import FlashSales from '../Components/HomeSections/FlashSales'
import HomeCategory from '../Components/HomeSections/HomeCategory'
import GeneralProduct from '../Components/HomeSections/GeneralProduct'
import BestSelling from '../Components/HomeSections/BestSelling'
import Advantage from '../Components/HomeSections/Advantage'

const Home = () => {
  return (
    <div>
    {/* Teepee Start */}
      <NavBar/>
      <HomeSlider/>
      <FlashSales/>
      {/* Teepee Ends */}
      {/* Dav Start */}

      <BestSelling/>
      <HomeCategory/>
      <GeneralProduct/>
      {/* Dav Ends */}
      {/* Mr Id Start */}
      <Advantage/>
      <Footer/>
      {/* Teepee Start */}
    </div>
  )
}

export default Home