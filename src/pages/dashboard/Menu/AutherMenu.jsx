import React from 'react';
import MenuItems from './MenuItems';
import { FaRegFolderClosed } from 'react-icons/fa6';
import { FaRegEdit } from 'react-icons/fa';
import { RiImageAddLine } from 'react-icons/ri';

const AutherMenu = () => {
    return (
        <>
            <MenuItems icon={FaRegFolderClosed} to='/dashboard/managepost' text='manage post'></MenuItems>
            <MenuItems icon={RiImageAddLine } to='/dashboard/addpost' text=' add post'></MenuItems>
        </>
    );
};

export default AutherMenu;