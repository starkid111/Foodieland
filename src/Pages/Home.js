import Categories from '../components/Categories';
import Recipes from '../components/Recipes';
import Chef from '../components/Chef';
import Instagram from '../components/Instagram';
import Recipes2 from '../components/Recipes2';
import Suscribe from '../components/Suscribe';
import HeroSwiper from '../components/HeroSwiper';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Home = () => {

    useEffect(() => {
           AOS.init({duration:1000})
    },[] )

    return ( 
        <div>
     <HeroSwiper />
     <Categories />
     <Recipes />
     <Chef />
     <Instagram />
     <Recipes2 />
     <Suscribe />
        </div>
     );
}
 
export default Home;