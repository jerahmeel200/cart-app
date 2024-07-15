"use client"
import Card from '@/components/Card'

import Hero from '@/components/Hero'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
// import { useProductsData } from '@/context/ProductsDataContext'
import React from 'react'

const HomeLanding = () => {
  return (
    <div className='p-2'>
        <Navbar/>
        <Hero/>
        <Card />
        <Footer/>
        </div>
  )
}

export default HomeLanding