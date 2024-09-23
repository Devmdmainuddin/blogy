import React from 'react';

const AddPost = () => {
    return (
        <div>
            <h2 className='text-center'>add post</h2>
            <form action="" className='w-full  grid grid-cols-1 md:grid-cols-2 p-6 border rounded-2xl  m-16'>

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