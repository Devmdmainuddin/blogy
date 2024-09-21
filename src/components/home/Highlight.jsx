import React from 'react';
import Heading from '../share/Heading';
import Container from '../share/Container';
import { FaComment, FaUser } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';

const Highlight = () => {
    return (
        <div>
            <Heading text='Today Highlight Post'></Heading>
            <Container>
                <div className="main">
                    <div className='flex flex-wrap gap-6'>
                        <div className="w-full  sm:w-[325px]  ">
                            <div className="image relative w-full sm:w-[325px] h-[325px]">
                                <img src="/card.jpg" alt="" className='w-full h-full object-content' />
                                <p className='absolute -bottom-6 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500'>category</p>
                            </div>
                            <div className="content py-10 relative">
                                <h2 className='text-[#282830] text-xl uppercase text-center'>Photo of a girl in flowers</h2>
                                <div className='flex justify-center items-center gap-2 mt-3'>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaUser /> By <span>Sojib Rahman</span> </p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><MdAccessTime />  <span>March 20, 2017</span></p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                                </div>
                                <p className='text-center mt-3'>Progressively harness competitive partnerships vis-a-vis efficient users. Continually morph state of the art scenarios without client-focused infrastructures. Distinctively predominate one-to-one value whereas client-focused experiences. Conveniently simplify.</p>



                                <button className=' absolute -bottom-6 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500 uppercase'>read more</button>
                            </div>

                        </div>
                        <div className="  w-[375px]  border">
                            <div className="image relative w-[375px] h-[325px]">
                                <img src="/card.jpg" alt="" className='w-full h-full object-content' />
                                <p className='absolute -bottom-6 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500'>category</p>
                            </div>
                            <div className="content py-10 px-4 relative">
                                <h2 className='text-[#282830] text-xl uppercase text-center'>Photo of a girl in flowers</h2>
                                <div className='flex justify-center items-center gap-2 mt-3'>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaUser /> By <span>Sojib Rahman</span> </p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><MdAccessTime />  <span>March 20, 2017</span></p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                                </div>
                                <p className='text-center mt-3'>Progressively harness competitive partnerships vis-a-vis efficient users. Continually morph state of the art scenarios without client-focused infrastructures. Distinctively predominate one-to-one value whereas client-focused experiences. Conveniently simplify.</p>



                                <button className=' absolute -bottom-6 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500 uppercase'>read more</button>
                            </div>

                        </div>
                        <div className="  w-[325px]  ">
                            <div className="image relative w-[325px] h-[325px]">
                                <img src="/card.jpg" alt="" className='w-full h-full object-content' />
                                <p className='absolute -bottom-6 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500'>category</p>
                            </div>
                            <div className="content py-10 relative">
                                <h2 className='text-[#282830] text-xl uppercase text-center'>Photo of a girl in flowers</h2>
                                <div className='flex justify-center items-center gap-2 mt-3'>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaUser /> By <span>Sojib Rahman</span> </p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><MdAccessTime />  <span>March 20, 2017</span></p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                                </div>
                                <p className='text-center mt-3'>Progressively harness competitive partnerships vis-a-vis efficient users. Continually morph state of the art scenarios without client-focused infrastructures. Distinctively predominate one-to-one value whereas client-focused experiences. Conveniently simplify.</p>



                                <button className=' absolute -bottom-6 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500 uppercase'>read more</button>
                            </div>

                        </div>


                    </div>
                </div>

                <div className="sidebar">

                </div>

            </Container>

        </div>
    );
};

export default Highlight;