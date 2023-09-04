import React from 'react'
import ProductSlider from '../Assets/Frame.svg'
import { Pagination, Navigation} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

const HomeSlider = () => {
  return (
    <Swiper className=' m-[3rem] w-[892px] h-[344px]'
    modules={[Navigation, Pagination]}
    spaceBetween={40}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
  >
      <SwiperSlide><img src={ProductSlider} alt="Product Slider" />
      </SwiperSlide>
      <SwiperSlide><img src={ProductSlider} alt="Product Slider" />
      </SwiperSlide>
      <SwiperSlide> <img src={ProductSlider} alt="Product Slider" />
      </SwiperSlide>
    </Swiper>
  )
}

export default HomeSlider