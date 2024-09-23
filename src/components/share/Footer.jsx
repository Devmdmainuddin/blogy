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
        <footer className="bg-[url('/fot.svg')] bg-no-repeat bg-cover  mt-[125px]">
            <Container>
         
                <div className=' w-full relative bg-[#f4f4f4]'>
                    <div className=' w-3/4 h-[200px] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#94ecac]  rounded-xl '>

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
                    <div className=" middle ">
                        <h2 className='text-xl text-[#e3e4e8]  tracking-widest capitalize font-light my-4 relative    before:absolute before:-bottom-2.5 inline-block before:w-1/2 before:h-[2px] before:bg-red-500'>categories</h2>
                        <ul className='mt-3 text-[#e3e4e8]'>
                            <li className=''> <Link className='flex gap-2 items-center  text-[#e3e4e8]'><CiLocationArrow1 /> <span className='uppercase'>Audio</span></Link></li>
                            <li className=''> <Link className='flex gap-2 items-center text-[#e3e4e8] '><CiLocationArrow1 /> <span className='uppercase'>Fashion</span></Link></li>
                            <li className=''> <Link className='flex gap-2 items-center  text-[#e3e4e8]'><CiLocationArrow1 /> <span className='uppercase'>Story</span></Link></li>
                            <li className=''> <Link className='flex gap-2 items-center  text-[#e3e4e8]'><CiLocationArrow1 /> <span className='uppercase'>Life Style</span></Link></li>
                            <li className='text-[#e3e4e8]'> <Link className='flex gap-2 items-center text-[#e3e4e8] '><CiLocationArrow1 /> <span className='uppercase'>Travel</span></Link></li>

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