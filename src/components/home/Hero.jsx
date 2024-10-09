import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Container from '../share/Container';
import Heading from '../share/Heading';
import usePosts from '../../hook/usePosts';
import { useGetBlogsQuery } from '../../Feature/postsAPI/postApi';
import { Link } from 'react-router-dom';


const Hero = () => {
    const [sortOrder, setSortOrder] = useState('new');
    const { data } = useGetBlogsQuery({ sortOrder })
    return (
        <>
            <section >
                <Heading text='Tranding Post'></Heading>
                <Container>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        navigation={true}
                        // autoplay={{
                        //     delay: 2000,
                        //     disableOnInteraction: true,
                        //   }}
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
                        modules={[Navigation]}
                        className="mySwiper mt-9"
                    >
                        {data?.slice(0, 5).map((item, idx) =>
                            <SwiperSlide key={idx}>
                                <Link to={`/blogs/${item._id}`}>
                                <div
                                    className="flex items-end blog-card   h-[325px] relative group overflow-hidden shadow-bshadow  bg-cover bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: `linear-gradient(180deg, hsla(0, 0%, 6%, 0) 41.54%, hsla(0, 0%, 6%, 0.621) 72.29%, #101010), url('${item.image}')`
                                    }}
                                >
                                    <p className='category absolute top-1 left-1 text-white p-1 bg-red-400 rounded-sm capitalize'>{item.category}</p>
                                    <img src={item.userInfo.userImage} alt="" className='author w-10 h-10 rounded-full absolute top-3 right-3 border-2 border-white' />
                                    <h2 className='capitalize font-medium px-4 py-6 text-white'>{item.title}</h2>
                                    <div className='bg-[#214252] text-white w-full h-[125px] p-6 absolute -bottom-full left-0 group-hover:bottom-0 transition-all duration-700'>
                                        <p>{item.discaption.discaption01.slice(0,128)}</p>
                                    </div>
                                </div>
                                </Link>
                                


                            </SwiperSlide>
                        )}


                    </Swiper>
                </Container>

            </section>

        </>

    );
};

export default Hero;