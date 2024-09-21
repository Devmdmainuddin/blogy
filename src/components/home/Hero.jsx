import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import Container from '../share/Container';


const Hero = () => {
    return (
        <>
        <div >
            <Container>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                  }}
                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 24,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 24,
                    },
                  }}
                
                loop={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    
                        <div className="flex items-end blog-card bg-[#8acce8]  h-[325px] relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">
                            <p className='category absolute top-1 left-1 text-white p-1 bg-red-400 rounded-sm capitalize'>category</p>
                            <img src="/user.png" alt="" className='author w-10 h-10 rounded-full absolute top-3 right-3 border-2 border-white' />
                            <h2 className='capitalize font-medium px-4 py-6 text-white'>title</h2>
                            <div className='bg-[#ffffff] w-full h-[125px] absolute -bottom-full left-0 group-hover:bottom-0 transition-all duration-700'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, error quam nisi ad saepe eligendi vitae?</p>
                            </div>
                        </div>

               
                </SwiperSlide>
                <SwiperSlide>
                
                        <div className="flex items-end blog-card bg-[#8acce8]  h-[325px] relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">
                            <p className='category absolute top-1 left-1 text-white p-1 bg-red-400 rounded-sm capitalize'>category</p>
                            <img src="/user.png" alt="" className='author w-10 h-10 rounded-full absolute top-3 right-3 border-2 border-white' />
                            <h2 className='capitalize font-medium px-4 py-6 text-white'>title</h2>
                            <div className='bg-[#ffffff] w-full h-[125px] absolute -bottom-full left-0 group-hover:bottom-0 transition-all duration-700'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, error quam nisi ad saepe eligendi vitae?</p>
                            </div>
                        </div>

           
                </SwiperSlide>
                <SwiperSlide>
                
                <div className="flex items-end blog-card bg-[#8acce8]  h-[325px] relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">
                    <p className='category absolute top-1 left-1 text-white p-1 bg-red-400 rounded-sm capitalize'>category</p>
                    <img src="/user.png" alt="" className='author w-10 h-10 rounded-full absolute top-3 right-3 border-2 border-white' />
                    <h2 className='capitalize font-medium px-4 py-6 text-white'>title</h2>
                    <div className='bg-[#ffffff] w-full h-[125px] absolute -bottom-full left-0 group-hover:bottom-0 transition-all duration-700'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, error quam nisi ad saepe eligendi vitae?</p>
                    </div>
                </div>

   
        </SwiperSlide>
                <SwiperSlide>
                   
                        <div className="flex items-end blog-card bg-[#8acce8]  h-[325px] relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">
                            <p className='category absolute top-1 left-1 text-white p-1 bg-red-400 rounded-sm capitalize'>category</p>
                            <img src="/user.png" alt="" className='author w-10 h-10 rounded-full absolute top-3 right-3 border-2 border-white' />
                            <h2 className='capitalize font-medium px-4 py-6 text-white'>title</h2>
                            <div className='bg-[#ffffff] w-full h-[125px] absolute -bottom-full left-0 group-hover:bottom-0 transition-all duration-700'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, error quam nisi ad saepe eligendi vitae?</p>
                            </div>
                        </div>

             
                </SwiperSlide>
                <SwiperSlide>
                 
                        <div className="flex items-end blog-card bg-[#8acce8]  h-[325px] relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">
                            <p className='category absolute top-1 left-1 text-white p-1 bg-red-400 rounded-sm capitalize'>category</p>
                            <img src="/user.png" alt="" className='author w-10 h-10 rounded-full absolute top-3 right-3 border-2 border-white' />
                            <h2 className='capitalize font-medium px-4 py-6 text-white'>title</h2>
                            <div className='bg-[#ffffff] w-full h-[125px] absolute -bottom-full left-0 group-hover:bottom-0 transition-all duration-700'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, error quam nisi ad saepe eligendi vitae?</p>
                            </div>
                        </div>

            
                </SwiperSlide>
               
            </Swiper>
            </Container>
       
        </div>
         
        </>

    );
};

export default Hero;