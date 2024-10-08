import React from 'react';
import Container from '../../components/share/Container';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiLock2Line } from 'react-icons/ri';
import { MdOutlineAttachEmail } from 'react-icons/md';
import useAuth from '../../hook/useAuth';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const SignInForm = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state || '/'

  const {signIn, signInWithGoogle, resetPassword, loading, setLoading } = useAuth()
  const handleSubmit =async (e) =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value
    const password = form.password.value

    try{
      setLoading(true)
      await signIn(email, password)
      navigate(from)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: " login Successful ",
        showConfirmButton: false,
        timer: 1500
      });
    }catch(error){
      
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "login faile",
        showConfirmButton: false,
        timer: 1500
      });
    }
  
  }
  const handleGoogleSignIn = async () => {

    try {
      setLoading(true)
      await signInWithGoogle()
      navigate(from)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: " login Successful ",
        showConfirmButton: false,
        timer: 1500
      });
    }
    catch (err) {
    //  console.log(err.message);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "err.message",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  const handleResetPassword = async () => {
    if (!email) return toast.error("please write your email first")
    try {
      await resetPassword(email)
      toast.success("request success ! check your email for further process ..")
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
          <div className="flex flex-col gap-4 bg-white p-8 w-[450px] rounded-2xl font-sans">
          <form onSubmit={handleSubmit} >
            <div className="flex flex-col">
              <label htmlFor='email' className="text-black font-semibold">Email</label>
            </div>
            <div className="flex items-center border-2 border-gray-200 rounded-lg h-12 pl-2 transition-all focus-within:border-blue-500 duration-500">
           
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
              <RiLock2Line className='text-xl' />
              <input
                type="password"
                name='password'
                placeholder="Enter your Password"
                className="ml-2 w-full border-none focus:outline-none"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label className="text-sm text-black">Remember me</label>
              </div>
              <span onClick={handleResetPassword} className="text-sm text-blue-600 cursor-pointer">Forgot password?</span>
            </div>

            <button className="mt-5 bg-black text-white rounded-lg h-12 w-full font-medium transition-all hover:bg-gray-800">
              Sign In
            </button>
            </form>
            <p className="text-center text-black text-sm mt-2">Don't have an account? <Link to='/registation'><span className="text-blue-600 cursor-pointer">Sign Up</span></Link> </p>

            <p className="text-center text-black text-sm mt-2">Or With</p>

            <div className="flex flex-col gap-2">
              <button  onClick={handleGoogleSignIn} className="flex items-center justify-center border-2 border-gray-200 h-12 rounded-lg gap-2 transition-all hover:border-blue-500">
              <FcGoogle  className='text-xl'/>
                Google
              </button>

              <button className="flex items-center justify-center border-2 border-gray-200 h-12 rounded-lg gap-2 transition-all hover:border-blue-500">
              <FaGithub className='text-xl' />
                Github
              </button>
            </div>

          </div>
          
            
         
        </div>
      </Container>
    </section>
  );
};

export default SignInForm;
