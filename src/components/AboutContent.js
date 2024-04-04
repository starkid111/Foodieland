import chef from '../images/chef.png';

const AboutContent = () => {
    return ( 
        <div className='mt-24 lg:container lg:mx-auto'>
           <div className="flex flex-col md:flex-row justify-between md:space-x-10 p-5">
            
            {/**The left side */}
            <div className='flex flex-col space-y-6 md:w-2/3'>
                <h1 className='text-2xl md:text-4xl font-medium font-sans'>What is <span className='text-3xl md:text-5xl font-bold italic'>Foodieland</span> About ?</h1>
                <p className='text-xl font-bold'>Lorem ipsum dolor, sit amet consectetur </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque corrupti culpa fugit quasi odio? Ipsa debitis doloribus cupiditate veniam perspiciatis maiores, excepturi molestias optio ex saepe, fugiat facere repudiandae voluptate!</p>

                <div className="flex flex-col md:flex-row w-full md:space-x-6 ">
                     <img src={chef} alt="" className='md:w-1/2 items-stretch'/>
                     <p className='w-full'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, doloremque? Perferendis debitis consequatur numquam soluta a sunt, rerum est velit magnam explicabo possimus ab odio repudiandae illum recusandae voluptates odit doloremque architecto maiores. Maiores, adipisci? Sapiente voluptatibus nihil itaque aperiam. Eos iste repudiandae dignissimos saepe. Dolores praesentium voluptatum perferendis commodi sit quos quod? Vero voluptate consequuntur iusto eaque sed distinctio?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iusto quidem impedit illum animi, nihil nobis ea fugiat consequuntur? Nostrum?</p>
                </div>

                <div className='flex flex-col space-y-5'>
                    <h1 className='text-2xl md:text-4xl font-medium font-sans'>Our Objectives</h1>
                    <div className='flex flex-col space-y-3'>
                        <h1 className='text-xl font-bold'>Lorem ipsum dolor sit</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt harum fuga iste officia assumenda iure eveniet quia cum aspernatur architecto.</p>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <h1 className='text-xl font-bold'>Lorem ipsum dolor sit</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt harum fuga iste officia assumenda iure eveniet quia cum aspernatur architecto.</p>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <h1 className='text-xl font-bold'>Lorem ipsum dolor sit</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt harum fuga iste officia assumenda iure eveniet quia cum aspernatur architecto.</p>
                    </div>
                 
                </div>
            </div>
              
              {/**The right side */}
              <div className='md:w-1/3 flex flex-col space-y-5'>
                <p className='text-2xl md:text-4xl font-medium font-sans'>Testimonials</p>
                <div className='flex flex-col space-y-3 shadow-xl shadow-black/50 p-5'>
                     <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sapiente. Voluptate impedit perspiciatis dolorem exercitationem nobis dignissimos distinctio, porro obcaecati?"</p>
                     <p className='self-end'>Julian Miller</p>
                </div>
                <div className='flex flex-col space-y-3 shadow-xl shadow-black/50 p-5'>
                     <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sapiente. Voluptate impedit perspiciatis dolorem exercitationem nobis dignissimos distinctio, porro obcaecati?"</p>
                     <p className='self-end'>Julian Miller</p>
                </div>
                <div className='flex flex-col space-y-3 shadow-xl shadow-black/50 p-5'>
                     <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sapiente. Voluptate impedit perspiciatis dolorem exercitationem nobis dignissimos distinctio, porro obcaecati?"</p>
                     <p className='self-end'>Julian Miller</p>
                </div>
                <div className='flex flex-col space-y-3 shadow-xl shadow-black/50 p-5'>
                     <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sapiente. Voluptate impedit perspiciatis dolorem exercitationem nobis dignissimos distinctio, porro obcaecati?"</p>
                     <p className='self-end'>Julian Miller</p>
                </div>

              </div>
            </div> 
        </div>
     );
}
 
export default AboutContent;