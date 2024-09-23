import { Outlet } from "react-router-dom";
import Navbar from "../components/share/Navbar";
import HeroSlider from "../components/home/HeroSlider";
import Hero from "../components/home/Hero";
import Sidebar from "../components/share/Sidebar";
import NewsPost from "../components/home/NewsPost";
import Footer from "../components/share/Footer";

const MainLayout = () => {
  return (
    <div className="overflow-hidden">
      <Navbar></Navbar>
      <div className='bg-[#f4f4f4] py-4'>
     
       <Outlet></Outlet>
      </div>
        <Footer></Footer>


      

    </div>
  );
};

export default MainLayout;