import React, { useEffect, useState } from 'react';
import Container from './Container';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoClose, IoMenu } from "react-icons/io5";
import { useGetBlogsQuery } from '../../Feature/postsAPI/postApi';
import useAuth from '../../hook/useAuth';

const Navbar = () => {
    const { user,logOut } = useAuth() || {}
    const { data } = useGetBlogsQuery()
    const [show, setShow] = useState(false);
    const [showPro, setShowPro] = useState(false);
    let [searchInput, setSearchInput] = useState("");
    let [searchFilter, setSearchFilter] = useState([]);
    const navigate = useNavigate()
console.log(user);
    const handleInput = (e) => {
        setSearchInput(e.target.value)
        if (e.target.value === "") {
            setSearchFilter([])
        } else {
            const searchOne = data?.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setSearchFilter(searchOne)
        }
    }
    const handleLink = (id) => {
        navigate(`/blogs/${id}`)
        setSearchFilter([])
        setSearchInput("")
    }
    return (
        <nav>
            <div className=' bg-[#214252]  '>
                <Container  className='relative py-6'>
                    {/* full width large */}
                    <div className='flex justify-between items-center relative'>
                        <div className="logo">
                            <Link><h3 className='text-xl font-medium capitalize text-white'>blogy</h3></Link>
                        </div>
                        <div className={`hidden md:flex text-center gap-6 md:static capitalize text-[#dcdfe2] bg-[#214252] md:bg-transparent transition-all duration-700`}>
                            <div className=' md:hidden flex justify-end'>
                                <button onClick={() => setShow(!show)} className='p-2 rounded-full border m-4'><IoClose className='text-2xl text-[#dcdfe2]' /> </button>
                            </div>
                            <ul className='md:flex gap-6'>
                                <li><NavLink to='/' className='hover:text-[#FB2E86] transition-all duration-500'>home</NavLink></li>
                                <li><NavLink to='/blogs' className='hover:text-[#FB2E86] transition-all duration-500'>blogs</NavLink></li>
                                <li><NavLink to='/business' className='hover:text-[#FB2E86] transition-all duration-500'>business</NavLink></li>
                                <li><NavLink to='/politics' className='hover:text-[#FB2E86] transition-all duration-500'>politics</NavLink></li>
                            </ul>
                        </div>

                        <div className='flex gap-3 justify-between'>
                            <input type="text" value={searchInput} onChange={handleInput} className='hover:text-[#FB2E86] hover:border-[#FB2E86] transition-all duration-500 py-2 px-3 border border-[#9aa7b4] text-[#dcdfe2] outline-none bg-[#2b4b5b]' placeholder='search...' />
                            {/*  setShowSidebar(!showsidebar) */}
                            <img onClick={() => setShowPro(!showPro)} src={user? user?.photoURL:"/user.png"} alt="" className='inline-block absolute right-7 md:static md:right-auto author w-10 h-10 rounded-full border-2 border-white cursor-pointer' />
                        </div>

                        <div className='inline-block md:hidden'>
                            <button onClick={() => setShow(!show)} ><IoMenu className='text-2xl text-[#dcdfe2]' /> </button>
                        </div>
                        <div className={`flex gap-2 p-4 z-50 capitalize text-[#dcdfe2] bg-[#f5e9eceb]  absolute top-[66px]  transition-all duration-700 ${showPro ? 'right-0 overflow-hidden' : ' -right-full'}`} >
                          {user ? <>
                            <NavLink to='/dashboard'>
                                <button className='p-2 hover:text-emerald-800 text-white bg-emerald-800 hover:bg-transparent border hover:border-emerald-800 transition-all duration-500'>My Profile</button>
                            </NavLink>
                            <NavLink  onClick={logOut}>
                                <button className='p-2 hover:bg-emerald-800 hover:text-white text-emerald-800 border border-emerald-800 transition-all duration-500'>LogOut</button>
                            </NavLink>
                          </> 
                          : <>
                          <NavLink to='/login'>
                                <button className='p-2 hover:bg-emerald-800 hover:text-white text-emerald-800 border border-emerald-800 transition-all duration-500'>Login</button>
                            </NavLink>
                          </>} 
                           
                        </div>
                        
                    </div>

                    {/* Profile Dropdown for Desktop */}

                    {searchFilter.length > 0 &&
                        <div className='absolute max-w-[420px] max-h-[350px] top-full sm:left-1/2 sm:-translate-x-1/2 z-50  overflow-y-scroll' >
                            {searchFilter.map((item, key) =>
                                <div onClick={() => handleLink(item._id)} key={key} className=" cursor-pointer flex   gap-2 bg-[#F5F5F3] p-5 border-b">
                                    <img src={item.image} alt="" className="bg-[#979797] w-10 h-10 sm:w-20 sm:h-20" />
                                    <div><h2>{item.title}</h2>
                                    </div>


                                </div>
                            )}
                        </div>}

                    {/* Mobile Menu */}
                    <div className={`md:hidden text-center gap-6 capitalize text-[#dcdfe2] z-40 w-[250px] bg-[#214252] fixed top-0 h-[320px] transition-all duration-700 ${show ? ' right-0 ' : '-right-full'}`}>
                        <div className='md:hidden flex justify-end items-center p-4'>
                            <button onClick={() => setShow(!show)} className='p-2 rounded-full border'><IoClose className='text-2xl text-[#dcdfe2]' /> </button>
                        </div>
                        <ul className='flex flex-col gap-3 p-6'>
                            <li><NavLink className='hover:' to='/'>home</NavLink></li>
                            <li><NavLink to='/business'>business</NavLink></li>
                            <li><NavLink to='/politics'>politics</NavLink></li>
                        </ul>
                    </div>
                </Container>
            </div>
        </nav>
    );
};

export default Navbar;
