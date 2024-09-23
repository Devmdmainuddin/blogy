import React, { useState } from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
    const [show, setShow] = useState(false)
    const [showPro, setShowPro] = useState(false)
    return (
        <nav>
            <div className=' bg-[#214252] py-6 overflow-hidden'>
                <Container>
                    {/* full width large  */}
                    <div className='flex justify-between items-center relative'>
                        <div className="logo ">
                            <Link><h3 className='text-xl font-medium capitalize text-white'>blogy </h3></Link>
                        </div>
                        <div className={`hidden md:flex text-center  gap-6 md:static capitalize text-[#dcdfe2] w-[250px] md:w-auto  bg-[#214252] md:bg-transparent transition-all duration-700`}>
                            <div className=' md:hidden flex justify-end'>
                                <button onClick={() => setShow(!show)} className='p-2 rounded-full border m-4'><IoClose className='text-2xl text-[#dcdfe2]' /> </button>
                            </div>
                            <ul className='md:flex gap-6'>

                                <li className=''><Link to='/'>home</Link></li>
                                <li><Link to='/blogs'> culture </Link></li>
                                <li><Link to='/blogs'> business</Link></li>
                                <li><Link to='/blogs'> politics</Link></li>
                            </ul>
                        </div>

                        <div className='flex gap-3 relative'>
                            <input type="text" name="" className='py-2 px-3 border border-[#9aa7b4] text-[#dcdfe2] outline-none bg-[#2b4b5b]' id="" placeholder='search...' />
                            <img onClick={() => setShowPro(!showPro)} src="/user.png" alt="" className='md:inline-block hidden author w-10 h-10 rounded-full  border-2 border-white' />
                            
                        </div>
                        <div className='inline-block md:hidden'>
                            <button onClick={() => setShow(!show)} ><IoMenu className='text-2xl text-[#dcdfe2]' /> </button>
                        </div>
                    </div>
                    <div className={`hidden md:flex gap-2 p-4 z-[100]   capitalize text-[#dcdfe2]  bg-[#808182]   absolute top-[72px] transition-all duration-700 ${showPro ? ' right-6 ' : ' -right-full'}    `}>
                              <Link to='/dashboard'> <button className='p-2 border'>my profile</button>
                              <button className='p-2 border'>Login</button> </Link> 
                            </div>
                    <div className={` md:hidden text-center  z-50 gap-6  capitalize text-[#dcdfe2] w-[250px] bg-[#214252]   absolute top-0 transition-all duration-700 ${show ? ' right-6 ' : '-right-full'}    `}>
                        <div className=' md:hidden flex justify-around items-center'>
                            <img onClick={() => setShowPro(!showPro)} src="/user.png" alt="" className='inline-block md:hidden author w-10 h-10 rounded-full  border-2 border-white' />
                            <button onClick={() => setShow(!show)} className='p-2 rounded-full border m-4'><IoClose className='text-2xl text-[#dcdfe2]' /> </button>
                        </div>
                        <ul className='flex items-start flex-col gap-3 p-6 '>

                            <li className=''><Link>home</Link></li>
                            <li><Link> culture </Link></li>
                            <li><Link> business</Link></li>
                            <li><Link> politics</Link></li>
                        </ul>
                    </div>
                </Container>

            </div>
        </nav>

    );
};

export default Navbar;