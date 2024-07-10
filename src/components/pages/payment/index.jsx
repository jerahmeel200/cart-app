import Address from '@/components/Address'
import Cart from '@/components/Cart'
import Hero from '@/components/Hero'
import Navbar from '@/components/layout/navbar'
import Navbar2 from '@/components/Navbar2'
import PaymentDetails from '@/components/PaymentDetails'
import React from 'react'

const Payment = () => {
  return (
    <div className='p-5'>
        <Navbar2/>
        <Address/>
        <PaymentDetails/>
        </div>
  )
}

export default Payment