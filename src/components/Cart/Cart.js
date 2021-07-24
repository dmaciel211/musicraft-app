import React, { useState, useEffect } from "react";
import { useCartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom'

const Cart = () => {
  const { cart, removeItem, clearCart} = useCartContext();

  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    setCarrito(cart);
    console.log(carrito);
  }, [cart, carrito]);  

  return (<div className="cart-container">
<h1>Carrito de compras</h1>
    <div className="product-cart-container">
{carrito.length === 0 && <div><h1>No hay productos en el carrito</h1>
<Link to="/"><button>Volver al inicio</button></Link></div>}
  {(carrito.length > 0) && carrito.map(producto => 
  <div classname="product-row" key={producto.id}>

  <p>{producto.name} Cantidad {producto.quantity} Precio unitario $ {producto.price} Subtotal $ {producto.price * producto.quantity}</p> 

  <button onClick={()=>removeItem(producto.id)} className="">X</button>
  
  </div>)}


  </div>

    <div className="total-cart-container">
    {(carrito.length > 0 ) && <div>Total $ {carrito.reduce((acc, el) => acc + (el.price * el.quantity), 0).toFixed(2)} </div>}

    </div>
    

    {(carrito.length > 0) && <div className="cart-botonera">
    <button className="" onClick={()=>clearCart()}>Borrar Carrito</button>
    <button className="">Finalizar Compra</button></div>}
    
    
  </div>
 )
};

export default Cart;
