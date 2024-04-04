import breakfast from '../images/breakfast.png';
import vegan from '../images/vegan.png';
import meat from '../images/meat.png';
import dessert from '../images/dessert.png';
import lunch from '../images/launch.png';
import chocolate from '../images/chocolate.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Categories = () => {

    useEffect(() => {
        AOS.init({duration:500})
 },[] )

    return ( 
        <div>
          <div className="hidden lg:container lg:mx-auto mt-12 md:flex md:flex-col space-y-14 overflow-hidden" >
                <div className="flex justify-between items-center p-3">
                    <h1 className="text-5xl font-bold " data-aos="fade-up-right">Categories</h1>
                    <div className="bg-blue-50 px-3 py-2 rounded-full overflow-hidden" data-aos="fade-up-left">View all Categories</div>
               </div>
               <div className='grid gap-3 grid-cols-6 overflow-hidden mt-24 ' data-aos="flip-up">
                   <img src={breakfast} alt="" />
                   <img src={vegan} alt="" />
                   <img src={meat} alt="" />
                   <img src={dessert} alt="" />
                   <img src={lunch} alt="" />
                   <img src={chocolate} alt="" />
             </div>
          </div>
          {/**Mobile categories */}
          <div className="md:hidden mt-12 flex flex-col space-y-14">
                <div className="flex justify-between items-center p-3">
                    <h1 className="text-xl sm:text-3xl font-bold" data-aos="fade-up-right">Categories</h1>
                    <div className="bg-blue-50 px-3 py-2 rounded-full" data-aos="fade-up-left">View all Categories</div>
               </div>
               <div className='grid gap-4 grid-cols-4 ' data-aos="flip-up">
                   <img src={breakfast} alt="" />
                   <img src={vegan} alt="" />
                   <img src={meat} alt="" />
                   <img src={dessert} alt="" />
             </div>
          </div>
       </div>  
     );
}
 
export default Categories;