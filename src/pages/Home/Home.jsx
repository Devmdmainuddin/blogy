import React from 'react';
import Hero from '../../components/home/Hero';
import Highlight from '../../components/home/Highlight';
import HeroSlider from '../../components/home/HeroSlider';
import FeaturePost from '../../components/home/FeaturePost';
import NewsPost from '../../components/home/NewsPost';
import Sidebar from '../../components/share/Sidebar';

const Home = () => {
    return (
        <div >
            <HeroSlider></HeroSlider>
            <Hero></Hero>
            <div className='max-w-[1520px] px-6 mx-auto flex flex-col md:flex-row justify-between gap-4 mt-10'>
                <div className="main w-full md:w-3/4">
                    <Highlight></Highlight>
                </div>
                <div className="sidebar w-full md:w-1/4 ">
                    <Sidebar></Sidebar>
                </div>
            </div>
            <NewsPost></NewsPost>
        </div>
    );
};

export default Home;