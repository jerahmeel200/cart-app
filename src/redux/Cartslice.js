"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import Swal from "sweetalert2";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

  const addToCart = async (productId) => {
    const organization_id = "73a93f8dfa8c4446ad60a72206a9c5e8";
    const Appid = "TBQU4BA070V7C3X";
    const Apikey = "b4a146d23aab4474b0f439f0c666625b20240713045829437701";
    try {
      const res = await fetch(`https://timbu-get-single-product.reavdev.workers.dev/${productId}?organization_id=${organization_id}&Appid=${Appid}&Apikey=${Apikey}`);

      if (!res.ok) {
        throw new Error('Failed to fetch product data');
      }
      const productToAdd = await res.json();

      if (!productToAdd) {
        console.error(`Product with ID ${productId} not found.`);
        return;
      }

      const existingItemIndex = cartItems.findIndex(item => item.id === productId);

      if (existingItemIndex !== -1) {
        const updatedCart = cartItems.map(item => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        setCartItems(updatedCart);
      } else {
        setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
      }

      Swal.fire({
        title: "Added to cart",
        text: "Item has been successfully added to your cart",
        icon: "success"
      });
    } catch (error) {
      console.error('Error adding item to cart:', error.message);
      Swal.fire({
        title: "Error",
        text: "Failed to add item to cart",
        icon: "error"
      });
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  const updateQuantityInCart = (productId, change) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change;
        return { ...item, quantity: newQuantity >= 1 ? newQuantity : 1 }; // Ensure quantity doesn't go below 1
      }
      return item;
    });

    setCartItems(updatedCart);
  };

  const increaseQuantity = (productId) => {
    updateQuantityInCart(productId, 1);
  };

  const decreaseQuantity = (productId) => {
    updateQuantityInCart(productId, -1);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity > 0) {
      const updatedCart = cartItems.map(item => {
        if (item.id === productId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setCartItems(updatedCart);
    }
  };

  const selectSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const itemTotal = item.current_price * item.quantity;
      console.log(`Item ID: ${item.id}, Price: ${item.current_price}, Quantity: ${item.quantity}, Total: ${itemTotal}`);
      return total + itemTotal;
    }, 0);
  };

  const resetCart = () => {
    setCartItems([]);
    Swal.fire({
      title: "Cart Reset",
      text: "Your cart has been successfully reset",
      icon: "success"
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, updateQuantity, selectSubtotal, resetCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
