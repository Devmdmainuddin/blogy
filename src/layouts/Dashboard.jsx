import React, { useState } from 'react';
import Navbar from '../components/share/Navbar';
import Sidebar from '../pages/dashboard/Sidebar';
import { Outlet } from 'react-router-dom';
import Container from '../components/share/Container';



const Dashboard = () => {
   
    return (
        <div className='overflow-hidden'>
            <Navbar ></Navbar>
          
            <Container>
            <div className='flex flex-col md:flex-row gap-6'>
           <div className='-ml-6'><Sidebar ></Sidebar></div>
            <div >
                    <Outlet></Outlet>
                </div>


            </div>
            </Container>
            
        </div>
    );
};

export default Dashboard;