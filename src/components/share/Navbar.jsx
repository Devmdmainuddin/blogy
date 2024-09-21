import React, { useState } from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <nav>
            <div className=' bg-[#214252] py-6'>
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

                                <li className=''><Link>home</Link></li>
                                <li><Link> culture </Link></li>
                                <li><Link> business</Link></li>
                                <li><Link> politics</Link></li>
                            </ul>
                        </div>

                        <div >
                            <input type="text" name="" className='py-2 px-3 border border-[#9aa7b4] text-[#dcdfe2] outline-none bg-[#2b4b5b]' id="" placeholder='search...' />
                        </div>
                        <div className='inline-block md:hidden'>
                            <button onClick={() => setShow(!show)} ><IoMenu className='text-2xl text-[#dcdfe2]' /> </button>
                        </div>
                    </div>
                    <div className={` md:hidden text-center  z-50 gap-6  capitalize text-[#dcdfe2] w-[250px] bg-[#214252]   absolute top-0 transition-all duration-700 ${show ? ' right-0 ' : '-right-full'}    `}>
                            <div className=' md:hidden flex justify-end'>
                                <button onClick={() => setShow(!show)} className='p-2 rounded-full border m-4'><IoClose className='text-2xl text-[#dcdfe2]' /> </button>
                            </div>
                            <ul className='flex items-center flex-col gap-3 py-6'>

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