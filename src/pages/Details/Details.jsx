import React from 'react';
import Container from '../../components/share/Container';
import Image from '../../components/share/Image';
import Sidebar from '../../components/share/Sidebar';
import { FaComment, FaFacebookF, FaPinterestP, FaSkype, FaTags, FaTwitter, FaUser } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Details = () => {
    return (
        <div>
            <Container>
                <div className='flex gap-6 justify-between'>
                    <div>
                        <div className="image w-full h-auto ">
                            <Image src='/post-1.jpg'></Image>
                        </div>
                        <div className="content relative">
                            <p className='absolute -top-4 left-6   px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500'>category</p>
                            <h2 className='text-[25px] font-light uppercase tracking-[2.5px] leading-[33px] pt-9'>Photo of a girl in flowers</h2>
                            <div className='flex  items-center gap-2 mt-3'>
                                <p className='flex items-center gap-1 text-[#282830] font-medium uppercase tracking-[2.2px] leading-[26px] text-[11px] hover:text-[#7a7a85]'><FaUser /> By <span>Sojib Rahman</span> </p>
                                <p className='flex items-center gap-1 text-[#282830] font-medium uppercase tracking-[2.2px] leading-[26px] text-[11px] hover:text-[#7a7a85]'><MdAccessTime />  <span>March 20, 2017</span></p>
                                <p className='flex items-center gap-1 text-[#282830] font-medium uppercase tracking-[2.2px] leading-[26px] text-[11px] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                            </div>
                            <p className='leading-[26px] font-light text-[#181303] tracking-[1.3px]'>Progressively harness competitive partnerships vis-a-vis efficient users. Continually morph state of the art scenarios without client-focused infrastructures. Distinctively predominate one-to-one value whereas client-focused experiences. Conveniently simplify. Dramatically pontificate competitive initiatives after tactical internal or "organic" sources. Credibly leverage existing linkage with</p>
                            <p className='mt-6 leading-[26px] font-light text-[#181303] tracking-[1.3px]'>Progressively harness competitive partnerships vis-a-vis efficient users. Continually morph state of the art scenarios without client-focused infrastructures. Distinctively predominate one-to-one value whereas client-focused experiences. Conveniently simplify. Dramatically pontificate competitive initiatives after tactical internal or "organic" sources. Credibly leverage existing linkage with</p>
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
                                <div
                                    style={{
                                        backgroundImage: `linear-gradient(180deg, hsla(0, 0%, 6%, 0) 41.54%, hsla(0, 0%, 6%, 0.621) 72.29%, #101010), url('/card.jpg')`
                                    }}
                                    className="h-[350px] flex justify-end flex-col blog-card  relative group overflow-hidden shadow-bshadow  bg-cover bg-center bg-no-repeat">
                                    <div className='p-6'>
                                        <p className='category inline-block  text-white p-[2px] bg-[#7ee4e4] rounded-sm capitalize'>category</p>
                                        <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>The Master Of Human Happiness</h2>
                                        <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                            <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600' /> By <span>Sojib Rahman</span> </p>
                                            <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime className='text-red-600' />  <span>March 20, 2017</span></p>

                                        </div>
                                    </div>

                                </div>
                                <div
                                    style={{
                                        backgroundImage: `linear-gradient(180deg, hsla(0, 0%, 6%, 0) 41.54%, hsla(0, 0%, 6%, 0.621) 72.29%, #101010), url('/card.jpg')`
                                    }}
                                    className="h-[350px] flex justify-end flex-col blog-card  relative group overflow-hidden shadow-bshadow  bg-cover bg-center bg-no-repeat">
                                    <div className='p-6'>
                                        <p className='category inline-block  text-white p-[2px] bg-[#7ee4e4] rounded-sm capitalize'>category</p>
                                        <h2 className='capitalize tracking-widest py-3 text-xl text-white font-light'>The Master Of Human Happiness</h2>
                                        <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                            <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><FaUser className='text-red-600' /> By <span>Sojib Rahman</span> </p>
                                            <p className='flex items-center gap-1 text-white hover:text-[#7a7a85]'><MdAccessTime className='text-red-600' />  <span>March 20, 2017</span></p>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div class="bg-white border border-gray-100  w-full p-[30px]  mt-[50px] flex gap-6 items-center">
                            <div>
                                <div className="image w-[105px] h-[108px]">
                                    <Image src="/card.jpg"></Image>
                                </div>
                            </div>

                            <div className="content">
                                <h2 class="text-[#282830] text-[16px] font-normal leading-[28px] tracking-[1.6px] uppercase">Robert Godwin</h2>

                                <p class="text-[#282830] text-[12px] capitalize  leading-[28px] tracking-[2.4px]">March 20, 2017</p>

                                <p class="text-[#181303] font-light leading-[24px] tracking-[1.4px]">Efficiently reintermediate distinctive leadership through backend potentialities. Compellingly incentivize granular without standardized e-tailers.</p>
                            </div>
                        </div>
                        <h2 class="text-[#282830]  text-lg font-light tracking-[1.8px] leading-[26px] mt-16 mb-6 uppercase">leave your comment</h2>
                        <form action="" className='bg-white  hover:shadow-[0_4px_16px_rgba(17,17,26,0.1),_0_8px_32px_rgba(17,17,26,0.05)] inline-block w-full p-[30px] transition-all duration-500 '>


                            <div className='flex flex-col md:flex-row gap-3'>

                                <input type="text" placeholder="NAME :" name='name' className="mt-4 capitalize w-full px-4 py-2.5 text-base leading-[1.5] text-coolGray-900 font-normal outline-none focus:border-[#214252] border border-[#dddddd]  rounded-sm transition-all duration-500 " />
                                <input type="email" placeholder="EMAIL :" name='email' className="mt-4 capitalize  w-full px-4 py-2.5 text-base leading-[1.5] text-coolGray-900 font-normal outline-none focus:border-[#214252] border border-[#dddddd]  rounded-sm transition-all duration-500 " />
                            </div>
                            <textarea placeholder="COMMENT :" name='comment' rows='8' className="mt-4 capitalize  w-full  px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#214252] border border-[#dddddd]  rounded-sm transition-all duration-500 " />
                            <input type="number" placeholder="RATING :" name='title' className="mt-4 capitalize w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#214252] border border-[#dddddd]  rounded-sm transition-all duration-500 " />
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