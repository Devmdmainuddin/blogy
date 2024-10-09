import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Container from './Container';
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { IoIosCall } from 'react-icons/io';
import { CiLocationArrow1 } from 'react-icons/ci';

const FooterLi = ({ text, to, className }) => {
    return (
        <li className=''>
            <Link to={to} className={`font-DM text-sm text-[#6D6D6D]leading-6 ${className}`}>
                {text}
            </Link>
        </li>
    )

}

const Footer = () => {
    return (
        <footer className="bg-[url('/fot.svg')] bg-no-repeat bg-cover   mt-[125px]">
            <Container>

                <div className=' w-full relative bg-[#f4f4f4]'>
                    <div className='py-6  px-4 w-3/4 h-auto  absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#214252] bg-opacity-80  rounded-xl '>
                        <div className="  ">
                            <h1 className="text-4xl font-semibold leading-9 text-white text-center">Don’t miss out!</h1>
                            <p className="text-base leading-normal text-center text-white mt-6">
                                Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in <br />a week on every friday so subscribe to get latest news and updates.
                            </p>
                            <div className="flex justify-center items-center mt-4">
                                <input className="border border-white  text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white" placeholder="Email Address" />
                                <button className=" focus:outline-0  border border-white  bg-white py-[14px] px-6 hover:text-[#214252] hover:bg-opacity-75">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>

            <Container>
                <div className="  pt-[186px] pb-[90px]  flex flex-col md:flex-row justify-start items-start md:items-start md:justify-between gap-y-8">
                    <div className=" left  flex gap-x-5">
                        <div className='content' >
                            <h4 className='text-xl text-[#e3e4e8]  tracking-widest capitalize font-light my-4 relative    before:absolute before:-bottom-2.5 inline-block before:w-1/2 before:h-[2px] before:bg-red-500'>About Us</h4>
                            <p className='max-w-[325px] text-[#e3e4e8] mt-2'>
                                If you are going to use a passage of Lorem Ipsum you need to be sure there isn't anything embarrassing hidden in the middle of text </p>
                            <h2 className='text-xl text-[#e3e4e8]  tracking-widest capitalize font-light my-4 relative    before:absolute before:-bottom-2.5 inline-block before:w-1/2 before:h-[2px] before:bg-red-500'>Popular Tag</h2>
                            <div className='max-w-[325px] mt-3 '>
                                <span className='text-[#e3e4e8] hover:text-red-500 hover:border-red-500 text-center tracking-widest uppercase font-light p-2 border mr-2 mb-2 inline-block transition-all duration-500'>travel </span>
                                <span className='text-[#e3e4e8] hover:text-red-500 hover:border-red-500  text-center tracking-widest uppercase font-light p-2 border mr-2 mb-2  inline-block transition-all duration-500'>creative </span>
                                <span className='text-[#e3e4e8] hover:text-red-500 hover:border-red-500  text-center tracking-widest uppercase font-light p-2 border mr-2 mb-2 inline-block transition-all duration-500'> fashion</span>
                                <span className='text-[#e3e4e8] hover:text-red-500 hover:border-red-500  text-center tracking-widest uppercase font-light p-2 border mr-2 mb-2 inline-block transition-all duration-500'> food</span>
                                <span className='text-[#e3e4e8] hover:text-red-500 hover:border-red-500  text-center tracking-widest uppercase font-light p-2 border mr-2 mb-2 inline-block transition-all duration-500'> ideas</span>
                                <span className='text-[#e3e4e8] hover:text-red-500 hover:border-red-500  text-center tracking-widest uppercase font-light p-2 border mr-2 mb-2 inline-block transition-all duration-500'> life</span>
                                <span className='text-[#e3e4e8] hover:text-red-500 hover:border-red-500  text-center tracking-widest uppercase font-light p-2 border transition-all duration-500'> style</span>
                            </div>
                        </div>
                    </div>
                    <div className=" middle w-[300px]">
                        <h2 className='text-xl text-[#e3e4e8]  tracking-widest capitalize font-light my-4 relative    before:absolute before:-bottom-2.5 inline-block before:w-1/2 before:h-[2px] before:bg-red-500'>categories</h2>
                        <ul className='mt-3 text-[#e3e4e8]'>
                            <li className=''> <Link className='flex gap-6 items-center  text-[#e3e4e8] hover:text-[#27b0f5] transition-all duration-500 hover:ml-1'><CiLocationArrow1 /> <span className='uppercase'>Audio</span></Link></li>
                            <li className=''> <Link className='flex gap-6 items-center  text-[#e3e4e8] hover:text-[#27b0f5] transition-all duration-500 hover:ml-1'><CiLocationArrow1 /> <span className='uppercase'>Fashion</span></Link></li>
                            <li className=''> <Link className='flex gap-6 items-center  text-[#e3e4e8] hover:text-[#27b0f5] transition-all duration-500 hover:ml-1'><CiLocationArrow1 /> <span className='uppercase'>Story</span></Link></li>
                            <li className=''> <Link className='flex gap-6 items-center  text-[#e3e4e8] hover:text-[#27b0f5] transition-all duration-500 hover:ml-1'><CiLocationArrow1 /> <span className='uppercase'>Life Style</span></Link></li>
                            <li className='text-[#e3e4e8]'> <Link className='flex gap-6 items-center  text-[#e3e4e8] hover:text-[#27b0f5] transition-all duration-500 hover:ml-1 '><CiLocationArrow1 /> <span className='uppercase'>Travel</span></Link></li>

                        </ul>
                    </div>
                    <div className=" right  flex gap-x-5">
                        <div className='content' >
                            <h4 className='text-xl text-[#e3e4e8]  tracking-widest capitalize font-light my-4 relative    before:absolute before:-bottom-2.5 inline-block before:w-1/2 before:h-[2px] before:bg-red-500'>Contact Info</h4>
                            <ul className='w-[185px] text-[#e3e4e8] mt-2'>
                                <li >Parada do Courel 1</li>
                                <li>27325 Folgoso do Courel</li>
                                <li>Lugo - Galicia</li>
                            </ul>

                        </div>
                    </div>
                </div>

            </Container>
            <div className='w-full h-[1px] bg-[#e3e4e8]'></div>
            <p className='text-center text-[#e3e4e8] py-[30px]'>Copyright Blogs.ORG - All Rights Reserved</p>


        </footer>
    );
};

export default Footer;