import Hero from '../components/hero';
import DishOfDay from '../components/dishOfDay';
import Menuiew from '../components/menuView';
import Services from '../components/services';
import About from '../components/about';
import Testimonials from '../components/testimonials';
import Reservation from '../components/reservation';
import TestimonialHero from '../components/testimonial-hero';
import Features from '../components/Features';
import InfoHero from '../components/InfoHero';

export default function IndexPage() {
  return (
    <div>
      <Hero />
      {/* <DishOfDay /> */}
      <Features />
      <img
        class="max-w-full h-auto mx-auto"
        src="/the-bridge-cafe-menu.png"
        alt="image description"
      ></img>
      {/* 
           <Menuiew/>
           <Services/>
           <About/>
           <Testimonials/>
           <Reservation/> */}
    </div>
  );
}
