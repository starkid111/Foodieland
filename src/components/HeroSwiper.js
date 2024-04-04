import Hero from "./Hero";
import hero1 from "../images/hero1.png";
import hero2 from "../images/hero2.png";
import hero3 from "../images/hero3.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'

const HeroSwiper = () => {
    return ( 
        <>
        <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay = {{delay : 1000}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide> <Hero  title ="Spicy Delicious Chicken Wings" image = {hero1} type="Turkey"/></SwiperSlide>
        <SwiperSlide> <Hero  title ="Chicken Meatballs with Cream Cheese" image = {hero2} type="Meat" className = "w-full h-full"/></SwiperSlide>
        <SwiperSlide> <Hero  title ="Chicken Ramen Soup with Mushroom" image = {hero3} type="Japanese"/></SwiperSlide>

         </Swiper>   
        
        </>
     );
}
 
export default HeroSwiper;