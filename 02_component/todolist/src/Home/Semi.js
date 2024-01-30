import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';
import SwiperSlide  from 'swiper/react';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
                    // install Swiper modules
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    ...
                </Swiper>
            </div>

        </>
    );
}

export default Semi;