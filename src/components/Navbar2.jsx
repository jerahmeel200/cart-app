import Image from 'next/image';
 
import React from 'react';
import logo from '../../public/assets/images/logo.png';
import call from '../../public/assets/images/call.png';
import security from '../../public/assets/images/security.png';
 
 

const Navbar2 = () => {
  return (
    <header>
      <div className="  rounded-t-lg w-full max-w-[1450px] mx-auto px-2 py-5 md:py-25   bg-[#FFFFFF] shadow-2xl">
        <section className="flex min-h-20 w-full flex-col px-5 py-2">
           
            <div className="flex items-center justify-between w-full md:w-auto">
                
              <div className='w-[206px] h-[31px] md:w-[300px] md:h-[40px] lg:w-[390px] lg:h-[65px]'>
                <Image  src={logo} alt='logo' className='w-[120px] h-[23.95] md:w-[100px] md:h-[20px] lg:w-[120.95px] lg:h-[23.09px]' />
              </div>

              <div >
                <p className='text-[8.26px] leading-[10px] md:text-[29px] md:leading-[30px] lg:text-[32px] lg:leading-[38.73px] font-bold font-interFont'>Select payment</p>
              </div>
              <div className='flex gap-10'>
              <div className='flex  items-center gap-2'>
                <Image className='object-contain' src={call} alt=''/>
                <div>
                    <p className='text-[5.16px] leading-[6.25px] md:text-[18px] md:leading-[20px] lg:text-[20px] lg:leading-[24.2px] font-bold font-interFont'>Need Help?</p>
                    <p className='text-[5.16px] leading-[6.25px] md:text-[18px] md:leading-[20px] lg:text-[20px] lg:leading-[24.2px] font-bold font-interFont'> Contact us</p>
                </div>
              </div>
              <div className='flex  items-center gap-2'>
                <Image className='object-contain' src={security} alt=''/>
                <div>
                    <p className='text-[5.16px] leading-[6.25px] md:text-[18px] md:leading-[20px] lg:text-[20px] lg:leading-[24.2px] font-bold font-interFont'>Secure</p>
                    <p className='text-[5.16px] leading-[6.25px] md:text-[18px] md:leading-[20px] lg:text-[20px] lg:leading-[24.2px] font-bold font-interFont'>Payment</p>
                </div>
              </div>

              </div>
            
         
            </div>
         
          
        </section>
      </div>
    </header>
  );
};

export default Navbar2;
