import React, { useState, useEffect } from "react";
import { useCartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core';
import './Cart.css'

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
  <div className="product-row" key={producto.id}>

  <p>{producto.name} Cantidad {producto.quantity} Precio unitario $ {producto.price} Subtotal $ {producto.price * producto.quantity}</p> <Button variant="contained" onClick={()=>removeItem(producto.id)} className="">X</Button>


  
  </div>)}


  </div>

    <div className="total-cart-container">
    {(carrito.length > 0 ) && <div>Total $ {carrito.reduce((acc, el) => acc + (el.price * el.quantity), 0).toFixed(2)} </div>}

    </div>
    

    {(carrito.length > 0) && <div className="cart-botonera">
      <div>
    <Button variant="contained" className="" onClick={()=>{clearCart()}}>Borrar Carrito</Button>
    </div>
    
    <div>
    <Link to="/order">
    <Button variant="contained" >Finalizar Compra</Button>
    </Link>
    </div>
    </div>}

   

    
  </div>
 )
};

export default Cart;
