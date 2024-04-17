import { blogs } from '../data/BlogListData';
import { useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const BlogPostHead = () => {

    useEffect(() => {
        AOS.init({duration:2000})
 },[] );
    const {id} = useParams();
    const Allblogs = blogs.find((blog)=> blog.id == id );

    return ( 
        <div className="mt-24 lg:container lg:mx-auto overflow-x-hidden">
             <div className="flex flex-col items-center space-y-10 p-5 " data-aos="fade-down">
                <h1 className='font-medium text-xl sm:text-3xl  md:text-4xl lg:text-5xl font-sans '>Full Guide to Becoming a Professional Chef </h1>
                <div className="flex space-x-4 items-center ">
                    <div className='flex space-x-2 items-center '>
                    <img src={Allblogs.bloggerImage} alt="" />
                    <p>{Allblogs.blogger}</p>
                    </div>
                    <span className='h-6 border border-r border-gray-500'></span>
                    <p>12 November 2024</p>
                </div>
                <div >
                   {Allblogs.description}
                </div>
                <div className='w-full h-[500px] rounded-xl'>
                    <img src={Allblogs.image} alt=""  className='w-full h-full object-cover rounded-3xl '/>
                </div>
             </div>
        </div>
     );
}
 
export default BlogPostHead;