import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const createKey = (product, option) => {
    const optionValues = Object.values(option)
      .map((value) => (Array.isArray(value) ? value.join("-") : value))
      .join("-");
    return `${product.id}-${optionValues}`;
  };

  const addToCart = (product, option) => {
    const key = createKey(product, option);
    const existingItem = cartItems.find((item) => item.key === key);

    if (existingItem) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prev) => [...prev, { key, product, option, quantity: 1 }]);
    }
  };

  const removeFromCart = (key) => {
    setCartItems((prev) => prev.filter((item) => item.key !== key));
  };

  const updateQuantity = (key, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(key);
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.key === key ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
