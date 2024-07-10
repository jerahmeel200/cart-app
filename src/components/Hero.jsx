import Image from 'next/image';
import React from 'react';
import hero from '../../public/assets/images/hero.png';

const Hero = () => {
  return (
    <div className=''>
      <div className=' w-full max-w-[1450px] mx-auto px-2 py-5 md:py-25 bg-[#D9D9D9]'>
        <div className='flex md:flex-row items-center justify-center'>
          <div className='w-1/2 '>
          <h1 className=' font-newsReader font-semibold text-[32px] leading-[32px] md:text-[100px] md:leading-[25.86px] lg:text-[90px] lg:leading-[120px] text-black'>
              SMART <h1 className='text-[#145771] lg:text-[120px]'>GADGETS</h1>
            </h1>
            <p className='hidden sm:block text-[37.09px] font-newCycle leading-[61px] font-[400] text-gray-600 mt-4'>
              The best way to buy the products you love
            </p>
          </div>
          <div className='w-1/2'>
            <Image 
              src={hero} 
              alt='Hero Image' 
              className='object-contain sm:w-[200px] md:w-[500px] lg:w-[742px]  sm:h-[94.8px] md:h-[400px] lg:h-[350px]'
                
              
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
