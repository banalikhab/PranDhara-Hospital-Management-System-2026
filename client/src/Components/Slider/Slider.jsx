import React from 'react';
import './Slider.css';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay,Navigation,Pagination} from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//images
import Banner1 from "../../assets/Images/Banner1.png";
import Banner2 from "../../assets/Images/Banner2.png";
import Banner3 from "../../assets/Images/Banner3.png";
import Banner4 from "../../assets/Images/Banner4.png";

const Slider = () => {
    const images = [Banner1, Banner2, Banner3, Banner4];
  return (
    <>  
        <div className='slider-container'>
            <Swiper modules={[Autoplay,Navigation,Pagination]} navigation pagination={{ clickable: true }} spaceBetween={10} slidesPerView={1} loop={true} autoplay={{delay:3000, disableOnInteraction:false}}>
                {images.map((d,i) => (
                    <SwiperSlide key={i}>
                        <img src={d} alt="bannerimages" className='slider-image'/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        
    </>
  )
}

export default Slider;
