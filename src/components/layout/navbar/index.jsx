import Image from 'next/image';
import React from 'react';
import logo from '../../../../public/assets/images/logo.png';
import user from '../../../../public/assets/images/user.png';
import cart from '../../../../public/assets/images/cart.png';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className=''>
    <div className="container mx-auto rounded-t-lg pt-5 bg-[#D9D9D9]">
      <section className="flex min-h-20 w-full flex-col  px-5 py-2">
        <div className="relative flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className='w-[206px] h-[31px] md:w-[300px] md:h-[40px] lg:w-[390px] lg:h-[65px]'>
              <Image src={logo} alt='logo' className='' />
            </div>
            <div className="flex items-center gap-2 md:gap-5 md:hidden">
              <div className="relative">
                <Image src={cart} alt='cart' className='w-[20px] h-[20px] md:w-[30px] md:h-[30px] object-contain' />
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#145771] text-white text-xs flex items-center justify-center">2</div>
              </div>
              <Image src={user} alt='user' className='w-[20px] h-[20px] md:w-[30px] md:h-[30px] object-contain' />
            </div>
          </div>
          <div>
            <div className="w-[300px] h-[53px] mx-auto md:w-[500px] lg:w-[700px] mt-5 md:mt-0 md:order-1 md:flex-grow md:px-5 bg-black relative">
              <div className="flex mx-auto items-center gap-2 w-full h-full bg-white border border-black absolute left-[-4px] top-[-6px] px-4">
                <FaSearch className="" />
                <input className="w-full h-full outline-none placeholder-black" placeholder="search" />
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 md:gap-5 md:order-2">
            <div className="relative">
              <Image src={cart} alt='cart' className='w-[20px] h-[20px] md:w-[30px] md:h-[30px] object-contain' />
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#145771] text-white text-xs flex items-center justify-center">2</div>
            </div>
            <Image src={user} alt='user' className='w-[20px] h-[20px] md:w-[30px] md:h-[30px] object-contain' />
          </div>
        </div>
      </section>
    </div>
  </header>
  
  
  
  );
};

export default Navbar;





    <div className="relative w-full max-w-[200px] md:max-w-[739px] mt-2 md:mt-0 md:order-1 md:flex-grow md:px-5">
    <div className="relative bg-gray-300">
      <input 
        type="text" 
        placeholder="Search" 
        className="border-none focus:outline-none focus:ring-0 pl-10 pr-2 py-1 w-full bg-gray-200 placeholder-black"
      />
      <div className="absolute bottom-0 right-0 h-full w-full border-b-2 border-r-2 border-black"></div>
      <FaSearch className="absolute top-1/2 lg:left-9 left-3 transform -translate-y-1/2 text-black pointer-events-none" />
    </div>
  </div>

    