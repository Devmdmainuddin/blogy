
import MenuItems from "./MenuItems";

import { RiImageAddLine } from "react-icons/ri";


const UserMenu = () => {
    return (
        <>
            <MenuItems icon={RiImageAddLine } to='/dashboard/addpost' text=' add post'></MenuItems>
        </>
    );
};

export default UserMenu;