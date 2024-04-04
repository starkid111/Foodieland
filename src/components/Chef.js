import chef from '../images/chef.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Chef = () => {

    useEffect(() => {
        AOS.init({duration:500})
 },[] )

 
    return ( 
        <div className="mt-14 lg:container lg:mx-auto flex flex-col items-center justify-between md:flex-row overflow-hidden">
            <div className='md:w-1/2 flex flex-col space-y-6 p-5 overflow-hidden' data-aos="flip-left">
                <h1 className='text-xl text-left max-w-md md:text-2xl lg:text-4xl font-bold'>Everyone can be a chef in thier own kitchen</h1>
                <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt laudantium veniam fugit velit ad non commodi fugiat quos expedita sit!</p>
                <button className='px-4 py-3 md:px-8 md:py-4  text-white bg-black rounded-xl self-end md:self-start'>Learn More</button>
            </div>
            <div className='md:w-1/2 p-5 overflow-hidden' data-aos="flip-right">
                <img src={chef} alt=""  />
            </div>
        </div>
     );
}
 
export default Chef;