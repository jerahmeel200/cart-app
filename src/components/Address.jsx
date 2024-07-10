import React from 'react';
import greater from '../../public/assets/images/greater.png'
import Image from 'next/image';

const Address = () => {
  return (
    <div className="w-full max-w-[1450px] mx-auto px-2  py-5  md:py-25 bg-[#D9D9D9]">
      <div className="bg-white p-6 rounded-lg mb-5 shadow-md">
        <div className="flex justify-between items-center  pb-2 mb-2">
          <h2 className="text-lg font-semibold">CUSTOMER ADDRESS</h2>
          <div className='flex justify-between gap-10 items-center '>
          <button className=" font-medium">Change</button>
          <Image className='w-[3.79px] h-[6.39px] md:w-[14.68px] md:h-[17px] lg:w-[14.68px] lg:h-[17px]' src={greater} alt=""/>
          </div>
        </div>
          <hr className="border-t-1 border-gray-300  pb-5" />
        <p className="font-semibold">Dehbie Kennedy</p>
        <p className="text-sm text-gray-600">
          67 Airport Road, by nigerian customs, effurun, Warri, Delta State, Nigeria.
          <br />
          Delta - WARRI-ENERHEN | +234 8097552629
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg mb-5 shadow-md">
      <div className="flex justify-between items-center  pb-2 mb-2">
          <h2 className="text-lg font-semibold">DELIVERY DETAILS</h2>
          <div className='flex justify-between gap-10 items-center '>
          <button className=" font-medium">Change</button>
          <Image className='w-[3.79px] h-[6.39px] md:w-[14.68px] md:h-[17px] lg:w-[14.68px] lg:h-[17px]' src={greater} alt=""/>
          </div>
        </div>
           <hr className="border-t-1 border-gray-300  pb-5"/>
        <p className="font-semibold">Pick-up Station</p>
        <p className="text-sm text-gray-600">
          Delivery between 16 July and 18 July.
        </p>
      </div>
    </div>
  );
};

export default Address;
