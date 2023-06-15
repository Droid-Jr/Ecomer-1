import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/containers/slider.css"

const Slider = ({images}) => {
    // console.log(images)

  return (
    <>
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper"
    >
      {
        images && images.map(item =>  <SwiperSlide key={item.id} >
            <img src={item.url} />
          </SwiperSlide> )
      }
     
    </Swiper>
  </>
  );
};

export default Slider;
