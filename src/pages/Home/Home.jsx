import React from 'react';
import Hero from '../../components/home/Hero';
import Highlight from '../../components/home/Highlight';
import HeroSlider from '../../components/home/HeroSlider';
import FeaturePost from '../../components/home/FeaturePost';
import NewsPost from '../../components/home/NewsPost';
import Sidebar from '../../components/share/Sidebar';
import Container from '../../components/share/Container';

const Home = () => {
    return (
        <div >
            <HeroSlider></HeroSlider>
            <Hero></Hero>
            <Container>
            <div className='flex flex-col md:flex-row justify-between gap-4 mt-10'>
                <div className="main w-full md:w-3/4">
                    <Highlight></Highlight>
                    <FeaturePost></FeaturePost>
                </div>
                <div className="sidebar ">
                    <Sidebar></Sidebar>
                </div>
            </div>
            </Container>
           
            <NewsPost></NewsPost>
        </div>
    );
};

export default Home;