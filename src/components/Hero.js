import hotrecipe from '../images/hotrecipe.png';
import john from '../images/john.png';
import playCircle from '../images/PlayCircle.png';
import { IoTimer } from "react-icons/io5";
import { LuUtensils } from "react-icons/lu";
import badge from "../images/Badge.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Hero = ({title , image , type}) => {

    useEffect(() => {
        AOS.init({duration:2000})
 },[] )

    return ( 
        <div className='p-4 mt-14 md:mt-20 overflow-x-hidden' data-aos="zoom-in-down">
             {/* Mobile hero section*/}
             <div className=" mobile relative h-[400px]  md:hidden sm:h-[500px]">
                  {/** overlay  */}
                 <div className="absolute bg-black/50 h-full flex flex-col max-h-[500px] w-full rounded-xl p-2"> 
                            <div className='bg-white flex items-center p-3  self-start mt-5 space-x-2 px-4 py-1 rounded-xl'>
                               <img src={hotrecipe} alt="" />
                               <p className='text-black text-sm'>Hot Recipes</p>     
                           </div>

                       <h1 className='text-left text-4xl text-white font-bold  sm:max-w-md p-4 sm:text-5xl'>{title}</h1>

                     <div className='flex  gap-[50px] sm:gap-[150px] items-center mt-2 sm:mt-10 p-4 '>
                          <div className='flex items-center space-x-3'>
                              <IoTimer className='text-white sm:w-6 sm:h-6' />
                             <p className='text-white text-xl sm:text-2xl'>30 Minutes</p>
                         </div>
                         <div className='flex space-x-3'>
                         <LuUtensils className='text-white   sm:w-6 sm:h-6' />
                               <p className='text-white text-xl sm:text-2xl'>{type}</p>
                         </div>
                      </div>
                        
                        <div className='w-full'>
                       <div className='flex  justify-between  absolute bottom-0 left-0 items-center w-full   p-1 sm:p-3 mt-3 sm:mt-12 '>
                              <div className='flex space-x-2 items-center'>
                                  <img src={john} alt=""  className='w-[35px]'/>
                                 <div>
                                      <h2 className='text-sm font-bold text-white sm:text-xl'>John Smith</h2>
                                      <p className='text-white text-sm'>15 March 2024</p>
                                  </div>
                             </div>
                              <div className='bg-black flex items-center    space-x-1 sm:space-x-2 px-1 sm:px-2 py-1 rounded-xl'>
                                   <p className='text-white text-sm'>View Recipes</p>
                                   <img src={playCircle} alt="" />
                             </div>
                       </div>
                       </div>
                 </div>
                  {/**image section */}
                 <div className='h-full'> 
                    <img src={image} alt=""  className='w-full h-full object-cover rounded-xl'/>
                 </div>
             </div>


             {/**Desktop view  */}
             <div className='hidden w-full  custom-md-breakpoint  md:flex lg:container  lg:mx-auto relative'>
                {/**Badge */}
                <div className='absolute right-[35%] md:right-[40%]  lg:right-[45%] top-5'>
                    <img src={badge} alt="" className='w-[50%] md:w-[90%]  lg:w-[100%]' />
                </div>
                  {/**left side  */}
                  
                   <div className=" bg-blue-50  flex flex-col w-1/2  overflow-hidden rounded-xl p-2"> 
                            <div className='bg-white flex items-center p-3  self-start mt-5 space-x-2 px-3 lg:px-5 py-1 lg:py-3 rounded-xl'>
                               <img src={hotrecipe} alt="" />
                               <p className='text-black text-sm md:text-xl font-bold'>Hot Recipes</p>     
                           </div>

                       <h1 className='text-left text-black font-medium p-4 text-3xl md:max-w-sm lg:max-w-[500px] md:text-4xl md:mt-9 font-sans lg:text-5xl'>{title}</h1>


                       <p className=' text-black text-left  p-3 text-sm max-w-[600px] md:text-xl md:mt-5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit commodi optio ab deleniti explicabo.</p>

                     <div className='flex gap-[100px] md:gap-[150px]  items-center mt-6 md:mt-6 p-4 '>
                          <div className='flex items-center space-x-2 lg:space-x-3'>
                              <IoTimer className='text-black w-5 h-5 lg:w-6 lg:h-6' />
                             <p className='text-black text-sm md:text-xl lg:text-2xl '>30 Minutes</p>
                         </div>
                         <div className='flex items-center space-x-3'>
                         <LuUtensils className='text-black w-5 h-5 lg:w-6 lg:h-6' />
                               <p  className='text-black text-sm md:text-xl lg:text-2xl'>{type}</p>
                         </div>
                      </div>
                        
                       
                       <div className='flex  justify-between items-center space-x-[2em] p-3 absolute bottom-0 left-0 w-1/2  '>
                              <div className='flex space-x-2 items-center'>
                                  <img src={john} alt="" />
                                 <div>
                                      <h2 className='text-xl lg:text-2xl font-bold text-black'>John Smith</h2>
                                      <p className='text-black text-sm md:text-xl'>15 March 2024</p>
                                  </div>
                             </div>
                              <div className='bg-black flex items-center space-x-2 lg:space-x-3 px-2 lg:px-3  py-1 lg:py-2 rounded-xl'>
                                   <p className='text-white text-sm md:text-2xl'>View Recipes</p>
                                   <img src={playCircle} alt=""  className='lg:w-6 lg:h-6'/>
                             </div>
                       </div>
                       
                 </div>
                  
                   {/**Right side */}
                  
                    <img src={image} alt=""  className=' object-cover rounded-xl w-1/2  md:h-[550px]'/>
                
             </div>
        </div>
     );
}
 
export default Hero;