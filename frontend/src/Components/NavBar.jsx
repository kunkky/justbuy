import Search from 'antd/es/input/Search'
import { useState } from 'react'
import Wishlist from './Assets/Wishlist.svg'
import Cart from './Assets/Cart1.svg'
import Hamburger from './Assets/menu.svg'
import Menu from './Menu'
import SearchIcon from './Assets/searchIcon.svg'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [navIcon, setNavIcon] = useState(true)

  const menuHandler = () => {
    setShowMenu(!showMenu)
  }

  const searhHandler = () => {
    setShowSearch(!showSearch)
    setNavIcon(false)
  }

  const onSearchHandler = () => {
    setShowSearch(!showSearch)
    setNavIcon(true)
  }


  return (
    <div>
      <nav className=' p-[0.4rem] flex justify-around bg-justbuy-black text-[0.8rem] sm:p-[0.5rem]'>
        <p className=' text-white pl-[11rem] md:pl-0 sm:max-w-[15rem]'> Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='underline cursor-pointer pl-[1rem]'>ShopNow</span></p>
        <select name="countries" id="" className=' bg-justbuy-black text-white cursor-pointer'>
          <option value="English">English</option>
          <option value="France">French</option>
        </select>
      </nav>
      <nav className='flex justify-around pt-[1.5rem] h-[4rem] bg-white shadow-md'>
        <img src={Hamburger} onClick={menuHandler} alt="Menu" className='xl:hidden w-[1.5rem]' />
        <h1 className='font-bold text-[24px] '>Justbuy</h1>
        <ul className=' flex justify-evenly w-[20rem] md:hidden text-[16px] pt-[0.5rem]'>
          {[
            ['Home'],
            ['Contact'],
            ['About'],
            ['Signup']
          ].map(([title], index) => (
            <li key={index} className='hover:border-b-2 hover:animate-[headShake_1s] hover:text-justbuy-purple border-justbuy-black cursor-pointer'> {title}</li>
          ))}
        </ul>

        <Search className=' md:hidden w-[15rem] rounded-[4px]' placeholder='What are you looking for?' />
        <div className=' flex justify-center align-middle gap-[16px]'>
          <img src={Wishlist} className='active:bg-justbuy-brown rounded-2xl active:animate-ping w-[32px] bg cursor-pointer md:hidden' alt="Whishlists" />
          {navIcon && (
            <div className=' flex gap-[1rem]'>
              <img src={Cart} alt="Cart" className=' w-[32px] cursor-pointer active:animate-spin' />
              <img src={SearchIcon} alt="Search" className=' animate-[bounceIn_1s] xl:hidden w-[2rem]' onClick={searhHandler} />
            </div>
          )}
          {showSearch && (<Search className=' animate-[bounceIn_1s]' onSearch={onSearchHandler} placeholder='What are you looking for?' />)}
        </div>
      </nav>
      <Menu showMenu={showMenu} menuHandler={menuHandler} />
    </div>
  )
}

export default NavBar