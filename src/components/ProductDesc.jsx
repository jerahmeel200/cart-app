import Image from 'next/image';
import React from 'react';
import cart from "../../public/assets/images/cart-white.png";
import { useCart } from '@/context/CartContext';
 

const ProductDesc = ({ product }) => {
  const { addToCart } = useCart();
    

    return (
        <div className='w-full max-w-[1450px] mx-auto pt-10 py-5 md:py-25 bg-[#D9D9D9] shadow-md'>
            <div className='px-3 md:px-0 lg:px-0'>
                <div className='bg-white h-auto rounded-md p-5 flex items-center'>
                    <div>
                        <img
                            className='w-[73.33px] h-[76.32px] md:w-[200px] md:h-[300px] lg:w-[286.96px] lg:h-[318px] object-contain'
                            width={100}
                            height={100}
                            src={product.photos && product.photos[0] ? `https://api.timbu.cloud/images/${product.photos[0].url}` : '/placeholder.jpg'}
                            alt={product.name}
                        />
                    </div>
                    <div className='pl-5 flex-1'>
                        <p className='text-lg font-semibold'>{product.name}</p>
                        <p className='text-sm text-gray-500'>Brand: Apple | Similar products from Apple</p>
                        <div className='mt-2'>
                            <div className='border-t-2 border-gray-300 w-full'></div>
                            <p className='text-xl font-bold mt-1'>
                            ₦{product.current_price}

                            </p>
                        </div>
                        <div className='flex justify-center mt-4'>
                            <button onClick={() => addToCart(product?.id)} className='flex items-center justify-center w-[259.7px] h-[23.04px] md:w-[500px] md:h-[50px] lg:w-[1000px] lg:h-[96px] bg-[#145771] text-white py-2 px-4 rounded'>
                                <Image 
                                    className='mr-2' 
                                    src={cart} 
                                    alt='Cart Icon' 
                                    width={20} 
                                    height={20} 
                                />
                                <span className='ml-2'>Add To Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDesc;
