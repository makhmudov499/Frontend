import React, { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { t } = useTranslation();
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const moveAllToCart = () => {
    if (wishlist.length === 0) return;

    const savedCart = localStorage.getItem("cart");
    let currentCart = savedCart ? JSON.parse(savedCart) : [];

    wishlist.forEach((product) => {
      const isExistInCart = currentCart.find((item) => item.id === product.id);
      if (!isExistInCart) {
        currentCart.push({ ...product, quantity: 1 });
      }
    });

    localStorage.setItem("cart", JSON.stringify(currentCart));
    setWishlist([]);
    
    window.dispatchEvent(new Event("storage"));
    
   
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, moveAllToCart }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);