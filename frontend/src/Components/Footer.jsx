import React from 'react'
import iconSend from './Assets/iconSend.svg'
import Linkedln from './Assets/Linkedln.svg'
import Twitter from './Assets/Twitter.svg'
import AppStore from './Assets/AppStore.svg'
import Instagram from './Assets/Instagram.svg'
import faceBook from './Assets/faceBook.svg'
import GooglePlay from './Assets/GooglePlay.svg'


const Footer = () => {
  return (
  <div>
    <div className='bg-justbuy-black lg:p-20 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:gap-20 p-5 gap-5 text-white'>
      <div className="flex flex-col gap-2 w-full text-justbuy-white">
        <h1 className='text-justbuy-white font-bold mb-3'>JustBuy</h1>
          <div className="text-sm">Subscribe</div>
          <div className="text-sm">Get 10% off your first order</div>
          <div className="">
          <div className="relative">
          <input type="text" className='bg-transparent border-justbuy-white p-1 text-sm border rounded-sm text-justbuy-white-500 w-full' placeholder='Enter your email'/>
          <div className="absolute right-0 top-0 p-1">
            <img src={iconSend} alt="" className='w-[20px]' />
          </div>
          </div>
        </div>
        </div>
      <div className="flex flex-col gap-2 w-full text-justbuy-white">
        <h1 className='text-justbuy-white font-bold mb-3'>Support</h1>
        <ul className=''>
          <li className="text-sm pb-2">Lagos, Nigeria</li>
          <li className="text-sm pb-2">JustBuy@gmail.com</li>
          <li className="text-sm pb-2">+88015-88888-9999</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 w-full text-justbuy-white">
        <h1 className='text-justbuy-white font-bold mb-3'>Account</h1>
        <ul className=''>
          <li className="text-sm pb-2">My Account</li>
          <li className="text-sm pb-2">Login / Register</li>
          <li className="text-sm pb-2">Cart</li>
          <li className="text-sm pb-2">Wishlist</li>
          <li className="text-sm pb-2">Shop</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 w-full text-justbuy-white">
        <h1 className='text-justbuy-white font-bold mb-3'>Account</h1>
        <ul className=''>
          <li className="text-sm pb-2">Quick Link</li>
          <li className="text-sm pb-2">Privacy Policy</li>
          <li className="text-sm pb-2">Terms Of Use</li>
          <li className="text-sm pb-2">FAQ</li>
          <li className="text-sm pb-2">Contact</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 w-full text-justbuy-white">
        <h1 className='text-justbuy-white font-bold mb-3'>Download App</h1>
        <ul className=''>
          <li className="text-[9px] pb-2">Save $3 with App New User Only</li>
          <li className="text-sm pb-2">
          <img src={GooglePlay} alt="" className='h-[30px]' />
          
            <img src={AppStore} alt="" className='h-[30px]' />
          </li>
        </ul>
        <div className="">
          <ul className='flex flex-row gap-2'>
            <li className=''>
              <img src={faceBook} alt="" className='h-[15px]'/>
            </li>
            <li className=''>
              <img src={Twitter} alt="" className='h-[15px]'/>
            </li>
            <li className=''>
              <img src={Instagram} alt="" className='h-[15px]'/>
            </li>
            <li className=''>
              <img src={Linkedln} alt="" className='h-[15px]'/>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div className="text-justbuy-white text-center bg-justbuy-black p-2 text-sm border-t  border-t-slate-900 text-slate-400">&#169; Copyright 2023. All right reserved</div>
</div>
  )
}

export default Footer