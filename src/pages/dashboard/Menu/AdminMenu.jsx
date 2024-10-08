import React from 'react';
import MenuItems from './MenuItems';
import { FaRegFolderClosed } from 'react-icons/fa6';
import { FaRegEdit } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { RiImageAddLine } from 'react-icons/ri';

const AdminMenu = () => {
    return (
        <>
            <MenuItems icon={FaRegFolderClosed} to='/dashboard/managepost' text='manage post'></MenuItems>
            <MenuItems icon={RiImageAddLine} to='/dashboard/addProduct' text=' add post'></MenuItems>
            <MenuItems icon={FaRegEdit} to='/dashboard/editpost' text='edit post'></MenuItems>
            <MenuItems icon={FiUsers} to='/dashboard/addProduct' text='authers'></MenuItems>
        </>
    );
};

export default AdminMenu;