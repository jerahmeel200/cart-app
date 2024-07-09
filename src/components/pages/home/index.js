import Card from '@/components/Card'
import Hero from '@/components/Hero'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import React from 'react'

const HomeLanding = () => {
  return (
    <div className='p-5'>
        <Navbar/>
        <Hero/>
        <Card/>
        <Footer/>
        </div>
  )
}

export default HomeLanding