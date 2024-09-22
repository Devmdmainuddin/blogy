import React from 'react';
// import Hero from '../../components/home/Hero';
import Highlight from '../../components/home/Highlight';
// import HeroSlider from '../../components/home/HeroSlider';
import FeaturePost from '../../components/home/FeaturePost';
import NewsPost from '../../components/home/NewsPost';

const Home = () => {
    return (
        <div className='bg-[#f4f4f4] py-4'>
            {/* <HeroSlider></HeroSlider>
           <Hero></Hero> */}
           <Highlight></Highlight>
           {/* <NewsPost></NewsPost> */}
        </div>
    );
};

export default Home;