import React from 'react';
import { useUpdateBlogsMutation } from '../../../Feature/postsAPI/postApi';
import Swal from 'sweetalert2';
import useAuth from '../../../hook/useAuth';
import { useLoaderData } from 'react-router-dom';


const EditPost = () => {
    const { user } = useAuth() || {}
    const blogs= useLoaderData()
   const [Update]= useUpdateBlogsMutation()
    const handleUpdatePost = async (e) => {
        e.preventDefault()
        const form = e.target;



        const title = form.title.value;
        const discaption01 = form.discaption.value;
        const discaption02 = form.discaption01.value;
        const updateAt = (new Date()).toDateString();
        const tag01 = form.tag01.value;
        const tag02 = form.tag02.value;
        const tag03 = form.tag03.value;
        const discaption = { discaption01, discaption02 }
        const tags = { tag01, tag02, tag03 }
        const name = user?.displayName;
        const email = user?.email;
        const userImage = user?.photoURL;
        const userInfo = { name, email, userImage }
        const info = {

            title: title,
            discaption: discaption,
            tags: tags,
            updateAt: updateAt,
            userInfo: userInfo,
        }


        try {
            await Update({ id: blogs._id, updateBlogs: info })
            Swal
                .fire({
                    position: "top-end",
                    icon: "success",
                    title: " update blogs  ",
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
                title: " create product items faile",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div>
            <h2 className='text-2xl my-5 capitalize'> eddit post ...</h2>
            <form onSubmit={handleUpdatePost} action="" className='w-full  border rounded-2xl  lg:p-6'>
                <div className='flex flex-col md:flex-row gap-3'>
                    <div className="w-full  p-3">
                        <label htmlFor='title' className="mb-1.5   text-coolGray-800 capitalize text-xl font-light">title</label>
                        <input type="text" defaultValue={blogs.title} placeholder="post title here" name='title' className="mt-1 w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border  rounded-sm transition-all duration-500 " />
                    </div>

                </div>
                <div className='flex flex-col md:flex-row gap-3'>
                    <div className="w-full p-3">

                        <label htmlFor='discaption' className="mb-1.5  text-coolGray-800 capitalize text-xl font-light">discaption</label>
                        <input type="text" name='discaption' defaultValue={blogs.discaption.discaption01} placeholder="post discaption here" className="mt-1 w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border  rounded-sm transition-all duration-500 " />
                    </div>
                    <div className="w-full p-3">
                    <label htmlFor='discaption01' className="mb-1.5  text-coolGray-800 capitalize lg font-light">discaption </label>
                    <input type="text" name='discaption01' defaultValue={blogs.discaption.discaption02} placeholder="post discaption here" className="mt-1 w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border  rounded-sm transition-all duration-500 " />
                </div>


                </div>

                <div className="w-full p-3">
                    <label htmlFor='tag01' className="mb-1.5  text-coolGray-800 capitalize lg font-light">tags </label>
                    <input type="text" name='tag01' defaultValue={blogs?.tags?.tag01} placeholder="tag01"  className="mt-1 w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border  rounded-sm transition-all duration-500 " />
                    <input type="text" name='tag02' placeholder="tag02" className="mt-1 w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border  rounded-sm transition-all duration-500 " />
                    <input type="text" name='tag03' placeholder="tag03" className="mt-1 w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border  rounded-sm transition-all duration-500 " />
                </div>

                <div className='flex justify-center items-center mt-6'>
                    <input type="submit" value="Update post" className='inline-block p-2 border capitalize ' />
                </div>


            </form>

        </div>
    );
};

export default EditPost;