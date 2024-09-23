import React from 'react';
import MenuItems from './MenuItems';
import { FaRegFolderClosed } from 'react-icons/fa6';
import { TiDocumentAdd } from 'react-icons/ti';
import { FaRegEdit } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';

const AdminMenu = () => {
    return (
        <>
            <MenuItems icon={FaRegFolderClosed} to='/dashboard/addProduct' text='all post'></MenuItems>
            <MenuItems icon={TiDocumentAdd} to='/dashboard/addProduct' text=' add post'></MenuItems>
            <MenuItems icon={FaRegEdit} to='/dashboard/addProduct' text='edit post'></MenuItems>
            <MenuItems icon={FiUsers} to='/dashboard/addProduct' text='authers'></MenuItems>
        </>
    );
};

export default AdminMenu;