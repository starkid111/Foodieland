import { FaBars, FaX } from "react-icons/fa6";
import foodieland from "../images/Foodieland.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png"
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {


    const [isMenuopen, setisMenuOpen] = useState(false);
    
    const toggleButton = () => {
        setisMenuOpen(!isMenuopen)
    }
    
    return ( 
    <div className="w-full fixed top-0  z-20 overflow-hidden" data-aos="fade-down">
            
        <div className=" left hidden justify-between lg:container border-b bg-white shawdow-xl shadow-gray-100  py-7 p-5  lg:mx-auto md:flex">
    
            <img src={foodieland} alt="" />
          
               <div>
                    <ul className="flex  space-x-8 ">
                      <li><NavLink to='/'> home </NavLink>  </li>
                      <li><NavLink to='/BlogList'> Blog </NavLink> </li>
                      <li><NavLink to='/Contact'> Contact </NavLink> </li>
                      <li> <NavLink to='/About'> About us </NavLink> </li>
                   </ul>
              </div>


               <div className="flex space-x-12 w-1/1">
               <img src={facebook} alt=""   className="w-[50%] h-4"/>
               <img src={instagram} alt=""  className="w-[50%] h-4" />
               <img src={twitter} alt=""  className="w-[50%] h-4" />
              </div>


        </div>

{/* the mobile navbar */}
         <div className="">
        <div className="flex justify-between border-b bg-white shawdow-xl shadow-gray-100  py-5 px-8  md:hidden">

            <img src={foodieland} alt="" />

           <button 
           onClick={toggleButton}
           className="">
             {isMenuopen ? (<FaX className="h-6 w-6"/>) : (<FaBars className="h-6 w-6"/>)}
           </button>
       </div>

             <div className={`container mx-auto flex flex-col items-center justify-center space-y-20  w-2/3 bg-white duration-300 p-7 z-100 h-screen  ${isMenuopen ? "block fixed  top-20% right-0" : "right-[-100%] fixed" }`}>
                  <ul className="flex flex-col justify-center space-y-14">
                  <li><NavLink to='/'> home </NavLink>  </li>
                      <li><NavLink to='/BlogList'> Blog </NavLink> </li>
                      <li><NavLink to='/Contact'> Contact </NavLink> </li>
                      <li> <NavLink to='/About'> About us </NavLink> </li>
                   </ul>
                   <div className="flex justify-center items-center space-x-10 mt-8 ">
                     <img src={facebook} alt=""   className=" h-4"/>
                     <img src={instagram} alt=""  className=" h-4" />
                     <img src={twitter} alt=""  className=" h-4" />
                 </div>
             </div>

       </div>
       {/* the end of the mobile navbar */}
  </div>
     );
}
 
export default Navbar;