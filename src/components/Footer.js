import logo from '../images/Foodieland.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div className='mt-20 lg:container lg:mx-auto flex flex-col space-y-5'>
            <div className='flex flex-col space-y-4 md:flex-row justify-between items-center'>
                <div className='flex flex-col space-y-6'>
                <img src={logo} alt=""  className='self-start'/>
                <p className='hidden md:block'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <ul className='flex justify-between space-x-8'>
                        <li>  <NavLink to='/'> home </NavLink>  </li>
                        <li><NavLink to='/BlogList'> Blog </NavLink> </li>
                        <li><NavLink to='/Contact'> Contact </NavLink> </li>
                        <li> <NavLink to='/About'> About us </NavLink> </li>
                </ul>
                <p className='block md:hidden'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <hr />
            <div className='flex flex-col space-y-3 md:flex-row items-center justify-between p-5'>
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