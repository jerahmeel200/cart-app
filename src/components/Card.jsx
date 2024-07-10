// components/Card.js
import React from 'react';
import Image from 'next/image';
import image2 from '../../public/assets/images/image2.png';
import image3 from '../../public/assets/images/image3.png';
import image4 from '../../public/assets/images/image 1 (4).png';
import image5 from '../../public/assets/images/image 1 (5).png';
import image6 from '../../public/assets/images/image 1 (6).png';
import image7 from '../../public/assets/images/image 1 (7).png';
import image8 from '../../public/assets/images/image 1 (8).png';
import image9 from '../../public/assets/images/image 1 (9).png';
import image10 from '../../public/assets/images/image 1 (10).png';
import image11 from '../../public/assets/images/image 1 (11).png';
import image12 from '../../public/assets/images/image 1 (12).png';
import image13 from '../../public/assets/images/image 1 (13).png';
import image14 from '../../public/assets/images/image 1 (14).png';
import image15 from '../../public/assets/images/image 1 (15).png';
import image16 from '../../public/assets/images/image 1 (16).png';

const articles = [
  {
    image: image3,
    desc: 'iPhone 15 Pro Max',
    price: '₦2,799,000.00',
  },
  {
    image: image4,
    desc: 'MacBook Pro 16-inch | Apple M3 Max | 1TB',
    price: '₦7,099,000.00',
  },
  {
    image: image5,
    desc: 'AirPods Max',
    price: '₦1,099,000.00',
  },
  {
    image: image15,
    desc: 'New Apple iPhone 15 Pro eSIM',
    price: '₦1,300,000.00',
  },
  {
    image: image7,
    desc: 'New Apple iPhone 14 Plus eSIM',
    price: '₦966,000.00',
  },
  {
    image: image8,
    desc: 'New iPhone 14 Pro 128GB eSIM',
    price: '₦1,120,000.00',
  },
  {
    image: image9,
    desc: 'Preowned Apple iPhone XR Unlocked',
    price: '₦225,000.00',
  },
  {
    image: image10,
    desc: 'iPad 10th Gen Case 2022 10.9 Inch',
    price: '₦445,000.00',
  },
  {
    image: image11,
    desc: 'Apple iPad Pro 12.9-inch (6th Gen)',
    price: '₦384,000.00',
  },
  {
    image: image12,
    desc: 'Apple Watch Series 7 | 45mm',
    price: '₦384,000.00',
  },
  {
    image: image13,
    desc: 'Apple Watch Ultra 2 [GPS + Cellular 49mm]',
    price: '₦384,000.00',
  },
  {
    image: image14,
    desc: 'Apple Watch Series 9 GPS 45mm',
    price: '₦384,000.00',
  },
];

const Card = () => {
  return (
<div className="  pb-10 pt-10  w-full max-w-[1450px] mx-auto   bg-[#D9D9D9]     ">
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {articles.map((article, index) => (
      <div 
        key={index} 
        className="bg-white p-4 py-2 rounded-lg shadow-md w-[157px] h-[167px] sm:w-[300px] sm:h-[400px] md:w-[430px] md:h-[490px] mx-auto flex flex-col justify-between"
      >
        <div>
          <Image 
            src={article.image} 
            alt={article.desc} 
            className="mx-auto mb-2 w-[87.47px] h-[88.31px] sm:w-[190px] sm:h-[200px] md:w-[227.33px] md:h-[269px] object-contain" 
          />
          <h2 className="text-[7.22px] leading-[11.88px] sm:text-[22px] sm:leading-[36.18px] md:text-[22px] md:leading-[36.18px] font-semibold ">{article.desc}</h2>
          <p className="text-[7.22px] leading-[11.88px] sm:text-[22px] sm:leading-[36.18px] md:text-[22px] md:leading-[36.18px] font-semibold ">{article.price}</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-[#145771] text-white text-[7.88px] leading-[12.96px] sm:text-[19px] sm:leading-[30px] md:text-[24px] md:leading-[39.47px] w-[62.42px] h-[17.4px] sm:w-[150px] sm:h-[40px] md:w-[162.23px] md:h-[53px] rounded">Buy Now</button>
          <button className="bg-gray-300 border-[2px] text-[#145771]  border-[#145771]   text-[7.88px] leading-[12.96px] sm:text-[19px] sm:leading-[30px] md:text-[24px] md:leading-[39.47px] w-[62.42px] h-[17.4px] sm:w-[150px] sm:h-[40px] md:w-[162.23px] md:h-[53px] rounded-md font-[700]  font-newCycle">Add to Cart</button>
        </div>
      </div>
    ))}
  </div>
</div>



  
  
  
  );
};

export default Card;
