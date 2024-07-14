"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../../public/assets/images/logo.png';
import user from '../../../../public/assets/images/user.png';
import cart from '../../../../public/assets/images/cart.png';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const item = useSelector((state)=>state.cart)
  return (
    <header>
      <div className="  rounded-t-lg w-full max-w-[1450px] mx-auto px-2 py-5 md:py-25 bg-[#D9D9D9]">
        <section className="flex min-h-20 w-full flex-col px-5 py-2">
          <div className="relative flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center justify-between w-full md:w-auto">

              <div className='w-[206px] h-[31px] md:w-[300px] md:h-[40px] lg:w-[390px] lg:h-[65px]'>
                <Link href="/">
                <Image src={logo} alt='logo' className='' />
                </Link>
              </div>
              <div className="flex items-center gap-2 md:gap-5 md:hidden">
                <Link href="/cart">
                  <div className="relative">
                    <Image src={cart} alt='cart' className='w-[20px] h-[20px] md:w-[30px] md:h-[30px] object-contain' />
                    <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#145771] text-white text-xs flex items-center justify-center">2</div>
                  </div>
                </Link>
                <Image src={user} alt='user' className='w-[20px] h-[20px] md:w-[30px] md:h-[30px] object-contain' />
              </div>
            </div>
            <div className="w-full md:w-auto">
              <div className="w-full h-[53px] mx-auto md:w-[500px] lg:w-[700px] mt-5 md:mt-0 md:order-1 md:flex-grow md:px-5 bg-black relative">
                <div className="flex mx-auto items-center gap-2 w-full h-full bg-white border border-black absolute left-[-4px] top-[-6px] px-4">
                  <FaSearch className="" />
                  <input className="w-full h-full outline-none placeholder-black" placeholder="search" />
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 md:gap-5 md:order-2">
              <Link href="/cart">
                <div className="relative">
                  <Image src={cart} alt='cart' className='w-[20px] h-[20px] md:w-[30px] md:h-[30px] object-contain' />
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#145771] text-white text-xs flex items-center justify-center">{item.length}</div>
                </div>
              </Link>
              <Image src={user} alt='user' className='w-[20px] h-[20px] md:w-[30px] md:h-[30px] object-contain' />
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Navbar;
