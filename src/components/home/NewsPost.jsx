import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Container from '../share/Container';
import Heading from '../share/Heading';
import { MdAccessTime } from 'react-icons/md';
import { FaComment } from 'react-icons/fa';
// import { useGetPostsQuery } from '../../Feature/postsAPI/postApi';
import usePosts from '../../hook/usePosts';
const NewsPost = () => {
    const[posts]=usePosts()

    // const { data, error, isLoading } = useGetPostsQuery();

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error loading posts: {error.message}</div>;
    
    return (
        <section className='pb-16'>

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
                    {posts.slice(0,5).map((item,idx) =>
                        <SwiperSlide key={idx}>

<div
                                className={`flex items-end blog-card h-[325px] relative group overflow-hidden shadow-bshadow bg-cover bg-center bg-no-repeat`}
                                style={{
                                    backgroundImage: `linear-gradient(180deg, hsla(0, 0%, 6%, 0) 41.54%, hsla(0, 0%, 6%, 0.621) 72.29%, #101010), url('${item.image}')`
                                }}
                            >


                                <div className='px-2'>
                                    <p className='category inline-block text-white p-1 bg-red-400 rounded-sm capitalize'>{item.category}</p>
                                    <h2 className='capitalize font-medium  py-2 text-white hover:text-red-400 transition-all duration-500'>{item.title}</h2>
                                    <div className='flex flex-col md:flex-row  gap-2 pb-3'>

                                        <p className='flex items-center gap-1 text-white hover:text-red-400 transition-all duration-500'><MdAccessTime />  <span>{item.date}</span></p>
                                        <p className='flex items-center gap-1 text-white hover:text-red-400 transition-all duration-500'><FaComment /> <span>5</span></p>
                                    </div>
                                </div>
                            </div>


                        </SwiperSlide>
                    )} 

                    {/* <SwiperSlide>

                        <div className="flex items-end blog-card   h-[325px] relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">

                         
                            <div className='px-2'>
                                <p className='category inline-block text-white p-1 bg-red-400 rounded-sm capitalize'>category</p>
                                <h2 className='capitalize font-medium  py-2 text-white hover:text-red-400 transition-all duration-500'>Photo of a girl in flowers</h2>
                                <div className='flex flex-col md:flex-row  gap-2 pb-3'>

                                    <p className='flex items-center gap-1 text-white hover:text-red-400 transition-all duration-500'><MdAccessTime />  <span>March 20, 2017</span></p>
                                    <p className='flex items-center gap-1 text-white hover:text-red-400 transition-all duration-500'><FaComment /> <span>5</span></p>
                                </div>
                            </div>
                        </div>


                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="flex items-end blog-card   h-[325px] relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">

                         
                            <div className='px-2'>
                                <p className='category inline-block text-white p-1 bg-red-400 rounded-sm capitalize'>category</p>
                                <h2 className='capitalize font-medium  py-2 text-white hover:text-red-400 transition-all duration-500'>Photo of a girl in flowers</h2>
                                <div className='flex flex-col md:flex-row  gap-2 pb-3'>

                                    <p className='flex items-center gap-1 text-white hover:text-red-400 transition-all duration-500'><MdAccessTime />  <span>March 20, 2017</span></p>
                                    <p className='flex items-center gap-1 text-white hover:text-red-400 transition-all duration-500'><FaComment /> <span>5</span></p>
                                </div>
                            </div>
                        </div>


                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="flex items-end blog-card   h-[325px] relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">

                         
                            <div className='px-2'>
                                <p className='category inline-block text-white p-1 bg-red-400 rounded-sm capitalize'>category</p>
                                <h2 className='capitalize font-medium  py-2 text-white hover:text-red-400 transition-all duration-500'>Photo of a girl in flowers</h2>
                                <div className='flex flex-col md:flex-row  gap-2 pb-3'>

                                    <p className='flex items-center gap-1 text-white hover:text-red-400 transition-all duration-500'><MdAccessTime />  <span>March 20, 2017</span></p>
                                    <p className='flex items-center gap-1 text-white hover:text-red-400 transition-all duration-500'><FaComment /> <span>5</span></p>
                                </div>
                            </div>
                        </div>


                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="flex items-end blog-card   h-[325px] relative group overflow-hidden shadow-bshadow bg-[linear-gradient(180deg,hsla(0,0%,6%,0)_41.54%,hsla(0,0%,6%,.621)_72.29%,#101010),url('/card.jpg')] bg-cover bg-center bg-no-repeat">

                         
                            <div className='px-2'>
                                <p className='category inline-block text-white p-1 bg-red-400 rounded-sm capitalize'>category</p>
                                <h2 className='capitalize font-medium  py-2 text-white hover:text-red-400 transition-all duration-500'>Photo of a girl in flowers</h2>
                                <div className='flex flex-col md:flex-row  gap-2 pb-3'>

                                    <p className='flex items-center gap-1 text-white hover:text-red-400 transition-all duration-500'><MdAccessTime />  <span>March 20, 2017</span></p>
                                    <p className='flex items-center gap-1 text-white hover:text-red-400 transition-all duration-500'><FaComment /> <span>5</span></p>
                                </div>
                            </div>
                        </div>


                    </SwiperSlide> */}

                </Swiper>
            </Container>

        </section>
    );
};

export default NewsPost;