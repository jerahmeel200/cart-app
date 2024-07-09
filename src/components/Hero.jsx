import Image from 'next/image';
import React from 'react';
import hero from '../../public/assets/images/hero.png';

const Hero = () => {
  return (
    <div className=''>
      <div className='container mx-auto px-4 py-5 md:py-25 bg-[#D9D9D9]'>
        <div className='flex md:flex-row items-center justify-between'>
          <div className='md:w-1/2'>
          <h1 className='sm:text-[50px] md:text-[90px] lg:text-[129px] font-newsReader font-[600] sm:leading-[32px] md:leading-[90px] lg:leading-[120px] text-black'>
              SMART <span className='text-[#145771] lg:text-[120px]'>GADGETS</span>
            </h1>
            <p className='hidden sm:block text-[37.09px] font-newCycle leading-[61px] font-[400] text-gray-600 mt-4'>
              The best way to buy the products you love
            </p>
          </div>
          <div className='md:w-1/2'>
            <Image 
              src={hero} 
              alt='Hero Image' 
              className='sm:w-[200px] md:w-[300px] lg:w-[742px]  sm:h-[94.8px] md:h-[400px] lg:h-[350px]'
                
              
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
