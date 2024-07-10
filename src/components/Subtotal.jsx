import Link from 'next/link'
import React from 'react'

const Subtotal = () => {
  return (
    <div className="w-full max-w-[1450px] mx-auto px-2 py-5 pt-5 pb-5 bg-[#D9D9D9]">
    <div className="bg-white p-6 rounded-lg shadow-md w-[335px] h-[197px] md:w-[500px] md:h-[40px] lg:w-[720px] lg:h-auto">
      <h1 className="text-[13.62px] leading-[16.48px] md:text-[25px] md:leading-[33.86px] lg:text-[32px] lg:leading-[38.86px] font-bold pb-3">
        CART SUMMARY
      </h1>
      <hr className="-mx-6" />
      <div className="flex justify-between items-center pt-5 pb-2">
        <p className="text-[13.62px] leading-[16.48px] md:text-[25px] md:leading-[33.86px] lg:text-[32px] lg:leading-[38.86px] font-semibold">
          Subtotal
        </p>
        <p className="text-[13.62px] leading-[16.48px] md:text-[25px] md:leading-[33.86px] lg:text-[32px] lg:leading-[38.86px] font-semibold">
          ₦2,188,000
        </p>
      </div>
      <hr className="-mx-6" />
      <Link href='/payment'>
     
      <button className="w-full mt-4 px-6 py-3 bg-[#145771] text-white font-bold rounded">
        CHECKOUT (₦2,188,000)
      </button>
      </Link>
    </div>
  </div>
  
  )
}

export default Subtotal