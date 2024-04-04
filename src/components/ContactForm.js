import contactImage from '../images/contactImage.png';


const ContactForm = () => {
    return ( 
        <div className='w-full mt-24 lg:container lg:mx-auto'>
            <div className="w-full flex flex-col items-center">
                <h1 className='text-5xl font-medium font-sans p-5 mt-7'>Contact Us</h1>
                <div className='flex  w-full md:p-3 lg:p-5 space-x-5'>
                    <div className='w-1/3 hidden lg:block'>
                        <img src={contactImage} alt="" className='w-full'/>
                    </div>
                    <div className="flex flex-col w-full p-5  lg:w-2/3 space-y-5 mt-7 "> 
                        <div className=" flex flex-col  space-y-8 ">
                        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-10 ">
                          <div className="flex flex-col space-y-2 w-full">
                              <label htmlFor="name" className='text-gray-500 text-sm '>NAME</label>
                              <input type="text" name="name" placeholder="Enter your name.." className='border px-6 py-2 rounded-xl  outline-none' />
                         </div>
                         <div className="flex flex-col space-y-2 w-full">
                         <label htmlFor="subject" className='text-gray-500 text-sm '>SUBJECT</label>
                              <input type="text" name="subject" placeholder="Enter your subject.." className='border px-6 py-2 rounded-xl  outline-none' />
                         </div>
                         </div>

                         <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-10">
                          <div className="flex flex-col space-y-2 w-full">
                          <label htmlFor="email" className='text-gray-500 text-sm '>EMAIL ADDRESS</label>
                              <input type="email" name="email" placeholder="Enter your email.." className='border px-6 py-2 rounded-xl  outline-none' />
                         </div>
                         <div className="flex flex-col space-y-2 w-full">
                         <label htmlFor="enquiry" className='text-gray-500 text-sm '>ENQUIRY TYPE</label>
                            <select name="" id="" className='border px-6 py-2 rounded-xl  text-gray-500 text-sm outline-none'>
                                <option value="culnary school" className='text-gray-500 text-sm '>Culnary school</option>
                                <option value="adevertising" className='text-gray-500 text-sm ' selected>Advertising</option>
                                <option value="recipe" className='text-gray-500 text-sm '>Recipe</option>
                                <option value="consultation" className='text-gray-500 text-sm '>Consultation</option>
                            </select>
                             
                         </div>
                         </div>

                         </div>
                         <div className='flex flex-col space-y-2 w-full'>
                            <label htmlFor="messages" className='text-gray-500 text-sm '>MESSAGES</label>
                         <textarea name="messages" id="" cols="30" rows="5" className='border rounded-xl px-6 py-3' placeholder='Enter your message..'></textarea>
                         </div>
                         <button className='px-4 py-2 md:px-8 md:py-3  text-white bg-black rounded-xl self-start md:self-start'>Submit</button>
                    </div>
        
                </div>
                
            </div>
        </div>
     );
}
 
export default ContactForm;