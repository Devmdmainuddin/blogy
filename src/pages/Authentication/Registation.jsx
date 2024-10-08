import React from 'react';
import Container from '../../components/share/Container';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { RiLock2Line } from 'react-icons/ri';
import { MdOutlineAttachEmail } from 'react-icons/md';
import { IoImagesOutline } from 'react-icons/io5';
import { LuUserSquare2 } from 'react-icons/lu';
import useAuth from '../../hook/useAuth'
import toast from 'react-hot-toast';
import { useAddUserMutation } from '../../Feature/userAPI/userAPI.js'
import { imageUpload } from "../../utils/index";
import Swal from 'sweetalert2';
const Registation = () => {
    const navigate = useNavigate()
    const [addUser]=useAddUserMutation()
    const { createUser,updateUserProfile,setLoading } = useAuth()

    const handleSubmit =async (e) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const image_url = form.image.files[0]
        const image = await imageUpload(image_url)
        const password = form.password.value

        const userinfo = {
            name: name,
            email: email,
            image: image,
            role: 'user',
            status: 'verified',
        }

        try {
            setLoading(true)
            const result = await createUser(email, password)
             await updateUserProfile(name,image)
            addUser(userinfo)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "signup Successful",
                showConfirmButton: false,
                timer: 1500,
              });
            navigate('/')

        }
        catch (err) {
            setLoading(false)
            toast.error(err.message)
        }
    }
    return (
        <section className='my-8'>
            <Container>
                <div className='flex justify-between gap-6 '>
                    <div>

                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-8 w-[450px] rounded-2xl font-sans">
                        <div className="flex flex-col">
                            <label htmlFor='name' className="text-black font-semibold">name</label>
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-lg h-12 pl-2  focus-within:border-blue-500 transition-all duration-500">
                            {/* SVG for the icon */}
                            <LuUserSquare2 className='text-xl'/>
                            <input
                                type="text"
                                name='name'
                                placeholder="Enter Your Name"
                                className="ml-2 w-full border-none focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor='image' className="text-black font-semibold">image</label>
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-lg h-12 pl-2 transition-all focus-within:border-blue-500 duration-500">
                            {/* SVG for the icon */}
                            <IoImagesOutline className='text-xl'/>
                            <input
                                type="file"
                                name='image'
                                placeholder="Your image here"
                                className="ml-2 w-full border-none focus:outline-none"
                            />
                        </div>


                        <div className="flex flex-col">
                            <label htmlFor='email' className="text-black font-semibold">Email</label>
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-lg h-12 pl-2 transition-all focus-within:border-blue-500 duration-500">
                            {/* SVG for the icon */}
                            <MdOutlineAttachEmail className='text-xl' />
                            <input
                                type="email"
                                name='email'
                                placeholder="Enter your Email"
                                className="ml-2 w-full border-none focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor='password' className="text-black font-semibold">Password</label>
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-lg h-12 pl-2 transition-all focus-within:border-blue-500 duration-500">
                            {/* SVG for the icon */}
                            <RiLock2Line className='text-xl'/>
                            <input
                                type="password"
                                name='password'
                                placeholder="Enter your Password"
                                className="ml-2 w-full border-none focus:outline-none"
                            />
                        </div>

                        <button className="mt-5 bg-black text-white rounded-lg h-12 w-full font-medium transition-all hover:bg-gray-800">
                            Sign Up
                        </button>

                        <p className="text-center text-black text-sm mt-2">alredy have an account? <Link to='/login'><span className="text-blue-600 cursor-pointer">Sign in</span></Link> </p>

                        <p className="text-center text-black text-sm mt-2">Or With</p>

                        <div className="flex flex-col gap-2">
                            <button className="flex items-center justify-center border-2 border-gray-200 h-12 rounded-lg gap-2 transition-all hover:border-blue-500">
                                <FcGoogle  className='text-xl'/>
                                Google
                            </button>

                            <button className="flex items-center justify-center border-2 border-gray-200 h-12 rounded-lg gap-2 transition-all hover:border-blue-500">
                                <FaGithub className='text-xl' />
                                Github
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    );
};

export default Registation;