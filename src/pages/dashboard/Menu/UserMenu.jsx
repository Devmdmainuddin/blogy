import { FaRegFolderClosed } from "react-icons/fa6";
import MenuItems from "./MenuItems";
import { TiDocumentAdd } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";


const UserMenu = () => {
    return (
        <>
          <MenuItems icon={FaRegFolderClosed} to='/dashboard/managepost' text='all post'></MenuItems>
            <MenuItems icon={TiDocumentAdd} to='/dashboard/addpost' text=' add post'></MenuItems>
            <MenuItems icon={FaRegEdit} to='/dashboard/editpost' text='edit post'></MenuItems>  
        </>
    );
};

export default UserMenu;