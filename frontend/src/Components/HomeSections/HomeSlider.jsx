import { Pagination, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import Apple from '../Assets/Apple.png'
import Iphone from '../Assets/iphone.svg'
import Arrow from '../Assets/arrow.svg'
import { Link } from 'react-router-dom';

const HomeSlider = () => {
  const slideArr = []
  for (let i = 0; i <= 5; i++) {
    slideArr.push(
      <SwiperSlide key={i}><div className='flex  w-[892px] h-[344px] bg-justbuy-black '>
        <div className=' flex justify-center pt-[2rem] pl-[4rem] flex-col text-white w-[45%] h-[100%]'>
          <p className=' flex'><img src={Apple} alt="" className='w-[40px] h-[49px]' />
            <span className=' p-[0.8rem_1rem_2rem_1.8rem]'>iphone 14 series</span></p>
          <h1 className='font-bold text-[3rem] leading-[3.5rem]'>
            Up to 10% <br /> off Voucher
            <br />
          </h1>
            <div className=' mt-[1rem] flex cursor-pointer'>
            <span className=' border-b-[1px] pb-[4px] mr-[6px]'>Shop Now </span>
            <img src={Arrow} alt="" />
            </div>
        </div>
        <img src={Iphone} alt="" className='w-[496px] h-[352px]' />
      </div>
      </SwiperSlide>
    )
  }

  return (
<<<<<<< HEAD
      <div></div>
=======
    <Swiper className=' m-[3rem] w-[892px] h-[344px]'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={true}
      autoplay={true}
    >
      {slideArr}
    </Swiper>
>>>>>>> main
  )
}

export default HomeSlider