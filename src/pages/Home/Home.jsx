import React from 'react';
import Hero from '../../components/home/Hero';
import Highlight from '../../components/home/Highlight';

const Home = () => {
    return (
        <div className='bg-[#f4f4f4] py-4'>
           <Hero></Hero>
           <Highlight></Highlight>
        </div>
    );
};

export default Home;