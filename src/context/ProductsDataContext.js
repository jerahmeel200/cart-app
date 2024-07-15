"use client"

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ProductsDataContext = createContext();


export const ProductsDataProvider = ({ children }) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const params = {
                organization_id:"73a93f8dfa8c4446ad60a72206a9c5e8",
                
                 
                Appid: "TBQU4BA070V7C3X",
                Apikey:"b4a146d23aab4474b0f439f0c666625b20240713045829437701",
            };
            const apiUrl = 'https://timbu-get-all-products.reavdev.workers.dev/'


            const response = await axios.get(apiUrl, { params });
            return response.data;
        }
    });

    return (
        <ProductsDataContext.Provider value={{ items: data?.items, isLoading, error }}>
            {children}
        </ProductsDataContext.Provider>
    )
}


export const useProductsData = () => {
    return useContext(ProductsDataContext)
}