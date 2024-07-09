import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Hero2 from '@/components/Hero2'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import ProductDesc from '@/components/ProductDesc'
import ProductDetails from '@/components/ProductDetails'
import Specifications from '@/components/Specifications'
import React from 'react'

const Product = () => {
  return (
    <div className='p-5'>
    <Navbar/>
    <Hero2/>
    <ProductDesc/>
    <ProductDetails/>
    <Specifications/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Product