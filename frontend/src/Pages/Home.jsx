import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import HomeSlider from '../Components/HomeSections/HomeSlider'
import FlashSales from '../Components/HomeSections/FlashSales'
import HomeCategory from '../Components/HomeSections/HomeCategory'
import GeneralProduct from '../Components/HomeSections/GeneralProduct'
import Advantage from '../Components/HomeSections/Advantage'

const Home = () => {
  return (
    <div className='w-screen overscroll-none'>
      <NavBar/>
      <HomeSlider/>
      <FlashSales/>
      <HomeCategory/>
      <GeneralProduct/>
      <Advantage/>
       <Footer/>
    </div>
  )
}

export default Home
