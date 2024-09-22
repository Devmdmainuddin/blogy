import { Outlet } from "react-router-dom";
import Navbar from "../components/share/Navbar";
import HeroSlider from "../components/home/HeroSlider";
import Hero from "../components/home/Hero";
import Sidebar from "../components/share/Sidebar";
import NewsPost from "../components/home/NewsPost";
import Footer from "../components/share/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='bg-[#f4f4f4] py-4'>
        <HeroSlider></HeroSlider>
        <Hero></Hero>
        <div className='max-w-[1520px] px-6 mx-auto flex flex-col md:flex-row justify-between gap-4 mt-10'>
          <div className="main w-full md:w-3/4">
            <Outlet></Outlet>
          </div>
          <div className="sidebar w-full md:w-1/4 ">
            <Sidebar></Sidebar>
          </div>
        </div>
        <NewsPost></NewsPost>
        <Footer></Footer>


      </div>

    </div>
  );
};

export default MainLayout;