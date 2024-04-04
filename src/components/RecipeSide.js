import { foods } from "../data/data";
import Ads from '../images/Ads.png';

const RecipeSide = ({title}) => {
    return ( 
        <div>
             <div className="flex flex-col space-y-12  w-full ">
                <h1 className="font-bold text-4xl ">{title}</h1>
                <div className="space-y-5">
                     {foods.map((food) => {
                       if (food.id > 4 && food.id < 8) {
                          return (
                            <div className="flex space-x-4 items-center ">
                                <div className=" lg:w-1/2">
                                    <img src={food.image} alt=""  className="w-full rounded-xl"/>
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <h1 className="font-bold text-sm sm:text-lg md:text-2xl lg:text-xl">{food.title}</h1>
                                    <p className="text-sm sm:text-lg md:text-2xl lg:text-xl">By Andreas Paula</p>
                                </div>
                            </div>
                          ) 
                       } else {
                        return ''
                       }
                    
                })}</div>
                
                <div className="w-full">
                    <img src={Ads} alt="" className="w-full" />
                </div>
                </div>
        </div>
     );
}
 
export default RecipeSide;