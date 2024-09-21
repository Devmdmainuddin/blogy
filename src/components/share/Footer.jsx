import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Container from './Container';
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { IoIosCall } from 'react-icons/io';

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
        <footer className="bg-[#0A1333] relative">
            <div className='flex items-center bg-white absolute left-1/2 -translate-x-1/2 rounded-b-xl pb-5 px-[50px]'>
              <img className='w-[50px] h-[50px]' src="/image/logo.png" alt="" />  <h3 className='text-xl font-medium'> <span className='text-[#00B5FC] '>ITH</span> CROWDFUNDING</h3>
            </div>
            <Container>
                <div className=" max-w-[1017px] mx-auto pt-[186px] pb-[90px]  flex flex-col md:flex-row items-center md:items-start justify-between gap-y-8">
                    <div className=" left  flex gap-x-5">
                        <div className='icon'>
                            <p className='text-[#FFCE1F] p-4 rounded-full border border-[#696C76]'><FaLocationDot /></p>
                        </div>
                        <div className='content' >
                            <h4 className='font-DM font-medium  text-[#00B5FC] '>Dirección</h4>
                            <ul className='w-[185px] text-white mt-2'>
                                <li>Parada do Courel 1</li>
                                <li>27325 Folgoso do Courel</li>
                                <li>Lugo - Galicia</li>
                            </ul>
                           
                        </div>
                    </div>
                    <div className=" middle  flex gap-x-5">
                        <div className='icon'>
                            <p className='text-[#FFCE1F] p-4 rounded-full border border-[#696C76]'><MdOutlineEmail /></p>
                        </div>
                        <div className='content' >
                            <h4 className='font-DM font-medium  text-[#00B5FC] '>Correo</h4>
                            <ul className='w-[185px] text-white mt-2'>
                                <li>info@ithcrowdfunding.org</li>
                            </ul>
                           
                        </div>
                    </div>
                    <div className=" right  flex gap-x-5">
                        <div className='icon'>
                            <p className='text-[#FFCE1F] p-4 rounded-full border border-[#696C76]'><IoIosCall /></p>
                        </div>
                        <div className='content' >
                            <h4 className='font-DM font-medium  text-[#00B5FC] '>contacto</h4>
                            <ul className='w-[185px] text-white mt-2'>
                                <li>(+34) 671 44 52 47</li>
                                <li>(+34) 981 55 72 42</li>
                            </ul>
                     
                        </div>
                    </div>
                </div>

            </Container>
            <div className='w-full h-[1px] bg-[#696C76]'></div>
            <p className='text-center text-[#696C76] py-[30px]'>Copyright ITHCROWDFUNDING.ORG - All Rights Reserved</p>


        </footer>
    );
};

export default Footer;