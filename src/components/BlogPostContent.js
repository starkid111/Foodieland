import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';



const BlogPostContent = () => {
   
    return ( 
        <div className='lg:container lg:mx-auto'>
            <div className="p-5 md:px-20 flex flex-col space-y-10 md:space-y-0   md:flex-row md:space-x-5 w-full">
                <div className="flex flex-col space-y-12 w-full ">
                    <div className='flex flex-col space-y-4'>
                        <h1 className='font-medium text-xl font-sans'>How did you start out in the food industry?</h1>
                        <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione officiis debitis reiciendis consequatur exercitationem, adipisci libero unde eligendi! Reiciendis aut, id, praesentium quos dolorum, voluptatem temporibus quod natus similique animi excepturi quam iusto beatae non nihil. Veniam cum asperiores expedita.</p>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <h1 className='font-medium text-xl font-sans'>How did you start out in the food industry?</h1>
                        <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione officiis debitis reiciendis consequatur exercitationem, adipisci libero unde eligendi! Reiciendis aut, id, praesentium quos dolorum, voluptatem temporibus quod natus similique animi excepturi quam iusto beatae non nihil. Veniam cum asperiores expedita.</p>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <h1 className='font-medium text-xl font-sans'>How did you start out in the food industry?</h1>
                        <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione officiis debitis reiciendis consequatur exercitationem, adipisci libero unde eligendi! Reiciendis aut, id, praesentium quos dolorum, voluptatem temporibus quod natus similique animi excepturi quam iusto beatae non nihil. Veniam cum asperiores expedita.</p>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <h1 className='font-medium text-xl font-sans'>How did you start out in the food industry?</h1>
                        <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione officiis debitis reiciendis consequatur exercitationem, adipisci libero unde eligendi! Reiciendis aut, id, praesentium quos dolorum, voluptatem temporibus quod natus similique animi excepturi quam iusto beatae non nihil. Veniam cum asperiores expedita.</p>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <h1 className='font-medium text-xl font-sans'>How did you start out in the food industry?</h1>
                        <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione officiis debitis reiciendis consequatur exercitationem, adipisci libero unde eligendi! Reiciendis aut, id, praesentium quos dolorum, voluptatem temporibus quod natus similique animi excepturi quam iusto beatae non nihil. Veniam cum asperiores expedita.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center space-y-4 md:space-y-8 w-full  md:w-1/2">
                    <h1 className='font-medium text-xl font-sans'>SHARE THIS ON:</h1>
                    <div className='flex flex-row space-x-10 md:flex-col md:space-x-0 md:space-y-8'>
                    <img src={facebook} alt="" />
                    <img src={twitter} alt=""  />
                    <img src={instagram} alt="" />
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default BlogPostContent;