import React from 'react';
import Navbar from '../components/share/Navbar';
import Sidebar from '../pages/dashboard/Sidebar';
import { Outlet } from 'react-router-dom';



const Dashboard = () => {
    return (
        <div>
           <Navbar></Navbar>
           <div className='flex '>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Dashboard;