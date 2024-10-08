import React, { useState } from 'react';
import Heading from '../share/Heading';
import { FaComment, FaUser } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Container from '../share/Container';
import { useGetBlogsQuery } from '../../Feature/postsAPI/postApi';

const FeaturePost = () => {
    const [sortOrder, setSortOrder] = useState('old');
    const { data } = useGetBlogsQuery({sortOrder})
    return (
        <div>
            <Heading text='Feature Post' ></Heading>
            <Container>
                <div className='mt-9 flex flex-col gap-9'>
                {data?.slice(10, 14).map((item,idx) => 
                    <div key={idx} className='flex flex-col lg:flex-row gap-6 items-center  group lg:h-[248px] h-auto '>
                        <div className=' h-full'>
                            <div className="image w-full lg:w-[329px]  h-full overflow-hidden">
                                <img src={item.image} alt="" className='group-hover:scale-125 w-full h-full object-cover transition-all duration-500' />
                            </div>
                        </div>

                        <div className="contant">
                            <p className='inline-block p-1 rounded-full bg-[#28a745] text-white text-sm'>{item.category}</p>
                            <h2 className='text-[#282830] text-xl uppercase '>{item.title}</h2>
                            <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaUser /> By <span>{item.userInfo.name}</span> </p>
                                <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><MdAccessTime />  <span>{item.createAt}</span></p>
                                <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                            </div>
                            <p className=' mt-3'>{item.discaption.discaption01.slice(0,185)}</p>
                            <Link to={`/blogs/${item._id}`}> <button className='mt-3 px-4 py-2 bg-[#214252] text-white hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500 uppercase rounded-md'>read more</button></Link>
                        </div>
                    </div>
                )}
                </div>
            </Container>

        </div>
    );
};

export default FeaturePost;