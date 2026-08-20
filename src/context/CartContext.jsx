import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import confetti from 'canvas-confetti';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [activeTab, setActiveTab] = useState('products'); // 'products' | 'cart'

  // Add product to cart
  const addToCart = (product) => {
    if (cartItems.some(item => item.id === product.id)) {
      toast.info(`"${product.name}" is already in your cart!`);
      return;
    }
    setCartItems(prev => [...prev, product]);
    toast.success(`"${product.name}" added to cart!`, {
      icon: '🛍️'
    });
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    const itemToRemove = cartItems.find(item => item.id === productId);
    setCartItems(prev => prev.filter(item => item.id !== productId));
    if (itemToRemove) {
      toast.warn(`"${itemToRemove.name}" removed from cart.`, {
        icon: '🗑️'
      });
    }
  };

  // Check if product is in cart
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  // Clear cart and checkout
  const checkout = () => {
    if (cartItems.length === 0) return;

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti not available', e);
    }

    setCartItems([]);
    toast.success("Checkout complete — cart cleared! Download links sent.", {
      icon: '🎉',
      autoClose: 3500
    });
  };

  // Calculate total price
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const itemCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        itemCount,
        cartTotal,
        addToCart,
        removeFromCart,
        isInCart,
        checkout,
        activeTab,
        setActiveTab
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
