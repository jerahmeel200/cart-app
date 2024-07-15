"use client";

import React from 'react';
import Image from 'next/image'; // if using Next.js, otherwise use img tag
import bin from '@/../../public/assets/images/delete.png'; // replace with correct path to your image
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  console.log("Cart items:", cartItems); // Debugging statement

  const getQtyInCart = (extraInfos) => {
    const qtyInCartInfo = extraInfos?.find(info => info?.key === 'qtyInCart');
    return qtyInCartInfo ? parseInt(qtyInCartInfo?.value) : 0;
  };

  return (
    <div className="w-full max-w-[1450px] mx-auto px-2 py-5 pt-1 bg-[#D9D9D9]">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Cart ({cartItems.length})</h2>

        {cartItems.map((item) => (
          <div key={item.id} className="border-b pb-4 mb-4 mx-auto">
            <div className="flex items-center justify-between">
              <div className='flex gap-[20px] items-center'>
                <img
                  width={100}
                  height={50}
                  src={item.photos[0] ? `https://api.timbu.cloud/images/${item.photos[0].url}` : '/placeholder.jpg'}
                  alt={item.title}
                  className="w-[40.33px] h-[36.35px] md:w-[60px] md:h-[40px] lg:w-[158.28px] lg:h-[150px]"
                />
                <div className="ml-4 flex gap-[50px]">
                  <div>
                    <p className="font-normal text-[4.9px] leading-[7.55px] md:text-[25px] md:leading-[33.86px] lg:text-[28px] lg:leading-[33.86px]">
                      {item.name}
                    </p>
                    <p className="text-gray-600 text-[9.8px] leading-[8.62px] md:text-[19px] md:leading-[33.86px] lg:text-[22px] lg:leading-[33.86px]">In Stock</p>
                  </div>
                </div>
              </div>

              <div className="">
                <p className="text-[6.22px] leading-[7.55px] md:text-[19px] md:leading-[33.86px] lg:text-[32px] lg:leading-[38.73px] font-semibold">
                  ₦{item.current_price}
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <div className="text-black font-bold flex items-center gap-1">
                <Image className="w-[6.72px] h-[7.51px] md:w-[20px] md:h-[28px] lg:w-[26.38px] lg:h-[31px]" src={bin} alt="" />
                <button
                  onClick={() => {
                    console.log(`Removing item with id: ${item.id}`); // Debugging statement
                    removeFromCart(item.id);
                  }}
                  className="text-[7.13px] leading-[8.62px] md:text-[19px] md:leading-[33.86px] lg:text-[32px] lg:leading-[38.73px] font-bold"
                >
                  REMOVE
                </button>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => {
                    console.log(`Decreasing quantity for item with id: ${item.id}`); // Debugging statement
                    decreaseQuantity(item.id);
                  }}
                  className="bg-[#145771] text-white font-bold px-2 py-1 border rounded text flex justify-center items-center w-[20.07px] h-[20.06px] md:w-[50px] md:h-[20px] lg:w-[65.42px] lg:h-[61px]"
                >
                  -
                </button>
                <span className="mx-2 font-bold text-[7.22px] leading-[8.55px] md:text-[19px] md:leading-[33.86px] lg:text-[16.88px] lg:leading-[38.73px]">
                  {item.quantity}
                </span>
                <button
                  onClick={() => {
                    console.log(`Increasing quantity for item with id: ${item.id}`); // Debugging statement
                    increaseQuantity(item.id);
                  }}
                  className="bg-[#145771] text-white font-bold px-2 py-1 border rounded text flex justify-center items-center w-[20.07px] h-[20.06px] md:w-[50px] md:h-[20px] lg:w-[65.42px] lg:h-[61px]"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Cart;
