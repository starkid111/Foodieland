import { useParams } from 'react-router-dom';
import play from '../images/play.png';
import RecipeSide from './RecipeSide';
import { foods } from '../data/data';


const RecipeContent = () => {
   const {id} = useParams();
    let Recipe = foods.find(food => food.id == id);
    
    return ( 
        <div className='mt-14 lg:container lg:mx-auto' >
            <div className='flex flex-col md:flex-row md:justify-between md:space-x-5 p-5 space-y-5 md:space-y-0 items-center '>
                <div className='relative w-full  md:w-2/3  md:h-[600px] '>
                    <img src={Recipe.image} alt=""  className='w-full h-full rounded-xl object-cover'/>
                    <img src={play} alt=""  className='absolute top-[45%] right-[45%] w-16 md:w-24'/>
                </div>
                <div className='bg-[#E7FAFE] rounded-xl p-5 space-y-4 flex flex-col w-full md:w-1/3 self-stretch md:h-[600px]'>
                    <h1 className='font-medium text-xl lg:text-3xl my-4'>Nutritional information</h1>
                    <div className='flex justify-between'>
                        <p>calories</p>
                        <p className='font-bold'>219.9kcal</p>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <p>calories</p>
                        <p className='font-bold'>219.9kcal</p>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <p>calories</p>
                        <p className='font-bold'>219.9kcal</p>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <p>calories</p>
                        <p className='font-bold'>219.9kcal</p>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <p>calories</p>
                        <p className='font-bold'>219.9kcal</p>
                    </div>
                    <hr />

                    
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, cupiditate?</p>
                    
                </div>
            </div>
            
            <div className='p-5'>
            <p>{Recipe.description}</p>
            </div>


            <div className='flex flex-col md:space-x-12 w-full p-5 md:flex-row'>
                  <div className='flex-col w-full space-y-6'>
                      <div className='flex flex-col space-y-7'>
                        <h1 className='text-3xl font-bold'>Ingredients</h1>
                        <div className='flex flex-col space-y-6'>
                            <div className='flex  space-x-4'>
                            <input type="checkbox" name="" id="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                            <hr />
                            <div className='flex space-x-4'>
                            <input type="checkbox" name="" id="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                            <hr />
                            <div className='flex space-x-4'>
                            <input type="checkbox" name="" id="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                            <hr />
                            <div className='flex space-x-4'>
                            <input type="checkbox" name="" id="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                            <hr />
                            <div className='flex space-x-4'>
                            <input type="checkbox" name="" id="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                            <hr />
                            <div className='flex space-x-4'>
                            <input type="checkbox" name="" id="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                            <hr />
                            <div className='flex space-x-4'>
                            <input type="checkbox" name="" id="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                            <hr />
                        </div>
                      </div>

                      <div className='flex flex-col space-y-6'> 
                        <h1 className='text-3xl font-bold'>Directions</h1>
                         <div className='flex flex-col space-y-5'>
                               <div className='flex flex-col space-y-2'>
                                <h1 className='text-3xl font-bold'>1. Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempora temporibus cum enim est deleniti minima beatae quas doloremque optio?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, facere! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, totam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dignissimos!
                                </p>
                               </div>
                               <hr />

                               <div className='flex flex-col space-y-2 '>
                                <h1 className='text-3xl font-bold'>2. Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempora temporibus cum enim est deleniti minima beatae quas doloremque optio?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, facere! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                               </div>
                               <hr />

                               <div className='flex flex-col space-y-2'>
                                <h1 className='text-3xl font-bold'>3. Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempora temporibus cum enim est deleniti minima beatae quas doloremque optio?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
                                </p>
                               </div>
                               <hr />
                         </div>
                      </div>
                  </div>

                  <div className=''>
                    <RecipeSide  title = "Other recipes" className="w-full" />
                  </div>
            </div>

        </div>
     );
}
 
export default RecipeContent;