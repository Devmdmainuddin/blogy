import React from 'react';
import Bredcumb from '../../components/share/Bredcumb';
import Sidebar from '../../components/share/Sidebar';
import Highlight from '../../components/home/Highlight';

const Blogs = () => {
    return (
        <div>
            <Bredcumb></Bredcumb>
            <div className='max-w-[1520px] px-6 mx-auto flex flex-col md:flex-row justify-between gap-4 mt-10'>
                <div className="main w-full md:w-3/4">
                    <Highlight></Highlight>
                </div>
                <div className="sidebar w-full md:w-1/4 ">
                    <Sidebar></Sidebar>
                </div>
            </div>

        </div>
    );
};

export default Blogs;