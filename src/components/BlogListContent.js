import { Link } from "react-router-dom";
import { blogs } from "../data/BlogListData";
import { foods } from "../data/data";
import Ads from '../images/Ads.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const BlogListContent = () => {

    useEffect(() => {
        AOS.init({duration:1000})
 },[] );


    return ( 
        <div className=" mt-10 lg:container lg:mx-auto p-5 overflow-hidden"  data-aos="zoom-in-up">
            <div className="flex flex-col lg:flex-row overflow-hidden">
                <div className="flex flex-col  space-y-3 lg:w-2/3 w-full overflow-hidden" >
                    {blogs.map((blog)=> {
                        return (
                            <Link to={`/blogs/${blog.id}`}>
                            <div className="flex  flex-col space-y-8 md:flex-row md:space-x-5 items-center p-5 " key={blog.id}>
                                <div className=" w-full lg:w-1/2 ">
                                    <img src={blog.image} alt="" className="w-full" />
                                </div>
                                <div className="flex flex-col justify-between  space-y-6">
                                    <h1 className="font-bold text-xl lg:text-2xl">{blog.title}</h1>
                                    <p className="text-sm lg:text-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eveniet. Nisi, voluptate Lorem ipsum dolor sit amet.</p>
                                    <div className="flex space-x-5 items-center">
                                        <div className="flex space-x-3 items-center">
                                            <img src={blog.bloggerImage} alt="" />
                                            <p className="font-bold text-sm lg:text-md">{blog.blogger}</p>
                                        </div>
                                        <span className="w-2 h-6 border-r border-gray-500"></span>
                                        <div className="text-sm sm:text-md ">21st of November 2023</div>
                                    </div>
                                </div>
                            </div>
                            </Link >
                        )
                    })}
                </div>

               <div className="flex flex-col space-y-12 lg:w-1/3 w-full overflow-hidden" >
                <h1 className="font-bold text-4xl ">Tasty Recipe</h1>
                <div className="space-y-5">
                     {foods.map((food) => {
                       if (food.id > 4 && food.id < 8) {
                          return (
                            <div className="flex space-x-4 items-center ">
                                <div className=" lg:w-1/2">
                                    <img src={food.image} alt=""  className="w-full rounded-xl"/>
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <h1 className="font-bold text-sm sm:text-lg md:text-2xl lg:text-xl">{food.title}</h1>
                                    <p className="text-sm sm:text-lg md:text-2xl lg:text-xl">By Andreas Paula</p>
                                </div>
                            </div>
                          ) 
                       } else {
                        return ''
                       }
                    
                })}</div>
                
                <div className="w-full">
                    <img src={Ads} alt="" className="w-full" />
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default BlogListContent;