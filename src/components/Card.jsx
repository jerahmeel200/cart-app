import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '@/redux/Cartslice';
import Spinner from './Spinner';
import Link from 'next/link';
import { useProductsData } from '@/context/ProductsDataContext';
import { useCart } from '@/context/CartContext';

const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
};

const Card = () => {
  const { addToCart } = useCart();

  const { items, isLoading, error } = useProductsData();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(items?.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedProducts = items?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  

  return (
    <div className="pb-10 pt-10 w-full max-w-[1450px] mx-auto bg-[#D9D9D9]">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 px-2 gap-3">
            {paginatedProducts?.map((product) => (
              <div
                key={product.id}
                className="cursor-pointer bg-white p-4 py-1 rounded-lg shadow-md mx-auto flex flex-col justify-between w-full max-w-[430px] h-full max-h-[490px]"
              >
                <Link href={`/product/${product.id}`} passHref>
                  <img
                    width={100}
                    height={100}
                    src={product.photos[0] ? `https://api.timbu.cloud/images/${product.photos[0].url}` : '/placeholder.jpg'}
                    alt={product.name}
                    className="mx-auto mb-2 w-[87.47px] h-[88.31px] sm:w-[190px] sm:h-[200px] md:w-[227.33px] md:h-[269px] object-contain"
                  />
                </Link>
                <div>
                  <h2 className="text-[7.22px] leading-[11.88px] sm:text-[22px] sm:leading-[36.18px] md:text-[20px] md:leading-[36.18px] font-semibold">
                    {truncateText(product.name, 5)}
                  </h2>
                  <p className="text-[7.22px] leading-[11.88px] sm:text-[22px] sm:leading-[36.18px] md:text-[22px] md:leading-[36.18px] font-semibold">
                    ₦{product?.current_price[0].NGN}
                  </p>
                </div>
                <div className="flex gap-2 mt-2">
                  <button  onClick={() => addToCart(product?.id)} className="bg-[#145771] text-white text-[7.88px]
                   md:text-[18px] lg:text-[24px] w-full max-w-[162.23px] h-auto max-h-[53px] py-1 rounded-md font-bold">
                    Buy Now
                  </button>
                  <button
                     onClick={() => addToCart(product?.id)}
                    className="bg-gray-300 border-2 text-[#145771] border-[#145771] text-[7.88px] md:text-[18px] lg:text-[24px] w-full max-w-[162.23px] h-auto max-h-[53px] py-1 rounded-md font-bold"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
       
          <div className='flex justify-center gap-1 lg:gap-4 lg:mt-14'>
            <button
              className={`transition ease-in-out delay-100 hover:scale-110 duration-300 poppins text-[#667085] text-sm py-1 px-2 sm:py-2 sm:px-4 border border-[#e3e3e3] bg-[#FAF7EF] ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`transition ease-in-out delay-100 hover:scale-110 duration-300 poppins text-[#667085] text-sm font-semibold py-2 px-3 border border-[#e3e3e3] ${currentPage === i + 1 ? 'gradient-background' : 'bg-[#FAF7EF]'}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className={`transition ease-in-out delay-100 hover:scale-110 duration-300 poppins text-[#667085] text-sm px-1 py-2 sm:py-2 sm:px-4 border border-[#e3e3e3] bg-[#FAF7EF] ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
