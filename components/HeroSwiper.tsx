'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import 'swiper/css';

const data = ["Full Stack Developer", "Dedicated Programmer"];

function HomeHeroSwiper() {
  return (
    <div className='flex flex-row mt-2'>
        <span className='font-code font-bold lg:leading-[60px] lg:text-[60px] text-[40px] leading-[40px]'>{'{ '}</span>
        <Swiper
            className='rounded-lg  max-h-[140px]'
            spaceBetween={20}
            slidesPerView={1}  
            loop
            modules={[Autoplay]}
            autoplay={{
                delay:2000
            }}
            direction='vertical'
            allowTouchMove={false}
            // breakpoints={{
            // 375: {
            //     slidesPerView: 1,
            //     spaceBetween: 30,
            // },
            // 1440: {
     
            //     spaceBetween: 30,
            // },
            // }}
            >
            {data.map((text,idx)=>(
                <SwiperSlide key={text+idx}>
                <div className="w-fit h-fit">
                     <p className='font-code font-bold lg:leading-[60px] lg:text-[60px] text-[40px] leading-[40px] text-secondary'>
                        {text}
                        </p>
                </div>
            </SwiperSlide>
            ))} 
        </Swiper>
        <span className='font-code font-bold lg:leading-[60px] lg:text-[60px] text-[40px] leading-[40px]'>{' }'}</span>
    </div>
  )
}

export default HomeHeroSwiper;