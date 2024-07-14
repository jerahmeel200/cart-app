"use client"

// pages/products/[id].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Contact from '@/components/Contact';
import Hero2 from '@/components/Hero2';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import ProductDesc from '@/components/ProductDesc';
import ProductDetails from '@/components/ProductDetails';
import Specifications from '@/components/Specifications';
import { useParams } from "next/navigation";


 
  // Fetch all products to get the paths for all product IDs
 

// export async function getStaticProps({ params }) {


//   return { props: { product } };
// }



const Product = () => {
    const [product, setProduct] = useState({})


const router = useRouter();

const params = useParams();


  

  const fetchData =  async ()=>{
    const res = await fetch(`https://timbu-get-single-product.reavdev.workers.dev/${params?.id}?organization_id=73a93f8dfa8c4446ad60a72206a9c5e8&Appid=TBQU4BA070V7C3X&Apikey=b4a146d23aab4474b0f439f0c666625b20240713045829437701`);
    const data = await res.json();
    setProduct(data)
    console.log("unique", product)
  }


  useEffect(()=>{
    fetchData()
    console.log("hellop")

  }, [])

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-5'>
      <Navbar />
      <Hero2 />
      <ProductDesc product={product} />
      <ProductDetails product={product} />
      <Specifications product={product} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Product;



// "https://timbu-get-all-products.reavdev.workers.dev/?organization_id=73a93f8dfa8c4446ad60a72206a9c5e8&Appid=TBQU4BA070V7C3X&Apikey=b4a146d23aab4474b0f439f0c666625b20240713045829437701"


// https://timbu-get-single-product.reavdev.workers.dev/bbfad48bef6a4f8c810200c70cbaa54c?organization_id=73a93f8dfa8c4446ad60a72206a9c5e8&Appid=TBQU4BA070V7C3X&Apikey=b4a146d23aab4474b0f439f0c666625b20240713045829437701