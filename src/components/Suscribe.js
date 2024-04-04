import hero4 from '../images/hero4.png'

const Suscribe = () => {
    return ( 
        <div className='relative mt-20 lg:container lg:mx-auto'>
            {/**Overlay */}
            <div className='absolute flex flex-col justify-center items-center gap-4 mt-4  p-5 w-full h-full '>
             <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold '>Deliciousness to your inbox</h1>
             <p className=' max-w-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quo autem sequi voluptas illo debitis reiciendis quae! Ipsum, dolorum fugiat.</p>
             <div className='flex bg-white px-4 py-2  sm:px-6 rounded-lg'>
                <input type="text" placeholder='Your email address' />
                <button className='px-2 py-1 sm:px-4 sm:py-2 md:px-8 md:py-2  text-white bg-black rounded-xl self-end md:self-end'>Suscribe</button>
             </div>
            </div>
            {/**image */}
            <img src={hero4} alt=""  className='h-[500px] md:h-auto object-cover '/>
        </div>
     );
}
 
export default Suscribe;