
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './index.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Title from "../Introduce/Title";

const style = {
    position: 'absolute',
    left: '15%',
    top: '20%',
    fontSize: '3.3rem',
    fontFamily: 'jejuhallasan'
}

const asideColor = {
    position: 'absolute',
    right: '0',
    backgroundColor: '#669966',
    width: '22%',
    height: '100%'
}

const Semi = () => {
    return (
        <>
            <Title />
            <h1 style={style}>학교 종이 땡땡땡</h1>
            <div style={asideColor} />
            <div>
            <Swiper
                les={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
            </div>

        </>
    );
}

export default Semi;