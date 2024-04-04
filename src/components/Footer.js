import logo from '../images/Foodieland.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer = () => {

    useEffect(() => {
        AOS.init({duration:2000})
 },[] )
      
    return ( 
        <div className='mt-20 lg:container lg:mx-auto flex flex-col space-y-5 overflow-hidden'>
            <div className='flex flex-col space-y-4 md:flex-row justify-between items-center'>
                <div className='flex flex-col space-y-6 overflow-hidden' data-aos="fade-right">
                <img src={logo} alt=""  className='self-start'/>
                <p className='hidden md:block'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <ul className='flex justify-between space-x-8 overflow-hidden' data-aos="fade-left">
                        <li>  <NavLink to='/'> home </NavLink>  </li>
                        <li><NavLink to='/BlogList'> Blog </NavLink> </li>
                        <li><NavLink to='/Contact'> Contact </NavLink> </li>
                        <li> <NavLink to='/About'> About us </NavLink> </li>
                </ul>
                <p className='block md:hidden' data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <hr />
            <div className='flex flex-col space-y-3 md:flex-row items-center justify-between p-5 overflow-hidden'>
                <div></div>
                <div>2023 built by <span className='text-orange-400'>Ramadan</span></div>
                <div className='flex justify-between space-x-5'>
                  <img src={facebook} alt="" />
                  <img src={instagram} alt="" />
                  <img src={twitter} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Footer;