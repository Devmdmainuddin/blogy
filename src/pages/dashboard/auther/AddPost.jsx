import React from 'react';
import { useAddBlogsMutation } from '../../../Feature/postsAPI/postApi';
import Swal from 'sweetalert2';

const AddPost = () => {
    const { user } = useAuth() || {}
    const [AddPosts] = useAddBlogsMutation()
    const handleAddPost = async (e) => {
        e.preventDefault()
        const form = e.target;

    
        const image_url = form.image.files[0]
        const image = await imageUpload(image_url)
        const title = form.title.value;
        const category = form.category.value;
        const descaption = form.descaption.value;
        const createAt = (new Date()).toDateString();
        const name = user?.displayName;
        const email = user?.email;
        const userImage = user?.photoURL;
        const userInfo = { name, email, userImage }
        const info={

            image:image,
            title:title,
            descaption:descaption,
            category:category,
            createAt:createAt,


            userInfo:userInfo,
        }


        try {
            await addProduct(info)
            Swal
            .fire({
                position: "top-end",
                icon: "success",
                title: " create product  ",
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
            <h2 className='text-center'>add post</h2>
            <form onSubmit={handleAddPost} action="" className='w-full  grid grid-cols-1 md:grid-cols-2 p-6 border rounded-2xl  m-16'>

                <div className="w-full  p-3">
                    <label htmlFor='title' className="mb-1.5   text-coolGray-800 capitalize text-xl font-light">title</label>
                    <input type="text" placeholder="post title here" name='title' className="mt-1 w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border  rounded-lg transition-all duration-500 " />
                </div>
                <div className="w-full  p-3">
                    <label htmlFor='image' className="mb-1.5   text-coolGray-800 capitalize text-xl font-light">image</label>
                    <input type="file"
                        id="file-upload"
                        multiple
                        placeholder="post image here" name='image' className="mt-1 w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border  rounded-lg transition-all duration-500 " />
                </div>
                <div className="w-full  p-3">

                    <label htmlFor='discaption' className="mb-1.5  text-coolGray-800 capitalize text-xl font-light">discaption</label>
                    <input type="text" name='discaption' placeholder="post discaption here" className="mt-1 w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border  rounded-lg transition-all duration-500 " />
                </div>

                <div className="w-full  p-3">
                    <label className="mb-1.5   text-coolGray-800 capitalize text-xl font-light">category</label>
                    <select name="category" id="" className="mt-1 w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border  rounded-lg transition-all duration-500 ">
                        <option value="Energy">Energy</option>
                        <option value="Travel">Travel</option>
                        <option value="Health">Health</option>
                        <option value="technology">technology</option>
                        <option value="Hobbies">Hobbies</option>
                    </select>


                </div>

                <input type="submit" value="add post" className='inline-block p-2 border ' />

            </form>

        </div>
    );
};

export default AddPost;