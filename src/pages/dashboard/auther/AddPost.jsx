import React from 'react';
import { useAddBlogsMutation } from '../../../Feature/postsAPI/postApi';
import Swal from 'sweetalert2';
import useAuth from '../../../hook/useAuth';
import { imageUpload } from '../../../utils';

const AddPost = () => {
    const { user } = useAuth() || {}
    const [AddPosts] = useAddBlogsMutation()
    const handleAddPost = async (e) => {
        e.preventDefault()
        const form = e.target;

        const thumbnailImage = form.thumbnail01.files[0]
        const thumbnail01 = await imageUpload(thumbnailImage)
        const thumbnailImage02 = form.thumbnail02.files[0]
        const thumbnail02 = await imageUpload(thumbnailImage02)
        const image_url = form.image.files[0]
        const image = await imageUpload(image_url)
        const title = form.title.value;
        const category = form.category.value;
        const discaption01 = form.discaption.value;
        const discaption02 = form.discaption01.value;
        const tag = form.tag.value;
        const createAt = (new Date()).toDateString();
        const name = user?.displayName;
        const email = user?.email;
        const userImage = user?.photoURL;
        const userInfo = { name, email, userImage }
        const discaption = { discaption01, discaption02 }
        const thumbnail = {thumbnail01,thumbnail02}
        const info = {

            image: image,
            title: title,
            discaption: discaption,
            category: category,
            createAt: createAt,
            thumbnail: thumbnail,
            userInfo: userInfo,
            tags:tag,
        }


        try {
            await AddPosts(info)
            Swal
                .fire({
                    position: "top-end",
                    icon: "success",
                    title: " create blog post ",
                    showConfirmButton: false,
                    timer: 1500
                });
            form.reset();
        }
        catch (err) {
            // console.log(err)
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " post faile",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div>
            <h2 className='text-2xl my-5 capitalize'>add post ...</h2>
            <form onSubmit={handleAddPost} action="" className='w-full  border rounded-2xl  lg:p-6'>
                <div className='flex flex-col md:flex-row gap-3'>
                    <div className="w-full  p-3">
                        <label htmlFor='title' className="mb-1.5   text-coolGray-800 capitalize  font-light">title</label>
                        <input type="text" placeholder="post title here" name='title' className="mt-1 w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border  rounded-sm transition-all duration-500 " />
                    </div>
                    <div className="w-full  p-3">
                        <label htmlFor='image' className="mb-1.5  text-coolGray-800 capitalize  font-light">image</label>
                        <input type="file"
                            id="file-upload"
                            multiple
                            placeholder="post image here" name='image' className="mt-1 w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border  rounded-sm transition-all duration-500 " />
                    </div>
                </div>

                <div className=' thumbnail flex flex-col md:flex-row gap-3'>
                    <div className="w-full  p-3">
                        <label htmlFor='thumbnail01' className="mb-1.5  text-coolGray-800 capitalize  font-light">thumbnail01</label>
                        <input type="file"
                            id="file-upload"
                            multiple
                            placeholder="thumbnail01" name='thumbnail01' className="mt-1 w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border  rounded-sm transition-all duration-500 " />
                    </div>
                    <div className="w-full  p-3">
                        <label htmlFor='thumbnail02' className="mb-1.5  text-coolGray-800 capitalize  font-light">thumbnail02</label>
                        <input type="file"
                            id="file-upload"
                            multiple
                            placeholder="thumbnail02" name='thumbnail02' className="mt-1 w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border  rounded-sm transition-all duration-500 " />
                    </div>
                </div>


                <div className='flex flex-col md:flex-row gap-3'>
                    <div className="w-full p-3">

                        <label htmlFor='discaption' className="mb-1.5  text-coolGray-800 capitalize  font-light">discaption</label>
                        <input type="text" name='discaption' placeholder="post discaption here" className="mt-1 w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border  rounded-sm transition-all duration-500 " />
                    </div>

                    <div className="w-full p-3">
                        <label className="mb-1.5   text-coolGray-800 capitalize  font-light">category</label>
                        <select name="category" id="" className="mt-1 w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border  rounded-sm transition-all duration-500 ">
                        <option value="Business">Business</option>
                            <option value="Travel">Travel</option>
                            <option value="Health">Health</option>
                            <option value="technology">technology</option>
                            <option value="Hobbies">Hobbies</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Politics">Politics</option>
                            <option value="Culture">Culture</option>
                        </select>


                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-3'>
                <div className="w-full p-3">
                    <label htmlFor='discaption01' className="mb-1.5  text-coolGray-800 capitalize lg font-light">discaption </label>
                    <input type="text" name='discaption01' placeholder="post discaption here" className="mt-1 w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border  rounded-sm transition-all duration-500 " />
                </div>
                <div className="w-full p-3">
                    <label htmlFor='tag' className="mb-1.5  text-coolGray-800 capitalize lg font-light">tags </label>
                    <input type="text" name='tag' placeholder="tag01" className="mt-1 w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border  rounded-sm transition-all duration-500 " />
                
                </div>

                </div>
                



                <div className='flex justify-center items-center mt-6'>
                    <input type="submit" value="add post" className='mt-6 inline-block py-2 px-4 border uppercase bg-[#214252] text-white rounded-sm' />
                </div>


            </form>

        </div>
    );
};

export default AddPost;