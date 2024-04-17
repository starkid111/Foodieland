import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const BlogListHead = () => {
    
    useEffect(() => {
        AOS.init({duration:2000})
 },[] )


    return ( 
        <div className=" p-4 mt-24 md:mt-20 lg:container lg:mx-auto overflow-hidden " data-aos="zoom-in-down">
            <div className="flex flex-col space-y-8 md:space-y-12 items-center">
                <h1 className="text-3xl md:text-5xl font-bold ">Blog & Article</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aliquid ratione officia itaque molestias corporis.</p>
                <div className='flex justify-between  bg-white px-3 py-2  sm:px-6 rounded-lg border border-gray-500 '>
                <input type="text" placeholder='Search articles,news or recipes..' className="w-full px-6 sm:w-[300px] border-none outline-none" />
                <button className='px-3 py-1 sm:px-4 sm:py-2 md:px-8 md:py-2  text-white bg-black rounded-xl self-end md:self-end'>Search</button>
             </div>
            </div>
        </div>
     );
}
 
export default BlogListHead;