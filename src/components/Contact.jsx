import React from 'react';
import logo2 from "../../public/assets/images/logo2.png"
import { MdEmail } from "react-icons/md";
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="container mx-auto pt-1 py-5 md:py-25 bg-[#D9D9D9]">
    <div className="bg-[#438AA5] p-6 shadow-md flex flex-wrap justify-between">
      <div className="flex justify-between w-1/2">
        <div className="w-full">
          <Image src={logo2} alt='logo' className='w-full max-w-[424px] h-[50px] md:max-w-[200px] md:h-[68px] '/>
        </div>
      </div>
      <div className="mt-4 w-full md:w-1/2">
        <div>
          <p className="font-medium font-interFont text-[10.04px] leading-[15.1px] md:text-[20px] md:leading-[25.86px] lg:text-[24px] lg:leading-[29.05px]">NEW TO SMARTGADGETS?</p>
          <p className=" font-medium  font-interFont text-[10.04px] leading-[15.1px] md:text-[20px] md:leading-[25.86px] lg:text-[24px] lg:leading-[29.05px]">Subscribe to our newsletter to get updates on our latest offers!</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className='relative w-full'>
            <MdEmail className='absolute top-1/2 left-3 transform -translate-y-1/2 text-[12px] md:text-[24px] lg:text-[28px]'/> 
            <input
              type="text"
              placeholder="tricia************@yahoo.com"
              className="w-full md:max-w-[400px] lg:max-w-[494px] h-[23.32px] md:h-[80px] lg:h-[84px] p-2 pl-10 placeholder-black"
              readOnly
            />
          </div>
          <button className="border border-black w-[31.54px] h-[23.32px] md:w-[100px] md:h-[80px] lg:w-[121px] lg:h-[84px] text-[5.04px] leading-[6.1px] md:text-[19px] md:leading-[20.86px] lg:text-[24px] lg:leading-[29px]">
            MALE
          </button>
          <button className="border border-black w-[31.54px] h-[23.32px] md:w-[100px] md:h-[80px] lg:w-[121px] lg:h-[84px] text-[5.04px] leading-[6.1px] md:text-[19px] md:leading-[20.86px] lg:text-[24px] lg:leading-[29px]">
            FEMALE
          </button>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agree"
            className="mr-2 appearance-none h-6 w-6 border border-black checked:bg-blue-600 checked:border-transparent"
          />
          <label className='font-medium text-[10.2px] font-interFont leading-[15.08px] md:text-[19px] md:leading-[33.86px] lg:text-[20px] lg:leading-[24.86px]' htmlFor="agree">
            I agree to Jamie's Privacy and Cookie Policy. You can unsubscribe from newsletters at any time.
          </label>
        </div>
        <div className="mt-4">
          <a href="#" className="underline font-medium text-[10.2px] font-interFont leading-[15.08px] md:text-[19px] md:leading-[33.86px] lg:text-[20px] lg:leading-[24.86px]">I accept the Legal Terms</a>
        </div>
      </div>
    </div>
  </div>
  

  
  );
};

export default Contact;
