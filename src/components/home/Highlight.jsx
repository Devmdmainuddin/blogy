import React, { useState } from 'react';
import Heading from '../share/Heading';
import Container from '../share/Container';
import { FaComment, FaFacebookF, FaLocationArrow, FaPinterest, FaSkype, FaUser } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import { IoLogoTwitter } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CiLocationArrow1 } from 'react-icons/ci';
import Sidebar from '../share/Sidebar';
import { useGetBlogsQuery } from '../../Feature/postsAPI/postApi';

const Highlight = () => {
    const [sortOrder, setSortOrder] = useState('new');
    const { data } = useGetBlogsQuery({sortOrder})
    return (
        <div>
            <Heading text='Today Highlight Post'></Heading>

            <Container>
                <div>
                    <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                        {data?.slice(0, 4).map((item,idx) => 
                        <div key={idx} className="w-full   relative group shadow-[rgba(0,0,0,0.1)_0px_10px_50px] transition-all duration-500">
                            <div className="image relative w-full  h-[325px] overflow-hidden">
                                <img src={item.image} alt="" className='group-hover:scale-125 w-full h-full object-content transition-all duration-500' />

                            </div>
                            <div className="content py-10 px-4 relative">
                                <p className='absolute -top-4 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500'>{item.category}</p>
                                <Link to={`/blogs/${item._id}`}> <h2 className='text-[#282830] hover:text-lime-900 text-xl uppercase text-center cursor-pointer transition-all duration-500'>{item.title}</h2></Link>  
                                <div className='flex flex-col md:flex-row justify-center items-center gap-2 mt-3'>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaUser /> By <span>{item.userInfo.name}</span> </p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><MdAccessTime />  <span>{item.createAt}</span></p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                                </div>
                                <p className='text-center mt-3'>{item.discaption.discaption01}</p>

                            </div>

                        </div>)}


                    </div>
                </div>


            </Container>

        </div>
    );
};

export default Highlight;