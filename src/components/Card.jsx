"use client"

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '@/redux/Cartslice';

const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
};

const Card = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  const handleAdd = (product) => {
    dispatch(add(product));
    console.log("Added to cart:", product);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="pb-10 pt-10 w-full max-w-[1450px] mx-auto bg-[#D9D9D9]">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 py-1 rounded-lg shadow-md w-[157px] h-[167px] sm:w-[300px] sm:h-[400px] md:w-[430px] md:h-[490px] mx-auto flex flex-col justify-between"
          >
            <div>
              <img
                width={100}
                height={50}
                src={product.image}
                alt={product.title}
                className="mx-auto mb-2 w-[87.47px] h-[88.31px] sm:w-[190px] sm:h-[200px] md:w-[227.33px] md:h-[269px] object-contain"
              />
              <div>
                <h2 className="text-[7.22px] leading-[11.88px] sm:text-[22px] sm:leading-[36.18px] md:text-[20px] md:leading-[36.18px] font-semibold">
                  {truncateText(product.title, 4)}
                </h2>
                <p className="text-[7.22px] leading-[11.88px] sm:text-[22px] sm:leading-[36.18px] md:text-[22px] md:leading-[36.18px] font-semibold">
                  {truncateText(product.description, 4)}
                </p>
                <p className="text-[7.22px] leading-[11.88px] sm:text-[22px] sm:leading-[36.18px] md:text-[22px] md:leading-[36.18px] font-semibold">
                  {product.price}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-[#145771] text-white text-[7.88px] leading-[12.96px] sm:text-[19px] sm:leading-[30px] md:text-[24px] md:leading-[39.47px] w-[62.42px] h-[17.4px] sm:w-[150px] sm:h-[40px] md:w-[162.23px] md:h-[53px] rounded">
                Buy Now
              </button>
              <button
                onClick={() => handleAdd(product)}
                className="bg-gray-300 border-[2px] text-[#145771] border-[#145771] text-[7.88px] leading-[12.96px] sm:text-[19px] sm:leading-[30px] md:text-[24px] md:leading-[39.47px] w-[62.42px] h-[17.4px] sm:w-[150px] sm:h-[40px] md:w-[162.23px] md:h-[53px] rounded-md font-[700] font-newCycle"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
