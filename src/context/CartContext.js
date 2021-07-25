import React, {
  createContext,
  useState,
  useContext
} from "react";

export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({
  children
}) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);



  const removeItem = (id) => setCart(cart.filter(item => item.id !== id))




  const isInCart = (id) => cart.some((item) => item.id === id);

  const realStock = item =>{
    const foundItem = cart.find(e=> e.id === item.id);
    return foundItem ? item.stock - foundItem.quantity : item.stock
  
  }


  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartElement) => {
        if (cartElement.id === item.id) {
          return {
            ...cartElement,
            quantity: cartElement.quantity + quantity
          };
        } else return cartElement;
      });
      setCart(newCart);
    } else {
      setCart((prev) => [...prev, {
        ...item,
        quantity
      }]);
    }
  };

  return ( <
    CartContext.Provider value = {
      {
        cart,
        setCart,
        addToCart,
        clearCart,
        removeItem,
        realStock
      }
    } > {
      children
    } </CartContext.Provider>
  );
};