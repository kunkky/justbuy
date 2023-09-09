import { Button, Card } from 'antd'
import React from 'react'
import Wishlist from '../Assets/Wishlist.svg'
import EyeIcon from '../Assets/Group.svg'
import Pad from '../Assets/pad.svg'
import Vector from '../Assets/Vector.svg'
import Tv from '../Assets/tv.svg'
import Keyboard from '../Assets/keyboard.svg'
import Chair from '../Assets/chair.svg'


const FlashSales = () => {
  return (
    <section className='pl-[5rem] pt-[5rem] pb-[5rem] md:pl-0'>
      <div className='flex gap-[1rem] md:justify-center'>
        <Card className='w-[20px] h-[40px] bg-justbuy-purple '> </Card>
        <p className=' text-justbuy-purple font-medium pt-[0.5rem]'>Today's</p>
      </div>
      <h2 className=' text-[36px] font-medium pt-[1rem]  md:text-center pb-[1rem]'>Flash Sales</h2>
      <div className='flex flex-wrap gap-[3rem] md:overflow-x-auto md:m-[1rem] md:flex-nowrap'>

        {[
          [Pad, 'Cart With Flat Discount', '$120', '$160'],
          [Keyboard, 'AK-900 Wired Keyboard', '$960', '1160'],
          [Tv, 'AK-900 Wired Keyboard', '$370', '$400'],
          [Chair, 'S-Series Comfort Chair', '$375', '$400'],
          [Pad, 'Cart With Flat Discount', '$120', '$160']
        ].map(([image, name, price, slash], index) => (
          <div key={index} className=' w-[12rem] h-[270px] h-[240px] border'>
            <div className='cursor-pointer  w-[12rem] p-[0.7rem_1rem_0rem_1rem] h-[11rem] bg-[#F5F5F5]'>
              <div className='flex justify-between bg-'>
                <p className='bg-justbuy-purple text-[0.8rem]  h-[1.5rem] text-white'>-40%</p>
                <div className='w-[24px]'>
                  <img src={Wishlist} alt="" className='active:animate-ping active:bg-justbuy-brown rounded-2xl' />
                  <img src={EyeIcon} alt="" className='w-[1.2rem] active:animate-ping ' />
                </div>
              </div>
              <img src={image} className='m-auto max-w-[127px] h-[127px]' alt="" />
            </div>
            <p className=' text-[0.8rem]'>{name} <br />
              {price} <s className=' opacity-50'>{slash}</s>
            </p>
            <span className=' flex'>
              <img src={Vector} alt="" />
              <img src={Vector} alt="" />
              <img src={Vector} alt="" />
            </span>
          </div>
        ))}
      </div>
      <div className=' flex justify-center mt-[3rem]'>
        <Button className='bg-justbuy-purple text-white'>View All Products</Button>
      </div>
    </section>
  )
}

export default FlashSales