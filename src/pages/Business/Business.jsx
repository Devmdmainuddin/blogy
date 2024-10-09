import Bredcumb from '../../components/share/Bredcumb';
import Sidebar from '../../components/share/Sidebar';
import BlogCard from '../../components/card/BlogCard';
import { useGetBlogsQuery } from '../../Feature/postsAPI/postApi';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Business = () => {
    const { data } = useGetBlogsQuery()
    const location = useLocation();
    const [items, setItems] = useState()

    useEffect(() => {
        const newdata = data?.filter(item => item.category === 'Business')
        setItems(newdata)
    }, [data])

    useEffect(() => {
        
        const getCategoryFromQuery = () => {
            const params = new URLSearchParams(location.search);
            return params.get('category');
        };
        const category = getCategoryFromQuery();
        if (data) {
            if (category) {
                const filtered = data.filter((blog) => blog.category === category);
                setItems(filtered);
            }
        }
    }, [data, location]);

    return (
        <div>
            <Bredcumb></Bredcumb>
            <div className='max-w-[1520px] px-6 flex flex-col lg:flex-row justify-between gap-4 mt-10'>
                <div className='w-full lg:w-3/4'>
                    <div className="main w-full   grid grid-cols-1 md:grid-cols-2 gap-8 ">
                        {items?.map((item, idx) => <BlogCard key={idx} item={item} />)}
                    </div>
                </div>

                <div className="sidebar ">
                    <div>
                        <Sidebar></Sidebar>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Business;