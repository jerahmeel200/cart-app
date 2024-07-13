import Image from 'next/image'
import React from 'react'
import yes from "../../../public/assets/images/yes.png"
import Link from 'next/link'

const Confirm = () => {
  return (
    <>
      <div className='flex justify-center items-center flex-col text-center min-h-screen'>
        <div>
          <Image className='w-[200px]' src={yes} alt=''/>
        </div>
        <h1 className='font-interFont mb-3 text-[30px] font-bold'>Order Confirmed!</h1>
        <p className='font-bold text-[30px] font-interFont mb-3'>Thank you for your purchase. Your order has been placed successfully.</p>
        <Link href="/">
        <button className="font-bold bg-[#145771] text-white max-w-[560.99px] max-h-[114.96px] px-10 py-4 rounded-sm font-interFont">Back To Home</button>
        
        </Link>
      </div>
    </>
  )
}

export default Confirm
