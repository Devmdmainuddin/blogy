import React from 'react';
import Container from '../share/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { FaUser } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';

const HeroSlider = () => {
    return (
        // <div className='grid lg:grid-cols-3 md:grid-cols-2 md:grid-rows-3  grid-cols-1 lg:grid-rows-2  w-[300px bg-black'>

        //     <div className='bg-red-300  col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3'> <h2> 1</h2></div>
        //     <div className='bg-green-300  lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-5 md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4'> <h2> 2</h2></div>
        //     <div className='bg-red-300 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-5 md:col-span-full md:row-start-1 md:row-end-2'> <h2> 3</h2></div>
        //     <div className='bg-red-300 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3'> <h2> 4</h2></div>
        //     <div className='bg-red-300 lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-5 md:col-start-2  md:col-end-3 md:row-start-3 md:row-end-4'> <h2> 5</h2></div>

        // </div>
        <Container>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 md:grid-rows-3 grid-cols-1 lg:grid-rows-2  gap-6'>
                <div className=' lg:row-start-1 lg:row-end-2 lg:row-span-2 md:row-start-2 '>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={false}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                        }}


                        loop={true}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='h-[220px]'>
                        <div className="flex justify-end flex-col blog-card h-full relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">
                                <div className='p-6'>
                                    <p className='category inline-block  text-white p-[2px] bg-[#ffc107] rounded-sm capitalize'>category</p>
                                    <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>The Master Of Human Happiness</h2>
                                    <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600'/> By <span>Sojib Rahman</span> </p>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime  className='text-red-600'/>  <span>March 20, 2017</span></p>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='h-[220px]'>
                        <div className="flex justify-end flex-col blog-card h-full relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">
                                <div className='p-6'>
                                    <p className='category inline-block  text-white p-[2px] bg-[#ffc107] rounded-sm capitalize'>category</p>
                                    <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>The Master Of Human Happiness</h2>
                                    <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600'/> By <span>Sojib Rahman</span> </p>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime  className='text-red-600'/>  <span>March 20, 2017</span></p>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='h-[220px]'>
                        <div className="flex justify-end flex-col blog-card h-full relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">
                                <div className='p-6'>
                                    <p className='category inline-block  text-white p-[2px] bg-[#ffc107] rounded-sm capitalize'>category</p>
                                    <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>The Master Of Human Happiness</h2>
                                    <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600'/> By <span>Sojib Rahman</span> </p>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime  className='text-red-600'/>  <span>March 20, 2017</span></p>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
                <div className=' lg:row-span-3 lg:col-start-1 md:row-start-3 '>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={false}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                        }}


                        loop={true}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='h-[220px]'>
                        <div className="flex justify-end flex-col blog-card h-full relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">
                                <div className='p-6'>
                                    <p className='category inline-block  text-white p-[2px] bg-[#4382FF] rounded-sm capitalize'>category</p>
                                    <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>The Master Of Human Happiness</h2>
                                    <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600'/> By <span>Sojib Rahman</span> </p>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime  className='text-red-600'/>  <span>March 20, 2017</span></p>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='h-[220px]'>
                        <div className="flex justify-end flex-col blog-card h-full relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">
                                <div className='p-6'>
                                    <p className='category inline-block  text-white p-[2px] bg-[#4382FF] rounded-sm capitalize'>category</p>
                                    <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>The Master Of Human Happiness</h2>
                                    <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600'/> By <span>Sojib Rahman</span> </p>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime  className='text-red-600'/>  <span>March 20, 2017</span></p>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='h-[220px]'>
                        <div className="flex justify-end flex-col blog-card h-full relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">
                                <div className='p-6'>
                                    <p className='category inline-block  text-white p-[2px] bg-[#4382FF] rounded-sm capitalize'>category</p>
                                    <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>The Master Of Human Happiness</h2>
                                    <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600'/> By <span>Sojib Rahman</span> </p>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime  className='text-red-600'/>  <span>March 20, 2017</span></p>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className=' lg:row-span-full lg:col-start-2 lg:col-end-3  md:col-span-2 md:row-start-1 h-[220px] lg:h-full'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={false}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                        }}
                        loop={true}
                        modules={[Autoplay]}
                        className="mySwiper h-full lg:h-full"
                    >
                        <SwiperSlide className="  ">
                            <div className="flex justify-end flex-col blog-card h-full relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">
                                <div className='p-6'>
                                    <p className='category inline-block  text-white p-[2px] bg-[#7ee4e4] rounded-sm capitalize'>category</p>
                                    <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>The Master Of Human Happiness</h2>
                                    <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600'/> By <span>Sojib Rahman</span> </p>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime  className='text-red-600'/>  <span>March 20, 2017</span></p>

                                    </div>
                                </div>

                            </div>
                            {/* <img src="/card.jpg" alt="" className='group-hover:scale-125  w-full h-full  object-cover transition-all duration-500' /> */}
                        </SwiperSlide>
                        <SwiperSlide className="">
                        <div className="flex justify-end flex-col blog-card h-full relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">
                                <div className='p-6'>
                                    <p className='category inline-block  text-white p-[2px] bg-[#7ee4e4] rounded-sm capitalize'>category</p>
                                    <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>The Master Of Human Happiness</h2>
                                    <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600'/> By <span>Sojib Rahman</span> </p>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime  className='text-red-600'/>  <span>March 20, 2017</span></p>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>

                    </Swiper>



                </div>
                <div className=' lg:row-start-1 lg:col-start-3 lg:col-end-4 '>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={false}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                        }}


                        loop={true}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='h-[220px]'>
                        <div className="flex justify-end flex-col blog-card h-full relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">
                                <div className='p-6'>
                                    <p className='category inline-block  text-white p-[2px] bg-[#5236ff] rounded-sm capitalize'>category</p>
                                    <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>The Master Of Human Happiness</h2>
                                    <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600'/> By <span>Sojib Rahman</span> </p>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime  className='text-red-600'/>  <span>March 20, 2017</span></p>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='h-[220px]'>
                        <div className="flex justify-end flex-col blog-card h-full relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">
                                <div className='p-6'>
                                    <p className='category inline-block  text-white p-[2px] bg-[#5236ff] rounded-sm capitalize'>category</p>
                                    <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>The Master Of Human Happiness</h2>
                                    <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600'/> By <span>Sojib Rahman</span> </p>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime  className='text-red-600'/>  <span>March 20, 2017</span></p>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='h-[220px]'>
                        <div className="flex justify-end flex-col blog-card h-full relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">
                                <div className='p-6'>
                                    <p className='category inline-block  text-white p-[2px] bg-[#5236ff] rounded-sm capitalize'>category</p>
                                    <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>The Master Of Human Happiness</h2>
                                    <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600'/> By <span>Sojib Rahman</span> </p>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime  className='text-red-600'/>  <span>March 20, 2017</span></p>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className=' lg:row-span-2 lg:col-start-3 lg:col-end-4 '>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={false}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                        }}


                        loop={true}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='h-[220px]'>
                        <div className="flex justify-end flex-col blog-card h-full relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">
                                <div className='p-6'>
                                    <p className='category inline-block  text-white p-[2px] bg-[#28a745] rounded-sm capitalize'>category</p>
                                    <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>The Master Of Human Happiness</h2>
                                    <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600'/> By <span>Sojib Rahman</span> </p>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime  className='text-red-600'/>  <span>March 20, 2017</span></p>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='h-[220px]'>
                        <div className="flex justify-end flex-col blog-card h-full relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">
                                <div className='p-6'>
                                    <p className='category inline-block  text-white p-[2px] bg-[#28a745] rounded-sm capitalize'>category</p>
                                    <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>The Master Of Human Happiness</h2>
                                    <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600'/> By <span>Sojib Rahman</span> </p>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime  className='text-red-600'/>  <span>March 20, 2017</span></p>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='h-[220px]'>
                        <div className="flex justify-end flex-col blog-card h-full relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">
                                <div className='p-6'>
                                    <p className='category inline-block  text-white p-[2px] bg-[#28a745] rounded-sm capitalize'>category</p>
                                    <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>The Master Of Human Happiness</h2>
                                    <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600'/> By <span>Sojib Rahman</span> </p>
                                        <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime  className='text-red-600'/>  <span>March 20, 2017</span></p>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </Container>

        // <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:grid-rows-5 md:grid-rows-3 w-[1200px] gap-6 bg-black'>
        //     <div className='bg-red-300 lg:row-start-1 lg:row-end-3 md:row-start-2 h-[220px]'>
        //         <h2>1</h2>
        //     </div>
        //     <div className='bg-green-300 lg:row-start-3 lg:row-end-6 md:row-start-3 h-[220px]'>
        //         <h2>2</h2>
        //     </div>
        //     <div className='bg-red-300 lg:col-start-2 lg-col-span-1 lg:row-start-1 lg:row-end-6 md:col-span-2 md:row-start-1 '>
        //         <h2>3</h2>
        //     </div>
        //     <div className='bg-red-300 lg:col-start-3 lg:row-start-1 lg:row-end-3 h-[220px]'>
        //         <h2>4</h2>
        //     </div>
        //     <div className='bg-red-300 lg:col-start-3 lg:row-start-3 lg:row-end-6 h-[220px]'>
        //         <h2>5</h2>
        //     </div>
        // </div>


    );
};

export default HeroSlider;