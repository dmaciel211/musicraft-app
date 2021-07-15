import React, { createContext, useState, useEffect, useContext } from "react";

//Crear contexto
export const CartContext = createContext({});

//Exportar directamente el contexto
export const useCartContext = () => useContext(CartContext);

//Crear Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [db, setDb] = useState([])



  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
        const newCart = cart.map(el => {if(el.id === item.id){return {...el, quantity: el.quantity + quantity}}else return el})
        setCart([newCart]);
 }else{ 
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };

  useEffect(() => {
    fetch("https://mocki.io/v1/8c647439-27cc-4c34-a0b2-60f6e41ef1a5")
    .then((response) => response.json())
    .then((data) => setDb(data))
      } )

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, db }}>
      {children}
    </CartContext.Provider>
  );
};
