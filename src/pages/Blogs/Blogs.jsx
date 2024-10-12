import Bredcumb from '../../components/share/Bredcumb';
import Sidebar from '../../components/share/Sidebar';
import BlogCard from '../../components/card/BlogCard';
import { useGetBlogsQuery } from '../../Feature/postsAPI/postApi';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from '../../components/share/Container';


const Blogs = () => {

  const { data } = useGetBlogsQuery()
  const location = useLocation();
  const [items,setItems]= useState()
  useEffect(() => {
    setItems(data)

    const getCategoryFromQuery = () => {
        const params = new URLSearchParams(location.search);
        return params.get('category');
    };

    const category = getCategoryFromQuery();
    if (data) {
        if (category) {
            const filtered = data?.filter((blog) => blog?.category === category);
            setItems(filtered);
        } else {
            setItems(data);
        }
    }
    const getTagFromQuery = () => {
      const params = new URLSearchParams(location.search);
      return params.get('tag');
  };
  const tag = getTagFromQuery();
  if (data) {
    if (tag) {
      const filtered = data?.filter((blog) => blog?.tags?.tag01 === tag);
      setItems(filtered);
    }  else {
      setItems(data);
    }
  }
}, [data, location]);

  return (
    <div>
      <Container>
      <Bredcumb></Bredcumb>
      <div className='max-w-[1520px] px-6 flex flex-col lg:flex-row justify-between gap-4 mt-10'>
       <div className='w-full lg:w-3/4'>
       <div className="main w-full   grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {items?.map((item,idx)=><BlogCard key={idx} item={item}/>)}
        </div>
       </div>
       
        <div className="sidebar ">
          <div>
            <Sidebar></Sidebar>
          </div>

        </div>
      </div>
      </Container>
     
    


    </div>
  );
};

export default Blogs;