import React, { useState } from 'react';
import Bredcumb from '../../components/share/Bredcumb';
import Sidebar from '../../components/share/Sidebar';
import Highlight from '../../components/home/Highlight';
import BlogCard from '../../components/card/BlogCard';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [sort, setSort] = useState('postDateDesc'); // Default sorting option
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10); // Default page size

    const fetchBlogs = async () => {
        try {
          const response = await axios.get('/blogs', {
            params: {
              search,
              category,
              brand,
              sort,
              page,
              size
            }
          });
          setBlogs(response.data);
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }
      };
    
      useEffect(() => {
        fetchBlogs();
      }, [search, category, brand, sort, page, size]); // Fetch when dependencies change

      
    return (
        <div>
            <Bredcumb></Bredcumb>
            <div className='max-w-[1520px] px-6 mx-auto flex flex-col md:flex-row justify-between gap-4 mt-10'>
                <div className="main w-full md:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-6  group lg:h-[248px] h-auto">
                    {/* <Highlight></Highlight> */}
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </div>
                <div className="sidebar ">
                <div>
                <Sidebar></Sidebar>
                </div>
                    
                </div>
            </div>
            <div>
      <input
        type="text"
        placeholder="Search blogs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="tech">Tech</option>
        <option value="lifestyle">Lifestyle</option>
        {/* Add more categories */}
      </select>
      <select onChange={(e) => setBrand(e.target.value)}>
        <option value="">All Brands</option>
        <option value="brandA">Brand A</option>
        <option value="brandB">Brand B</option>
        {/* Add more brands */}
      </select>
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="postDateDesc">Newest First</option>
        <option value="postDateAsc">Oldest First</option>
        <option value="priceAsc">Price Low to High</option>
        <option value="priceDesc">Price High to Low</option>
      </select>

      <div>
        {blogs.map((blog) => (
          <div key={blog._id}>
            <h2>{blog.title}</h2>
            <p>{blog.category} - {blog.brand}</p>
            <p>{blog.price}</p>
          </div>
        ))}
      </div>

      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 0}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
    

        </div>
    );
};

export default Blogs;