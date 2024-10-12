import React, { useEffect, useState } from 'react';
import Container from '../../components/share/Container';
import Image from '../../components/share/Image';
import Sidebar from '../../components/share/Sidebar';
import { FaComment, FaFacebookF, FaPinterestP, FaSkype, FaTags, FaTwitter, FaUser } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';
import { useGetBlogsQuery } from '../../Feature/postsAPI/postApi';
import useAuth from '../../hook/useAuth';
import { useAddCommentMutation, useGetCommentQuery } from '../../Feature/commentAPI/commentApi';
import Swal from 'sweetalert2';

const Details = () => {

    const { user } = useAuth() || {}
    const blog = useLoaderData();
    const { data } = useGetBlogsQuery()
    const [AddComment] = useAddCommentMutation()
    const { data: comments } = useGetCommentQuery()
    const [relatedItem, setRelatedItem] = useState([])

    useEffect(() => {
        if (data && blog) {
            const relative = data.filter(item => item.category === blog.category)
            setRelatedItem(relative)
        }
    }, [data])


    const handleSubmit = async (e) => {

        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const comment = form.comment.value;
        const rating = form.rating.value;
        const createAt = (new Date()).toDateString();
        const username = user?.displayName;
        const usermail = user?.email;
        const userImage = user?.photoURL;
        const userInfo = { username, usermail, userImage }
        const info = {
            name, email, comment, rating, createAt, userInfo
        }
        try {
            await AddComment(info)
            Swal
                .fire({
                    position: "top-end",
                    icon: "success",
                    title: " comment  successful ",
                    showConfirmButton: false,
                    timer: 1500
                });
            form.reset();

        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " comment faile",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }

    return (
        <div>
            <Container>
                <div className='flex flex-col md:flex-row gap-6 justify-between'>
                    <div>
                        <div className="image w-full h-auto ">
                            <Image src={blog.image}></Image>
                        </div>
                        <div className="content relative">
                            <p className='absolute -top-4 left-6   px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500'>{blog.category}</p>
                            <h2 className='text-[25px] font-light uppercase tracking-[2.5px] leading-[33px] pt-9'>{blog.title}</h2>
                            <div className='flex  items-center gap-2 mt-3'>
                                <p className='flex items-center gap-1 text-[#282830] font-medium uppercase tracking-[2.2px] leading-[26px] text-[11px] hover:text-[#7a7a85]'><FaUser /> By <span>{blog.userInfo.name}</span> </p>
                                <p className='flex items-center gap-1 text-[#282830] font-medium uppercase tracking-[2.2px] leading-[26px] text-[11px] hover:text-[#7a7a85]'><MdAccessTime />  <span>{blog.createAt}</span></p>
                                <p className='flex items-center gap-1 text-[#282830] font-medium uppercase tracking-[2.2px] leading-[26px] text-[11px] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                            </div>
                            <p className='leading-[26px] font-light text-[#181303] tracking-[1.3px]'>{blog.discaption.discaption01}</p>
                            <p className='mt-6 leading-[26px] font-light text-[#181303] tracking-[1.3px]'>{blog.discaption.discaption02}</p>
                        </div>
                        <div className='flex justify-between mt-3'>
                            <div className='flex gap-2 items-center'>
                                <span><FaTags /></span>
                                <ul className='flex gap-1 items-center'>
                                    <li>
                                        <Link className='text-[#282830] text-[12px] uppercase tracking-[1.2px] mr-[10px]'> Audio,</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#282830] text-[12px] uppercase tracking-[1.2px] mr-[10px]'> Life Style,</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#282830] text-[12px] uppercase tracking-[1.2px] mr-[10px]'> Photographer,</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#282830] text-[12px] uppercase tracking-[1.2px] mr-[10px]'>Travel</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex gap-2'>
                                <span className='text-[16px] text-[#282830]'><FaFacebookF /></span>
                                <span className='text-[16px] text-[#282830]'><FaTwitter /></span>
                                <span className='text-[16px] text-[#282830]'><FaPinterestP /></span>
                                <span className='text-[16px] text-[#282830]'><FaSkype /></span>

                            </div>
                        </div>


                        <div className="relativeArtical my-16">
                            <h2 className='text-[28px] font-medium  leading-[1.7]'>Related Articles</h2>
                            <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 '>

                                {relatedItem?.slice(0, 2).map((item, idx) =>
                                    <Link to={`/blogs/${item._id}`} key={idx}>
                                        <div
                                            style={{
                                                backgroundImage: `linear-gradient(180deg, hsla(0, 0%, 6%, 0) 41.54%, hsla(0, 0%, 6%, 0.621) 72.29%, #101010), url('${item.image}')`
                                            }}
                                            className="h-[350px] flex justify-end flex-col blog-card  relative group overflow-hidden shadow-bshadow  bg-cover bg-center bg-no-repeat">

                                            <div className='p-6'>
                                                <p className='category inline-block  text-white p-[2px] bg-[#7ee4e4] rounded-sm capitalize'>{item.category}</p>
                                                <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>{item.title.slice(0, 38)}</h2>
                                                <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                                    <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600' /> By <span>{item.userInfo.name}</span> </p>
                                                    <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime className='text-red-600' />  <span>{item.createAt}</span></p>

                                                </div>
                                            </div>

                                        </div>
                                    </Link>

                                )}

                            </div>

                        </div>
                        {comments?.slice(0, 4).map((item,idx) =>
                            <div key={idx} class="bg-white border border-gray-100  w-full p-[30px]  mt-[50px] flex gap-6 items-center">
                                <div>
                                    <div className="image w-[105px] h-[108px]">
                                        <Image src={item.userInfo.userImage}></Image>
                                    </div>
                                </div>

                                <div className="content">
                                    <h2 class="text-[#282830] text-[16px] font-normal leading-[28px] tracking-[1.6px] uppercase">{item.name}</h2>

                                    <p class="text-[#282830] text-[12px] capitalize  leading-[28px] tracking-[2.4px]">{item.createAt}</p>

                                    <p class="text-[#181303] font-light leading-[24px] tracking-[1.4px]">{item.comment}</p>
                                </div>
                            </div>
                        )}

                        <h2 class="text-[#282830]  text-lg font-light tracking-[1.8px] leading-[26px] mt-16 mb-6 uppercase">leave your comment</h2>
                        <form onSubmit={handleSubmit} action="" className='bg-white  hover:shadow-[0_4px_16px_rgba(17,17,26,0.1),_0_8px_32px_rgba(17,17,26,0.05)] inline-block w-full p-[30px] transition-all duration-500 '>


                            <div className='flex flex-col md:flex-row gap-3'>

                                <input type="text" placeholder="NAME :" name='name' className="mt-4 capitalize w-full px-4 py-2.5 text-base leading-[1.5] text-coolGray-900 font-normal outline-none focus:border-[#214252] border border-[#dddddd]  rounded-sm transition-all duration-500 " />
                                <input type="email" placeholder="EMAIL :" name='email' className="mt-4 capitalize  w-full px-4 py-2.5 text-base leading-[1.5] text-coolGray-900 font-normal outline-none focus:border-[#214252] border border-[#dddddd]  rounded-sm transition-all duration-500 " />
                            </div>
                            <textarea placeholder="COMMENT :" name='comment' rows='8' className="mt-4 capitalize  w-full  px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#214252] border border-[#dddddd]  rounded-sm transition-all duration-500 resize-none" />
                            <input type="number" placeholder="RATING :" min={1} max={5} name='rating' className="mt-4 capitalize w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#214252] border border-[#dddddd]  rounded-sm transition-all duration-500 " />
                            <input type="submit" value="post comment" className='mt-6 inline-block py-2 px-4 border uppercase bg-[#214252] text-white rounded-sm' />


                        </form>



                    </div>
                    <div>
                        <Sidebar></Sidebar>
                    </div>
                </div>




            </Container>
        </div>
    );
};

export default Details;