import React from 'react';
import Container from '../../components/share/Container';
import { Link } from 'react-router-dom';
import { RiLock2Line } from 'react-icons/ri';
import { MdOutlineAttachEmail } from 'react-icons/md';

const SignInForm = () => {


  const handleSubmit = (e) =>{

  }
  return (
    <section className='my-8'>
      <Container>
        <div className='flex justify-between gap-6 '>
          <div>

          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-8 w-[450px] rounded-2xl font-sans">
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
              <span className="text-sm text-blue-600 cursor-pointer">Forgot password?</span>
            </div>

            <button className="mt-5 bg-black text-white rounded-lg h-12 w-full font-medium transition-all hover:bg-gray-800">
              Sign In
            </button>

            <p className="text-center text-black text-sm mt-2">Don't have an account? <Link to='/registation'><span className="text-blue-600 cursor-pointer">Sign Up</span></Link> </p>

            <p className="text-center text-black text-sm mt-2">Or With</p>

            <div className="flex flex-col gap-2">
              <button className="flex items-center justify-center border-2 border-gray-200 h-12 rounded-lg gap-2 transition-all hover:border-blue-500">
                {/* SVG for Google icon */}
                <svg version="1.1" width="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456C103.821,274.792,107.225,292.797,113.47,309.408z" fill="#FBBB00"></path><path d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" fill="#518EF8"></path></svg>
                Google
              </button>

              <button className="flex items-center justify-center border-2 border-gray-200 h-12 rounded-lg gap-2 transition-all hover:border-blue-500">
                {/* SVG for Apple icon */}
                <svg height="20" width="20" viewBox="0 0 22.773 22.773" xmlns="http://www.w3.org/2000/svg"><path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path><path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.308,0-0.458-0.015c-1.494-0.198-2.415-1.201-3.191-2.196c-2.219-2.855-3.917-7.982-1.653-11.479c1.122-1.83,3.103-2.992,4.966-2.992c1.267,0,2.35,0.899,3.527,0.899c1.129,0,2.1-0.882,3.527-0.882c1.9,0,3.234,1.007,4.168,2.449c-3.674,2.001-3.074,7.183,0.151,8.743C20.257,15.551,20.501,16.129,20.67,16.716z"></path></svg>
                Apple
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default SignInForm;
