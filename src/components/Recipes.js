import {foods} from '../data/data';
import { IoTimer } from "react-icons/io5";
import { LuUtensils } from "react-icons/lu";
import love from '../images/love.png';
import ads from '../images/Ads.png'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Recipes = () => {
   
    useEffect(() => {
        AOS.init({duration:500})
 },[] )    


    return ( 
        <div className="mt-10 w-full space-y-10 overflow-hidden" >
            <div className='w-full lg:container lg:mx-auto p-4 flex flex-col items-center space-y-10'>
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-bold " data-aos="fade-up-right">Simple and tasty recipes</h1>
            <p className="mt-7 text-center  overflow-hidden" data-aos="fade-up-left">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim .
            </p>
            </div>
            <div className='grid place-items-center p-5 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:container lg:mx-auto overflow-hidden' data-aos="zoom-out-down">
           {foods.map((food) =>  {
            if (food.id < 9) {
                return  (
                    <Link  to={`/Recipes/${food.id}`} className="w-full">
                    <div className='flex flex-col px-2 bg-blue-50 items-center  w-full rounded-xl ' key={food.id}>
                        <div className='relative w-full'>
                        <img src={food.image} alt="" className='w-full rounded-xl' />
                        <img src={love} alt=""  className='absolute top-2 right-2'/>
                        </div>
                        <div className=' p-5 w-full flex flex-col space-y-4'>
                          <h1 className='text-2xl font-bold'>{food.title}</h1>
                          <div className='flex justify-between'>
                            <div className='flex items-center space-x-2'>
                               <IoTimer className='w-6 h-6' /> 
                               <p>30 minutes</p>
                            </div>
                            <div className='flex items-center space-x-2'>
                               <LuUtensils  className='w-6 h-6'/> 
                               <p>{food.type}</p>
                            </div>
                          </div>
                        </div>
                    </div>
                    </Link>
                )
            }  else {
                return ''
            }
           }
          )          
}
<div className='w-full'>
    <img src={ads} alt=""  className='w-full'/>
</div>
</div>
                
           
                
           

        </div>
     );
}
 
export default Recipes;