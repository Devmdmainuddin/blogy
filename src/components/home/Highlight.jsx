import React from 'react';
import Heading from '../share/Heading';
import Container from '../share/Container';
import { FaComment, FaFacebookF, FaLocationArrow, FaPinterest, FaSkype, FaUser } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import { IoLogoTwitter } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CiLocationArrow1 } from 'react-icons/ci';
import Sidebar from '../share/Sidebar';

const Highlight = () => {
    return (
        <div>
            <Heading text='Today Highlight Post'></Heading>

            <Container>
                <div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                        <div className="w-full   border relative group hover:border-red-600 transition-all duration-500">
                            <div className="image relative w-full  h-[325px] overflow-hidden">
                                <img src="/card.jpg" alt="" className='group-hover:scale-125 w-full h-full object-content transition-all duration-500' />

                            </div>
                            <div className="content py-10 px-4 relative">
                                <p className='absolute -top-4 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500'>category</p>
                                <h2 className='text-[#282830] text-xl uppercase text-center'>Photo of a girl in flowers</h2>
                                <div className='flex flex-col md:flex-row justify-center items-center gap-2 mt-3'>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaUser /> By <span>Sojib Rahman</span> </p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><MdAccessTime />  <span>March 20, 2017</span></p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                                </div>
                                <p className='text-center mt-3'>Progressively harness competitive partnerships vis-a-vis efficient users. Continually morph state of the art scenarios without client-focused infrastructures. Distinctively predominate one-to-one value whereas client-focused experiences. Conveniently simplify.</p>

                            </div>
                            <button className=' absolute -bottom-4 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500 uppercase'>read more</button>
                        </div>
                        <div className="w-full   border relative group hover:border-red-600 transition-all duration-500">
                            <div className="image relative w-full  h-[325px] overflow-hidden">
                                <img src="/card.jpg" alt="" className='group-hover:scale-125 w-full h-full object-content transition-all duration-500' />

                            </div>
                            <div className="content py-10 px-4 relative">
                                <p className='absolute -top-4 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500'>category</p>
                                <h2 className='text-[#282830] text-xl uppercase text-center'>Photo of a girl in flowers</h2>
                                <div className='flex justify-center items-center gap-2 mt-3'>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaUser /> By <span>Sojib Rahman</span> </p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><MdAccessTime />  <span>March 20, 2017</span></p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                                </div>
                                <p className='text-center mt-3'>Progressively harness competitive partnerships vis-a-vis efficient users. Continually morph state of the art scenarios without client-focused infrastructures. Distinctively predominate one-to-one value whereas client-focused experiences. Conveniently simplify.</p>

                            </div>
                            <button className=' absolute -bottom-4 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500 uppercase'>read more</button>
                        </div>
                        <div className="w-full   border relative group hover:border-red-600 transition-all duration-500">
                            <div className="image relative w-full  h-[325px] overflow-hidden">
                                <img src="/card.jpg" alt="" className='group-hover:scale-125 w-full h-full object-content transition-all duration-500' />

                            </div>
                            <div className="content py-10 px-4 relative">
                                <p className='absolute -top-4 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500'>category</p>
                                <h2 className='text-[#282830] text-xl uppercase text-center'>Photo of a girl in flowers</h2>
                                <div className='flex justify-center items-center gap-2 mt-3'>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaUser /> By <span>Sojib Rahman</span> </p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><MdAccessTime />  <span>March 20, 2017</span></p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                                </div>
                                <p className='text-center mt-3'>Progressively harness competitive partnerships vis-a-vis efficient users. Continually morph state of the art scenarios without client-focused infrastructures. Distinctively predominate one-to-one value whereas client-focused experiences. Conveniently simplify.</p>

                            </div>
                            <button className=' absolute -bottom-4 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500 uppercase'>read more</button>
                        </div>
                        <div className="w-full   border relative group hover:border-red-600 transition-all duration-500">
                            <div className="image relative w-full  h-[325px] overflow-hidden">
                                <img src="/card.jpg" alt="" className='group-hover:scale-125 w-full h-full object-content transition-all duration-500' />

                            </div>
                            <div className="content py-10 px-4 relative">
                                <p className='absolute -top-4 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500'>category</p>
                                <h2 className='text-[#282830] text-xl uppercase text-center'>Photo of a girl in flowers</h2>
                                <div className='flex justify-center items-center gap-2 mt-3'>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaUser /> By <span>Sojib Rahman</span> </p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><MdAccessTime />  <span>March 20, 2017</span></p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                                </div>
                                <p className='text-center mt-3'>Progressively harness competitive partnerships vis-a-vis efficient users. Continually morph state of the art scenarios without client-focused infrastructures. Distinctively predominate one-to-one value whereas client-focused experiences. Conveniently simplify.</p>

                            </div>
                            <button className=' absolute -bottom-4 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500 uppercase'>read more</button>
                        </div>
                    </div>
                    <div className='mt-9'>
                        <Heading text='Feature Post' ></Heading>
                        <div className='mt-9 flex flex-col gap-9'>

                            <div className='flex flex-col lg:flex-row gap-6 items-center  group lg:h-[248px] h-auto '>
                                <div className=' h-full'>
                                    <div className="image w-full lg:w-[329px]  h-full overflow-hidden">
                                        <img src="/card.jpg" alt="" className='group-hover:scale-125 w-full h-full object-cover transition-all duration-500' />
                                    </div>
                                </div>

                                <div className="contant">
                                    <p className='inline-block p-1 rounded-full bg-[#28a745] text-white text-sm'>category</p>
                                    <h2 className='text-[#282830] text-xl uppercase '>Photo of a girl in flowers</h2>
                                    <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                        <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaUser /> By <span>Sojib Rahman</span> </p>
                                        <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><MdAccessTime />  <span>March 20, 2017</span></p>
                                        <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                                    </div>
                                    <p className=' mt-3'>Progressively harness competitive partnerships vis-a-vis efficient users. Continually morph state of the art scenarios without client-focused infrastructures. Distinctively predominate one-to-one value whereas client-focused experiences. Conveniently simplify.</p>
                                    <button className='mt-3 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500 uppercase rounded-md'>read more</button>
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-6 items-center  group lg:h-[248px] h-auto '>
                                <div className=' h-full'>
                                    <div className="image w-full lg:w-[329px]  h-full overflow-hidden">
                                        <img src="/card.jpg" alt="" className='group-hover:scale-125 w-full h-full object-cover transition-all duration-500' />
                                    </div>
                                </div>

                                <div className="contant">
                                    <p className='inline-block p-1 rounded-full bg-[#28a745] text-white text-sm'>category</p>
                                    <h2 className='text-[#282830] text-xl uppercase '>Photo of a girl in flowers</h2>
                                    <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                        <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaUser /> By <span>Sojib Rahman</span> </p>
                                        <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><MdAccessTime />  <span>March 20, 2017</span></p>
                                        <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                                    </div>
                                    <p className=' mt-3'>Progressively harness competitive partnerships vis-a-vis efficient users. Continually morph state of the art scenarios without client-focused infrastructures. Distinctively predominate one-to-one value whereas client-focused experiences. Conveniently simplify.</p>
                                  <Link > <button className='mt-3 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500 uppercase rounded-md'>read more</button></Link>  
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-6 items-center  group lg:h-[248px] h-auto '>
                                <div className=' h-full'>
                                    <div className="image w-full lg:w-[329px]  h-full overflow-hidden">
                                        <img src="/card.jpg" alt="" className='group-hover:scale-125 w-full h-full object-cover transition-all duration-500' />
                                    </div>
                                </div>

                                <div className="contant">
                                    <p className='inline-block p-1 rounded-full bg-[#28a745] text-white text-sm'>category</p>
                                    <h2 className='text-[#282830] text-xl uppercase '>Photo of a girl in flowers</h2>
                                    <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                        <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaUser /> By <span>Sojib Rahman</span> </p>
                                        <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><MdAccessTime />  <span>March 20, 2017</span></p>
                                        <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                                    </div>
                                    <p className=' mt-3'>Progressively harness competitive partnerships vis-a-vis efficient users. Continually morph state of the art scenarios without client-focused infrastructures. Distinctively predominate one-to-one value whereas client-focused experiences. Conveniently simplify.</p>
                                    <button className='mt-3 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500 uppercase rounded-md'>read more</button>
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-6 items-center  group lg:h-[248px] h-auto '>
                                <div className=' h-full'>
                                    <div className="image w-full lg:w-[329px]  h-full overflow-hidden">
                                        <img src="/card.jpg" alt="" className='group-hover:scale-125 w-full h-full object-cover transition-all duration-500' />
                                    </div>
                                </div>

                                <div className="contant">
                                    <p className='inline-block p-1 rounded-full bg-[#28a745] text-white text-sm'>category</p>
                                    <h2 className='text-[#282830] text-xl uppercase '>Photo of a girl in flowers</h2>
                                    <div className='flex flex-col md:flex-row  gap-2 mt-3'>
                                        <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaUser /> By <span>Sojib Rahman</span> </p>
                                        <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><MdAccessTime />  <span>March 20, 2017</span></p>
                                        <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                                    </div>
                                    <p className=' mt-3'>Progressively harness competitive partnerships vis-a-vis efficient users. Continually morph state of the art scenarios without client-focused infrastructures. Distinctively predominate one-to-one value whereas client-focused experiences. Conveniently simplify.</p>
                                    <button className='mt-3 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500 uppercase rounded-md'>read more</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </Container>

        </div>
    );
};

export default Highlight;