import React from 'react';
import { FaComment, FaUser } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import { Link } from 'react-router-dom';

const BlogCard = ({item}) => {
    return (
        <div className="w-full  border relative group hover:shadow-custom transition-all duration-500">
            <div className="image relative w-full  h-[325px] overflow-hidden">
                <img src={item.image} alt="" className='group-hover:scale-125 w-full h-full object-content transition-all duration-500' />

            </div>
            <div className="content py-10 px-4 relative">
                <p className='absolute -top-4 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500'> {item.category}</p>
                <h2 className='text-[#282830] text-xl uppercase text-center'>{item.title}</h2>
                <div className='flex flex-col md:flex-row justify-center items-center gap-2 mt-3'>
                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaUser /> By <span>{item.userInfo.name}</span> </p>
                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><MdAccessTime />  <span>{item.createAt}</span></p>
                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                </div>
                <p className='text-center mt-3'>Progressively harness competitive partnerships vis-a-vis efficient users. Continually morph state of the art scenarios without client-focused infrastructures. Distinctively predominate one-to-one value whereas client-focused experiences. Conveniently simplify.</p>

            </div>
            <div className='relative'>
            <Link  to={`/blogs/${item._id}`} ><button className=' absolute -bottom-4 left-1/2  -translate-x-1/2 mt-6 inline-block py-2 px-4 border uppercase bg-[#214252] text-white rounded-sm '>read more</button></Link>  
            </div>
          
        </div>
    );
};

export default BlogCard;