"use client";

// pages/products/[id].js
import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Contact from '@/components/Contact';
import Hero2 from '@/components/Hero2';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import ProductDesc from '@/components/ProductDesc';
import ProductDetails from '@/components/ProductDetails';
import Specifications from '@/components/Specifications';

const Product = () => {
    const [product, setProduct] = useState(null); // Initialize product as null
    const router = useRouter();
    const params = useParams();

    const fetchData = async () => {
        try {
            const res = await fetch(`https://timbu-get-single-product.reavdev.workers.dev/${params?.id}?organization_id=73a93f8dfa8c4446ad60a72206a9c5e8&Appid=TBQU4BA070V7C3X&Apikey=b4a146d23aab4474b0f439f0c666625b20240713045829437701`);
            const data = await res.json();
            console.log("Fetched product data:", data); // Log the fetched data to see its structure
            setProduct(data);
        } catch (error) {
            console.error("Failed to fetch product:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!product) {
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
