import Search from 'antd/es/input/Search'
import React from 'react'
import Wishlist from './Assets/Wishlist.svg'
import Cart from './Assets/Cart1.svg'
import 'animate.css'
const NavBar = () => {
  return (
    <nav className=' flex justify-around pt-[1.5rem] h-[4rem] bg-white shadow-md'>
      <h1 className='font-bold text-[24px]'>Justbuy</h1>
      <ul className=' flex justify-evenly w-[20rem] text-[16px] pt-[0.5rem]'>
        {[
          ['Home'],
          ['Contact'],
          ['About'],
          ['Signup']
        ].map(([title])=>(
          <li className='hover:border-b-2 hover:animate-[headShake_1s] hover:text-justbuy-purple border-justbuy-black cursor-pointer'> {title}</li>
        ))
        }
      </ul>
      <Search className=' w-[15rem] rounded-[4px]' placeholder='What are you looking for?' />
      <div className=' flex justify-center align-middle gap-[16px]'>
        <img src={Wishlist} className=' w-[32px] cursor-pointer' alt="Whishlists" />
        <img src={Cart} alt="Cart" className=' w-[32px] cursor-pointer' />
      </div>
    </nav>
  )
}

export default NavBar