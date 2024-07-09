import Cart from '@/components/Cart'
import Contact from '@/components/Contact'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import Subtotal from '@/components/Subtotal'
import React from 'react'

const CartComp = () => {
  return (
    <div className='p-5'>
        <Navbar/>
        <Cart/>
        <Subtotal/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default CartComp