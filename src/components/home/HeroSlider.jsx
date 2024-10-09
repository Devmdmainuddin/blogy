
import Container from '../share/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { FaUser } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import usePosts from '../../hook/usePosts';
import { useEffect, useState } from 'react';
import { useGetBlogsQuery } from '../../Feature/postsAPI/postApi';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
    const { data } = useGetBlogsQuery()
    const [posts] = usePosts()
    const [lifeStyle, setLifeStyle] = useState([])
    const [travel, setTravel] = useState([])
    const [politics, setPolitics] = useState([])
    const [technology, setTechnology] = useState([])
    const [business, setBusiness] = useState([])
    useEffect(() => {
        if (data?.length > 0) {
            const lifestylePosts = data?.filter((item) => item.category === 'Lifestyle');
            const travelPosts = data?.filter((item) => item.category === 'Travel');
            const politicsPosts = data?.filter((item) => item.category === 'Politics');
            const technologyPosts = data?.filter((item) => item.category === 'technology');
            const healthPosts = data?.filter((item) => item.category === 'Business');
            setPolitics(politicsPosts)
            setLifeStyle(lifestylePosts);
            setTravel(travelPosts);
            setTechnology(technologyPosts);
            setBusiness(healthPosts)

        }
    }, [data]);

    return (
        <div >
            <Container>
                <div className=' grid lg:grid-cols-3 md:grid-cols-2 md:grid-rows-3 grid-cols-1 lg:grid-rows-2  gap-6'>
                    {/* lifeStyle */}
                    <div className=' lg:row-start-1 lg:row-end-2 lg:row-span-2 md:row-start-2 '>
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
                            {lifeStyle.slice(0, 4).map((item, idx) =>
                                <SwiperSlide key={idx} className='h-[220px] '>
                                    <Link to={`/blogs/${item._id}`}>
                                    <div
                                        style={{
                                            backgroundImage: `linear-gradient(180deg, hsla(0, 0%, 6%, 0) 41.54%, hsla(0, 0%, 6%, 0.621) 72.29%, #101010), url('${item.image}')`
                                        }}
                                        className=" flex justify-end flex-col blog-card h-full relative group overflow-hidden shadow-bshadow bg-cover bg-center bg-no-repeat">
                                        <div className='p-6'>
                                            <p className='category inline-block  text-white p-[2px] bg-[#ffc107] rounded-sm capitalize'>{item.category}</p>
                                            <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>{item.title.slice(0,38)}</h2>
                                            <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                                <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600' /> By <span>{item.userInfo.name}</span> </p>
                                                <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime className='text-red-600' />  <span>{item.createAt}</span></p>

                                            </div>
                                        </div>

                                    </div>
                                    </Link>
                                    
                                </SwiperSlide>
                            )}


                        </Swiper>

                    </div>
                    {/* travel */}
                    <div className=' lg:row-span-3 lg:col-start-1 md:row-start-3 '>
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
                            {travel.slice(0, 4).map((item, idx) =>
                                <SwiperSlide key={idx} className='h-[220px]'>
                                      <Link to={`/blogs/${item._id}`}>
                                      <div
                                        style={{
                                            backgroundImage: `linear-gradient(180deg, hsla(0, 0%, 6%, 0) 41.54%, hsla(0, 0%, 6%, 0.621) 72.29%, #101010), url('${item.image}')`
                                        }}
                                        className="flex justify-end flex-col blog-card h-full relative group overflow-hidden shadow-bshadow bg-cover bg-center bg-no-repeat">
                                        <div className='p-6'>
                                            <p className='category inline-block  text-white p-[2px] bg-[#ffc107] rounded-sm capitalize'>{item.category}</p>
                                            <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>{item.title.slice(0,38)}</h2>
                                            <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                                <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600' /> By <span>{item.userInfo.name}</span> </p>
                                                <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime className='text-red-600' />  <span>{item.createAt}</span></p>
                                            </div>
                                        </div>

                                    </div>
                                      </Link>
                                   
                                </SwiperSlide>
                            )}


                        </Swiper>
                    </div>
                    {/* politics */}
                    <div className=' lg:row-span-full lg:col-start-2 lg:col-end-3  md:col-span-2 md:row-start-1 h-[220px] lg:h-full'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={false}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                            }}
                            loop={true}
                            modules={[Autoplay]}
                            className="mySwiper h-full lg:h-full"
                        >
                            {politics?.map((item, idx) =>
                                <SwiperSlide key={idx} className="  ">
                                   <Link to={`/blogs/${item._id}`}>
                                   <div
                                        style={{
                                            backgroundImage: `linear-gradient(180deg, hsla(0, 0%, 6%, 0) 41.54%, hsla(0, 0%, 6%, 0.621) 72.29%, #101010), url('${item.image}')`
                                        }}
                                        className="flex justify-end flex-col blog-card h-full relative group overflow-hidden shadow-bshadow  bg-cover bg-center bg-no-repeat">
                                        <div className='p-6'>
                                            <p className='category inline-block  text-white p-[2px] bg-[#7ee4e4] rounded-sm capitalize'>{item.category}</p>
                                            <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>{item.title.slice(0,38)}</h2>
                                            <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                                <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600' /> By <span>{item.userInfo.name}</span> </p>
                                                <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime className='text-red-600' />  <span>{item.createAt}</span></p>
                                            </div>
                                        </div>

                                    </div>
                                   </Link>
                                    
                                </SwiperSlide>
                            )}

                        </Swiper>



                    </div>
                    {/* technology */}
                    <div className=' lg:row-start-1 lg:col-start-3 lg:col-end-4 '>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={false}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: true,
                            }}


                            loop={true}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            {technology.slice(0, 4).map((item, idx) =>
                                <SwiperSlide key={idx} className='h-[220px]'>
                                      <Link to={`/blogs/${item._id}`}>
                                      <div
                                        style={{
                                            backgroundImage: `linear-gradient(180deg, hsla(0, 0%, 6%, 0) 41.54%, hsla(0, 0%, 6%, 0.621) 72.29%, #101010), url('${item.image}')`
                                        }}
                                        className="flex justify-end flex-col blog-card h-full relative group overflow-hidden shadow-bshadow bg-cover bg-center bg-no-repeat">
                                        <div className='p-6'>
                                            <p className='category inline-block  text-white p-[2px] bg-[#ffc107] rounded-sm capitalize'>{item.category}</p>
                                            <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>{item.title.slice(0,38)}</h2>
                                            <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                                <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600' /> By <span>{item.userInfo.name}</span> </p>
                                                <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime className='text-red-600' />  <span>{item.createAt}</span></p>
                                            </div>
                                        </div>

                                    </div>
                                      </Link>
                                   
                                </SwiperSlide>
                            )}


                        </Swiper>
                    </div>
                    {/* business */}
                    <div className=' lg:row-span-2 lg:col-start-3 lg:col-end-4 '>
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
                            {business.slice(0, 4).map((item, idx) =>
                                <SwiperSlide key={idx} className='h-[220px]'>
                                   <Link to={`/blogs/${item._id}`}>
                                   <div
                                        style={{
                                            backgroundImage: `linear-gradient(180deg, hsla(0, 0%, 6%, 0) 41.54%, hsla(0, 0%, 6%, 0.621) 72.29%, #101010), url('${item.image}')`
                                        }}
                                        className="flex justify-end flex-col blog-card h-full relative group overflow-hidden shadow-bshadow bg-cover bg-center bg-no-repeat">
                                        <div className='p-6'>
                                            <p className='category inline-block  text-white p-[2px] bg-[#ffc107] rounded-sm capitalize'>{item.category}</p>
                                            <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>{item.title.slice(0,38)}</h2>
                                            <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                                <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600' /> By <span>{item.userInfo.name}</span> </p>
                                                <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime className='text-red-600' />  <span>{item.createAt}</span></p>
                                            </div>
                                        </div>

                                    </div>
                                   </Link>  
                                  
                                </SwiperSlide>
                            )}


                        </Swiper>
                    </div>
                </div>
            </Container>
        </div>


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