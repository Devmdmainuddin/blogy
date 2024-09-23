import React, { useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { CgMenuGridR } from 'react-icons/cg';
import { FaArrowLeft, FaComment, FaUser } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';

const Culture = () => {
    const [number, setNumber] = useState(12)
    const [cetegorey, setCategorey] = useState([])

    const selectNumber = (element) => {
        let numberConverter = Number(element.target.value)
        setNumber(numberConverter)

    }

    // const handleByNew = () => {
    //     if (filteredItems && filteredItems.length > 0) {
    //       const sortedByNew = [...filteredItems].sort((a, b) => {
    //         const dateA = new Date(b.createAt);
    //         const dateB = new Date(a.createAt);
    //         return dateA - dateB;
    //       });
    //       setFilteredItems(sortedByNew);
    //     }
    //   };
      
    //   const handleByOld = () => {
    //     if (filteredItems && filteredItems.length > 0) {
    //       const sortedByOld = [...filteredItems].sort((a, b) => {
    //         const dateA = new Date(b.createAt);
    //         const dateB = new Date(a.createAt);
    //         return dateB - dateA;
    //       });
    //       setFilteredItems(sortedByOld);
    //     }
    //   };

    return (
        <div>
            <div className='flex  flex-wrap justify-evenly items-center gap-2 sm:gap-3 mt-6'>
                    <div className='  py-3 '>
                        <p className='w-full flex gap-3 items-center'><FaArrowLeft />Back</p>
                    </div>
                   
                    <select


                        name='queryTitle'
                        id='queryTitle'
                        className='border border-gray-200 hover:border-gray-300 outline-none rounded-4xl p-3'
                    >
                        <option value=''>Filter By Category</option>
                   {cetegorey.map((item,idx)=><option onClick={()=>handleCatfilter(item)} key={idx} value=''>{item}</option>)}
                    </select>



                    <select

                        name='sort'
                        id='sort'
                        className='border border-gray-200 hover:border-gray-300 outline-none rounded-4xl p-3'
                    >
                        <option value=''>Sort By Deadline</option>
                        <option value='dsc'>Descending Order</option>
                        <option value='asc'>Ascending Order</option>
                    </select>
                    <select onChange={selectNumber} name="" id="" className='border border-gray-200  outline-none hover:border-gray-300 rounded-4xl p-3'>

                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="12">12</option>
                        <option value="15">15</option>
                        <option value="18">18</option>
                        <option value="21">21</option>

                    </select>
                    <div onClick={() => setActiveMulti(true)} className='text-3xl text-gray-600'>
                        <CgMenuGridR />
                    </div>
                    <div onClick={() => setActiveMulti(false)} className='text-3xl text-gray-600'>
                        <BiMenuAltLeft />
                    </div>


                </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>
                        <div className="w-full   border relative group hover:border-red-600 transition-all duration-500">
                            <div className="image relative w-full  h-[325px] overflow-hidden">
                                <img src="/card.jpg" alt="" className='group-hover:scale-125 w-full h-full object-content transition-all duration-500' />

                            </div>
                            <div className="content py-10 px-4 relative">
                                <p className='absolute -top-4 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500'>category</p>
                                <h2 className='text-[#282830] text-xl uppercase text-center'>Photo of a girl in flowers</h2>
                                <div className='flex flex-col md:flex-row justify-center items-center gap-2 mt-3'>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaUser /> By <span>Sojib Rahman</span> </p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><MdAccessTime />  <span>March 20, 2017</span></p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                                </div>
                                <p className='text-center mt-3'>Progressively harness competitive partnerships vis-a-vis efficient users. Continually morph state of the art scenarios without client-focused infrastructures. Distinctively predominate one-to-one value whereas client-focused experiences. Conveniently simplify.</p>

                            </div>
                            <button className=' absolute -bottom-4 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500 uppercase'>read more</button>
                        </div>
                        <div className="w-full   border relative group hover:border-red-600 transition-all duration-500">
                            <div className="image relative w-full  h-[325px] overflow-hidden">
                                <img src="/card.jpg" alt="" className='group-hover:scale-125 w-full h-full object-content transition-all duration-500' />

                            </div>
                            <div className="content py-10 px-4 relative">
                                <p className='absolute -top-4 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500'>category</p>
                                <h2 className='text-[#282830] text-xl uppercase text-center'>Photo of a girl in flowers</h2>
                                <div className='flex justify-center items-center gap-2 mt-3'>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaUser /> By <span>Sojib Rahman</span> </p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><MdAccessTime />  <span>March 20, 2017</span></p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                                </div>
                                <p className='text-center mt-3'>Progressively harness competitive partnerships vis-a-vis efficient users. Continually morph state of the art scenarios without client-focused infrastructures. Distinctively predominate one-to-one value whereas client-focused experiences. Conveniently simplify.</p>

                            </div>
                            <button className=' absolute -bottom-4 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500 uppercase'>read more</button>
                        </div>
                        <div className="w-full   border relative group hover:border-red-600 transition-all duration-500">
                            <div className="image relative w-full  h-[325px] overflow-hidden">
                                <img src="/card.jpg" alt="" className='group-hover:scale-125 w-full h-full object-content transition-all duration-500' />

                            </div>
                            <div className="content py-10 px-4 relative">
                                <p className='absolute -top-4 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500'>category</p>
                                <h2 className='text-[#282830] text-xl uppercase text-center'>Photo of a girl in flowers</h2>
                                <div className='flex justify-center items-center gap-2 mt-3'>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaUser /> By <span>Sojib Rahman</span> </p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><MdAccessTime />  <span>March 20, 2017</span></p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                                </div>
                                <p className='text-center mt-3'>Progressively harness competitive partnerships vis-a-vis efficient users. Continually morph state of the art scenarios without client-focused infrastructures. Distinctively predominate one-to-one value whereas client-focused experiences. Conveniently simplify.</p>

                            </div>
                            <button className=' absolute -bottom-4 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500 uppercase'>read more</button>
                        </div>
                        <div className="w-full   border relative group hover:border-red-600 transition-all duration-500">
                            <div className="image relative w-full  h-[325px] overflow-hidden">
                                <img src="/card.jpg" alt="" className='group-hover:scale-125 w-full h-full object-content transition-all duration-500' />

                            </div>
                            <div className="content py-10 px-4 relative">
                                <p className='absolute -top-4 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500'>category</p>
                                <h2 className='text-[#282830] text-xl uppercase text-center'>Photo of a girl in flowers</h2>
                                <div className='flex justify-center items-center gap-2 mt-3'>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaUser /> By <span>Sojib Rahman</span> </p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><MdAccessTime />  <span>March 20, 2017</span></p>
                                    <p className='flex items-center gap-1 text-[#282830] hover:text-[#7a7a85]'><FaComment /> <span>5</span></p>
                                </div>
                                <p className='text-center mt-3'>Progressively harness competitive partnerships vis-a-vis efficient users. Continually morph state of the art scenarios without client-focused infrastructures. Distinctively predominate one-to-one value whereas client-focused experiences. Conveniently simplify.</p>

                            </div>
                            <button className=' absolute -bottom-4 left-1/2  -translate-x-1/2 px-4 py-2 bg-slate-300 text-[#282830] hover:text-slate-300 hover:bg-[#282830] text-sm transition-all duration-500 uppercase'>read more</button>
                        </div>
                    </div>
            
        </div>
    );
};

export default Culture;