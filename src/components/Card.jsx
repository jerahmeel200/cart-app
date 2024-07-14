// components/Card.js
"use client";
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '@/redux/Cartslice';
import Spinner from './Spinner';
import Link from 'next/link';

const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
};

const Card = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Adjust this value for the number of items per page
  const [loading, setLoading] = useState(true); // Loading state
  const dispatch = useDispatch();

  const getProducts = async () => {
    try {
      const res = await fetch("https://timbu-get-all-products.reavdev.workers.dev/?organization_id=73a93f8dfa8c4446ad60a72206a9c5e8&Appid=TBQU4BA070V7C3X&Apikey=b4a146d23aab4474b0f439f0c666625b20240713045829437701");
      const data = await res.json();
      console.log("Fetched data:", data); // Log the fetched data to see its structure
      if (data.items && Array.isArray(data.items)) {
        setProducts(data.items);
      } else {
        console.error("Data items is not an array:", data);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  const handleAdd = (product) => {
    const productToAdd = {
      ...product,
      price: product.current_price?.[0]?.NGN?.[0] // Ensure price is extracted correctly
    };
    dispatch(add(productToAdd));
    console.log("Added to cart:", productToAdd);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(products) ? products.slice(indexOfFirstItem, indexOfLastItem) : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="pb-10 pt-10 w-full max-w-[1450px] mx-auto bg-[#D9D9D9]">
  {loading ? (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  ) : (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 px-2 gap-3">
        {currentItems.map((product) => (
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
                ₦{product.current_price[0].NGN[0]}
              </p>
            </div>
            <div  onClick={() => handleAdd(product)} className="flex gap-2 mt-2">
              <button className="bg-[#145771] text-white  text-[7.88px] md:text-[18px] lg:text-[24px] w-full max-w-[162.23px] h-auto max-h-[53px] py-1 rounded-md font-bold">
                Buy Now
              </button>
              <button
                onClick={() => handleAdd(product)}
                className=" bg-gray-300 border-2 text-[#145771] border-[#145771] text-[7.88px] md:text-[18px] lg:text-[24px] w-full max-w-[162.23px] h-auto max-h-[53px] py-1 rounded-md font-bold"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {[...Array(Math.ceil(products.length / itemsPerPage)).keys()].map((number) => (
          <button
            key={number}
            onClick={() => paginate(number + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === number + 1 ? 'bg-[#145771] text-white' : 'bg-white text-[#145771]'
            }`}
          >
            {number + 1}
          </button>
        ))}

          </div>
        </>
      )}
    </div>
  );
};

export default Card;
