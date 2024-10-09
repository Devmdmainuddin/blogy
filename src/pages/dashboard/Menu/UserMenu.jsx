import { FaRegFolderClosed } from "react-icons/fa6";
import MenuItems from "./MenuItems";
import { FaRegEdit } from "react-icons/fa";
import { RiImageAddLine } from "react-icons/ri";


const UserMenu = () => {
    return (
        <>
            <MenuItems icon={FaRegFolderClosed} to='/dashboard/managepost' text='manage post'></MenuItems>
            <MenuItems icon={RiImageAddLine } to='/dashboard/addpost' text=' add post'></MenuItems>
        </>
    );
};

export default UserMenu;