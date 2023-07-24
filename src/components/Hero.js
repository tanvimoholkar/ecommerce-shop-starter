import React from 'react';
//import images
import WomanImg from '../img/woman_hero.png';
//import link
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='bg-pink-200 h-[800px] bg-no-repeat bg-hero bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        {/*text*/}
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div>Check out the New Trends!</div>
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>SEASONAL SALE! <br />
          <span className='font-semibold '>STYLISH OUTFITS!</span>
          </h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>Discover More</Link>
        </div>
         {/*image*/}
        <div className='hidden lg:block'>
          <img src={WomanImg} alt="" />
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
