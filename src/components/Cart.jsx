"use client"

import React, { useState } from 'react';
import Image from 'next/image'; // if using Next.js, otherwise use img tag
import image4 from '@/../../public/assets/images/image 2.png'; // replace with correct path to your image
import bin from '@/../../public/assets/images/delete.png'; // replace with correct path to your image

const Cart = () => {
  // Initialize state for item quantities
  const [item1Quantity, setItem1Quantity] = useState(1);
  const [item2Quantity, setItem2Quantity] = useState(1);

  // Handlers for incrementing and decrementing item quantities
  const incrementItem1 = () => setItem1Quantity(item1Quantity + 1);
  const decrementItem1 = () => setItem1Quantity(item1Quantity > 1 ? item1Quantity - 1 : 1);
  const incrementItem2 = () => setItem2Quantity(item2Quantity + 1);
  const decrementItem2 = () => setItem2Quantity(item2Quantity > 1 ? item2Quantity - 1 : 1);

  return (
    <div className="container mx-auto pt-1 bg-[#D9D9D9]">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Cart (2)</h2>

        {/* Item 1 */}
        <div className="border-b pb-4 mb-4 mx-auto">
          <div className="flex items-center">
            <Image 
              src={image4} 
              alt="Apple iPhone 15 Pro Max" 
              className="
                w-[40.33px] h-[36.35px] 
                md:w-[60px] md:h-[40px] 
                lg:w-[158.28px] lg:h-[150px]
              " 
            />
            <div className="ml-4 flex gap-[50px]">
              <div>
                <p className="font-normal text-[4.9px] leading-[7.55px] md:text-[25px] md:leading-[33.86px] lg:text-[28px] lg:leading-[33.86px]">
                  Apple iPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium
                </p>
                <p className="text-gray-600 text-[9.8px] leading-[8.62px] md:text-[19px] md:leading-[33.86px] lg:text-[22px] lg:leading-[33.86px]">In Stock</p>
              </div>
              <div className="">
                <p className=" text-[6.22px] leading-[7.55px] md:text-[19px] md:leading-[33.86px] lg:text-[32px] lg:leading-[38.73px] font-semibold">₦1,799,000.00</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="text-black font-bold flex items-center gap-1">
              <Image className=' w-[6.72px] h-[7.51px] 
                md:w-[20px] md:h-[28px] 
                lg:w-[26.38px] lg:h-[31px]' src={bin} alt=''/>
               <span className='text-[7.13px] leading-[8.62px] md:text-[19px] md:leading-[33.86px] lg:text-[32px] lg:leading-[38.73px] font-bold '>REMOVE</span> </div>
            <div className="flex items-center">
              <button 
                onClick={incrementItem1}
                className="bg-[#145771] text-white font-bold px-2 py-1 border rounded text flex justify-center items-center  w-[20.07px] h-[20.06px] 
                md:w-[50px] md:h-[20px] 
                lg:w-[65.42px] lg:h-[61px]">+</button>
              <span className="mx-2 font-bold  text-[7.22px] leading-[8.55px] md:text-[19px] md:leading-[33.86px] lg:text-[16.88px] lg:leading-[38.73px]">{item1Quantity}</span>
              <button 
                onClick={decrementItem1}
                className="bg-[#145771] text-white font-bold px-2 py-1 border rounded text flex justify-center items-center  w-[20.07px] h-[20.06px] 
                md:w-[50px] md:h-[20px] 
                lg:w-[65.42px] lg:h-[61px]">-</button>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="border-b pb-4 mb-4 mx-auto">
          <div className="flex items-center">
            <Image 
              src={image4} 
              alt="Apple iPhone 15 Pro Max" 
              className="
                w-[40.33px] h-[36.35px] 
                md:w-[60px] md:h-[40px] 
                lg:w-[158.28px] lg:h-[150px]
              " 
            />
            <div className="ml-4 flex gap-[50px]">
              <div>
                <p className="font-normal text-[4.9px] leading-[7.55px] md:text-[25px] md:leading-[33.86px] lg:text-[28px] lg:leading-[33.86px]">
                  Apple iPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium
                </p>
                <p className="text-gray-600 text-[9.8px] leading-[8.62px] md:text-[19px] md:leading-[33.86px] lg:text-[22px] lg:leading-[33.86px]">In Stock</p>
              </div>
              <div className="">
                <p className=" text-[6.22px] leading-[7.55px] md:text-[19px] md:leading-[33.86px] lg:text-[32px] lg:leading-[38.73px] font-semibold">₦1,799,000.00</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="text-black font-bold flex items-center gap-1">
              <Image className=' w-[6.72px] h-[7.51px] 
                md:w-[20px] md:h-[28px] 
                lg:w-[26.38px] lg:h-[31px]' src={bin} alt=''/>
               <span className='text-[7.13px] leading-[8.62px] md:text-[19px] md:leading-[33.86px] lg:text-[32px] lg:leading-[38.73px] font-bold '>REMOVE</span> </div>
            <div className="flex items-center">
              <button 
                onClick={incrementItem2}
                className="bg-[#145771] text-white font-bold px-2 py-1 border rounded text flex justify-center items-center  w-[20.07px] h-[20.06px] 
                md:w-[50px] md:h-[20px] 
                lg:w-[65.42px] lg:h-[61px]">+</button>
              <span className="mx-2 font-bold  text-[7.22px] leading-[8.55px] md:text-[19px] md:leading-[33.86px] lg:text-[16.88px] lg:leading-[38.73px]">{item2Quantity}</span>
              <button 
                onClick={decrementItem2}
                className="bg-[#145771] text-white font-bold px-2 py-1 border rounded text flex justify-center items-center  w-[20.07px] h-[20.06px] 
                md:w-[50px] md:h-[20px] 
                lg:w-[65.42px] lg:h-[61px]">-</button>
            </div>
          </div>
        </div>

        {/* Subtotal and Checkout */}
      </div>
    </div>
  );
}

export default Cart;
