import React from 'react';

const PaymentDetails = () => {
  return (
    <div className="w-full max-w-[1450px] mx-auto px-2 pt-5 shadow-md   pt-1 md:py-25 bg-[#D9D9D9]">
      <div className="bg-white p-6 rounded-lg mb-5">
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">PAYMENT METHOD</h2>
          <hr className="border-t-2 border-gray-300 -mx-6" />
        </div>
        
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <input type="checkbox" id="tap-relax" className="mr-2" />
            <label htmlFor="tap-relax" className="text-sm">Tap & Relax, Pay with Bank Transfer on Delivery</label>
          </div>
          <div className="bg-[#E0E0E0] p-4 rounded-lg text-xs text-[#4F4F4F]">
            <strong>Oops! Unavailable Payment Method.</strong><br />
            This may be because: 1) Selected items shipped from overseas are not eligible for cash on delivery. OR 2) Your order is below the minimum purchase amount of 5,000 naira or above the maximum purchase amount of 750,000 naira. OR 3) Cash on delivery is not available for your delivery address or delivery method. OR 4) You have had multiple failed delivery attempts. OR 5) You have a high cancellation rate.
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">PAY NOW</h2>
          <hr className="border-t-2 border-gray-300 -mx-6" />
        </div>
        
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <input type="checkbox" id="pay-now" className="mr-2" />
            <label htmlFor="pay-now" className="text-sm">Pay with Cards, Bank transfer, or USSD</label>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Installment</h2>
          <hr className="border-t-2 border-gray-300 -mx-6" />
        </div>
        
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <input type="checkbox" id="installment" className="mr-2" />
            <label htmlFor="installment" className="text-sm">Standard Chartered Credit Card @ 3% Interest - Up to 12 months</label>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <img src="path/to/your/image.png" alt="Card Icons" className="h-8" />
          <button className="bg-[#007BFF] text-white px-4 py-2 rounded-lg">CONFIRM PAYMENT METHOD</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
