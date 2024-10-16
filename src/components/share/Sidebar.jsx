import React, { useEffect, useState } from 'react';
import { FaComment, FaFacebookF, FaLocationArrow, FaPinterest, FaSkype, FaUser } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import { IoLogoTwitter } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { CiLocationArrow1 } from 'react-icons/ci';
import { useGetBlogsQuery } from '../../Feature/postsAPI/postApi';
const Sidebar = () => {

    const [sortOrder, setSortOrder] = useState('new');
    const { data } = useGetBlogsQuery({ sortOrder })
    const [categoryItem, setCaregory] = useState([])
    const [tagsItem, setTagsItem] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        setCaregory([... new Set(data?.map(item => item.category))])
        setTagsItem([... new Set(data?.map(item => item?.tags?.tag01))])
    }, [data])

    const handleCategoryFilter = (category) => {
        navigate(`/blogs?category=${encodeURIComponent(category)}`);
    };
    const handleTagFilter = (tag) => {
        navigate(`/blogs?tag=${encodeURIComponent(tag)}`);
    };

    return (
        <div className="sidebar w-full md:w-[320px]">
            {/* widget */}
            <div className='mx-6 md:mx-0 p-6 md:p-0 relative bg-white shadow-custom transition-all duration-500'>
                <div className="image">
                    <img src="/c-1.jpg" alt="profile" className='group-hover:scale-125 w-full h-full object-content transition-all duration-500' />
                </div>
                <div className="contant py-8 px-2">
                    <p className='text-center mt-3'>Authoritatively orchestrate superior channels after wireless portals. users after professional Continually morph state</p>
                </div>
                <button className=' absolute -bottom-4 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500 uppercase'>about me</button>
            </div>
            {/* widget */}
            <div className='my-16 mx-6 md:mx-0 p-6 shadow-custom transition-all duration-500'>
                <h2 className='text-xl text-[#282830] pt-6 text-center tracking-widest uppercase font-light'>Follow Us</h2>
                <div className='mt-3 bg-white flex justify-center items-center gap-2 text-[#282830] py-6 px-2'>
                    <Link><FaFacebookF /></Link>
                    <Link><IoLogoTwitter /></Link>
                    <Link> <FaPinterest /></Link>
                    <Link><FaSkype /></Link>

                </div>
            </div>
            {/* widget */}
            <div className='my-16 mx-6 md:mx-0 p-6 shadow-custom transition-all duration-500'>
                <h2 className='text-xl text-[#282830] pt-6 text-center tracking-widest uppercase font-light'>CATEGORIES</h2>
                <ul className='mt-6 bg-white py-6 px-4'>
                    {categoryItem?.map((item, idx) => <li key={idx} onClick={() => handleCategoryFilter(item)} className='my-2 '> <Link className='flex gap-6 items-center  text-[#282830] hover:text-[#27b0f5] transition-all duration-500 hover:ml-1'><CiLocationArrow1 /> <span className='uppercase'>{item}</span></Link></li>)}



                </ul>

            </div>
            {/* ads */}
            <div className='mt-9 mx-6 md:mx-0  bg-slate-600 p-6 h-[190px] flex justify-center items-center shadow-custom transition-all duration-500'>
                <p className=' capitalize  text-white'>ads </p>
            </div>
            <div className='mt-16 mx-6 md:mx-0 p-6 md:p-0 shadow-custom transition-all duration-500'>
                <h2 className='text-xl text-[#282830] pt-6 text-center tracking-widest uppercase font-light'>Recent Posts</h2>
                <div className='mt-9 bg-white p-6'>
                    {data?.slice(0, 4).map((item,idx) =>
                        <Link to={`/blogs/${item._id}`} key={idx}>
                            <div className='flex gap-2 group mt-6'>
                                <div>
                                    <div className="image  w-[73px] h-[73px] overflow-hidden">
                                        <img src={item.image} alt="" className='group-hover:scale-125  w-full h-full object-cover transition-all duration-500' />
                                    </div>
                                </div>

                                <div className="content">
                                    <p className='flex items-center text-[#282830] hover:text-[#7a7a85]'>  <span>{item.createAt}</span></p>
                                    <h2 className='text-[#282830] hover:text-[#7a7a85]'>{item.title.slice(0, 32)}</h2>
                                </div>
                            </div>
                        </Link>

                    )}




                </div>
            </div>
            <div className='mt-16 mx-6 md:mx-0 p-6 shadow-custom transition-all duration-500'>
                <h2 className='text-xl text-[#282830] pt-6 text-center tracking-widest uppercase font-light'>newslletter</h2>
                <div className='mt-9 bg-white p-6'>
                    <form action="" className='flex flex-col '>
                        <input type="email" name="" id="" placeholder='Your Mail' className='py-2 text-sm border-none outline-none bg-slate-100 px-3' />
                        <input type="submit" value="SIGN UP" className='bg-black text-white py-2 mt-3 text-sm font-light' />
                    </form>
                </div>
            </div>

            <div className='mt-16 mx-6 md:mx-0 p-6 shadow-custom transition-all duration-500'>
                <h2 className='text-xl text-[#282830] pt-6 text-center tracking-widest uppercase font-light'>Tags</h2>
                <div className='mt-9 bg-white p-6 rounded-md'>
                {tagsItem?.map((item,idx)=>
                                <span onClick={()=>handleTagFilter(item)} key={idx} className='text-[#282830] hover:text-white hover:bg-[#282830] text-center tracking-widest uppercase font-light p-2 border mr-2 mb-2 inline-block transition-all duration-500'>{item} </span>
                            )}

                </div>
            </div>


        </div>
    );
};

export default Sidebar;