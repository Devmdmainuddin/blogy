import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItems = ({ to, icon:Icon, text }) => {
    return (
        <li className='py-4  border-b  text-center hover:bg-emerald-800 hover:text-white transition-all duration-500'><NavLink to={to} className='flex gap-2 items-center justify-center capitalize'><Icon/> {text}</NavLink></li>
    );
};

export default MenuItems;