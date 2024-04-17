import john from '../images/john.png';
import { IoTimer } from "react-icons/io5";
import { LuUtensils } from "react-icons/lu";
import print from "../images/print.png";
import share from "../images/share.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const RecipeHeader = () => {


    useEffect(() => {
        AOS.init({duration:1000})
    },[] )  


    return ( 
        <div className="mt-24 lg:container lg:mx-auto ">
            <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row  justify-between  p-5 overflow-hidden">
                <div className="flex flex-col space-y-10 overflow-hidden" data-aos="fade-right">
                    <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium font-sans'>Big and Juicy Wagyu Beef cheeseburger</h1>
                    <div className="flex flex-col space-y-5 md:items-center md:flex-row  space-x-3 lg:space-x-5">

                        <div className='flex space-x-4  md:space-x-3'>
                        <div className="flex space-x-2 items-center">
                            <img src={john} alt="" />
                            <div>
                                <p className='font-bold  text-[10px] sm:text-[12px] md:text-sm'>John Smith</p>
                                <p className='text-gray-500  text-[10px] sm:text-[12px] md:text-sm'>11 september 2022</p>
                            </div>
                        </div>
                        <span className='border-r border '></span>
                        <div className="flex space-x-2 items-center">
                             <IoTimer />
                            <div>
                                <p className='font-bold text-[10px] sm:text-[12px] md:text-sm'>PREP TIME</p>
                                <p className='text-gray-500 text-[12px] md:text-sm'>15 minutes</p>
                            </div>
                        </div>
                        <span className='border-r border hidden md:block '></span>
                        </div>

                        <div className='flex space-x-6  md:space-x-3'>
                        <div className="flex space-x-2 items-center">
                            <IoTimer />
                            <div>
                                <p className='font-bold  text-[10px] sm:text-[12px]md:text-sm'>COOK TIME</p>
                                <p className='text-gray-500  text-[10px] sm:text-[12px] md:text-sm'>15 minutes</p>
                            </div>
                        </div>
                        <span className='border-r border '></span>
                        <div className='flex space-x-2 items-center'>
                            <LuUtensils />
                            <p className='text-gray-500  text-[10px] sm:text-[12px] md:text-sm'>Chicken</p>
                        </div>

                    </div>
                   </div>
           
                </div>
                <div className="flex space-x-4 self-end md:self-auto overflow-hidden" data-aos="fade-left">
                        <div className='flex flex-col space-y-2 items-center'>
                            <img src={print} alt=""  className='lg:w-full w-1/2'/>
                            <p>PRINT</p>
                        </div>
                        <div  className='flex flex-col space-y-2 items-center'>
                            <img src={share} alt=""   className='lg:w-full w-1/2' />
                            <p>SHARE</p>
                        </div>
                    </div>
            </div>
        </div>
     );
}
 
export default RecipeHeader;