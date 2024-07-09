import React from 'react';

const Address = () => {
  return (
    <div className="container mx-auto pt-1 py-5 md:py-25 bg-[#D9D9D9]">
      <div className="bg-white p-6 rounded-lg mb-5 shadow-md">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-lg font-semibold">CUSTOMER ADDRESS</h2>
          <button className="text-blue-600 font-medium">Change</button>
        </div>
        <p className="font-semibold">Dehbie Kennedy</p>
        <p className="text-sm text-gray-600">
          67 Airport Road, by nigerian customs, effurun, Warri, Delta State, Nigeria.
          <br />
          Delta - WARRI-ENERHEN | +234 8097552629
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg mb-5 shadow-md">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-lg font-semibold">DELIVERY DETAILS</h2>
          <button className="text-blue-600 font-medium">Change</button>
        </div>
        <p className="font-semibold">Pick-up Station</p>
        <p className="text-sm text-gray-600">
          Delivery between 16 July and 18 July.
        </p>
      </div>
    </div>
  );
};

export default Address;
