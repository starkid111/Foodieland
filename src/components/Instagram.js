import post1 from '../images/Post1.png';
import post2 from '../images/Post2.png';
import post3 from '../images/Post3.png';
import post4 from '../images/Post4.png';
import instagramw from '../images/instagramw.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Instagram = () => {

    useEffect(() => {
        AOS.init({duration:500})
 },[] )

    return ( 
        <div className="mt-24 lg:container lg:mx-auto flex flex-col items-center space-y-20 p-6 overflow-x-hidden">
            <div  className='flex flex-col items-center space-y-5' data-aos='fade-up'>
                <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>Check out @foodieland on Instagram</h1>
                <p className='max-w-4xl '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi quibusdam temporibus dolorem, provident id odit quae autem ad voluptatem.</p>
            </div>
            <div className='flex flex-col items-center space-y-20 p-6 w-full bg-blue-50 overflow-hidden' data-aos="zoom-out-down">
            <div className='grid place-items-center  gap-5 md:grid-cols-2 lg:grid-cols-4 w-full'>
                <img src={post1} alt="" className='w-full' />
                <img src={post2} alt="" className='w-full'/>
                <img src={post3} alt=""  className='w-full'/>
                <img src={post4} alt=""  className='w-full'/>
            </div>
            <div className='bg-black flex items-center  space-x-3 px-4 cursor-pointer md:px-6 py-2 rounded-xl'>
                                   <p className='text-white text-sm'>Visit our Instagram</p>
                                   <img src={instagramw} alt="" />
              </div>
              </div>
        </div>
     );
}
 
export default Instagram;