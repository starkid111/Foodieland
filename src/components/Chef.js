import chef from '../images/chef.png'

const Chef = () => {
    return ( 
        <div className="mt-14 lg:container lg:mx-auto flex flex-col items-center justify-between md:flex-row">
            <div className='md:w-1/2 flex flex-col space-y-6 p-5'>
                <h1 className='text-xl text-left max-w-md md:text-2xl lg:text-4xl font-bold'>Everyone can be a chef in thier own kitchen</h1>
                <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt laudantium veniam fugit velit ad non commodi fugiat quos expedita sit!</p>
                <button className='px-4 py-3 md:px-8 md:py-4  text-white bg-black rounded-xl self-end md:self-start'>Learn More</button>
            </div>
            <div className='md:w-1/2 p-5'>
                <img src={chef} alt=""  />
            </div>
        </div>
     );
}
 
export default Chef;