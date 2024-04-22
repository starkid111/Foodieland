import { foods } from "../data/data";
import { IoTimer } from "react-icons/io5";
import { LuUtensils } from "react-icons/lu";
import love from '../images/love.png';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




const Recipes2 = () => {

    useEffect(() => {
        AOS.init({duration:1000})
 },[] )  

    return ( 
        <div className="w-full lg:container lg:mx-auto mt-20 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-3 p-5 justify-between items-center overflow-hidden">
                <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-left  max-w-xl overflow-hidden" data-aos="fade-up-right">Try this delicious recipe to make your day</h1>
                <p className="text-left md:max-w-sm max-w-2xl overflow-hidden" data-aos="fade-up-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos tenetur placeat dolores pariatur aperiam magnam molestiae? Laborum hic perferendis minus!</p>
            </div>

            <div className='grid place-items-center p-5 gap-4 md:grid-cols-2 space-y-6 md:space-y-0 lg:grid-cols-4 lg:container lg:mx-auto overflow-hidden' >
           {foods.map((food) =>  {
            if (food.id > 8) {
                return  (
                    <Link  to={`/Recipes/${food.id}`} className="w-full">
                    <div className='flex flex-col px-2 bg-blue-50 items-center  w-full rounded-xl overflow-hidden' key={food.id}>
                       
                        <div className='relative w-full'>
                        <img src={food.image} alt="" className='w-full rounded-xl' />
                        <img src={love} alt=""  className='absolute top-2 right-2'/>
                        </div>
                        <div className=' p-5 w-full flex flex-col space-y-4'>
                          <h1 className='text-xl font-bold'>{food.title}</h1>
                          <div className='flex justify-between'>
                            <div className='flex items-center space-x-2'>
                               <IoTimer className='w-4 h-4' /> 
                               <p>30 minutes</p>
                            </div>
                            <div className='flex items-center space-x-2'>
                               <LuUtensils  className='w-4 h-4'/> 
                               <p>{food.type}</p>
                            </div>
                          </div>
                        </div>
                       
                    </div>
                    </Link>
                )
            }else {
                return ''
            }
           }
          )          
}

</div>
        </div>
     );
}
 
export default Recipes2;