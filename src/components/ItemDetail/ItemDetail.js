import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import {useCartContext} from '../../context/CartContext.js' 


function ItemDetail({item}) {

const {addToCart, realStock} = useCartContext();

let stock = realStock(item)

const onAdd = qty => {if(qty>0){addToCart(item, qty); 
  alert(`Añadiste ${qty} ${item.nombre} al carrito` )}else 
  {alert('No hay elementos para añadir al carrito')}};




    return (

      

        <div>
         <h1>{item?.nombre}</h1>
        <div className="prod-img-container">
          <img alt="imagen de producto" width="500px" src={item?.imagen}></img>
          </div>
          <h1>$ {item?.precio}</h1>

        <div className="datos-prod-container">
          <h1>{item?.descripcion}</h1>
          <h1> Detalles</h1>
          <h3>Marca: {item?.detalles.marca}</h3>
          <h3>Modelo: {item?.detalles.modelo}</h3>
          <h3>País de origen: {item?.detalles.pais}</h3>
          <h3>Estado: {item?.detalles.estado}</h3>
          <h3>Tipo: {item?.detalles.tipo}</h3>
          
          </div>
          {stock > 0 && <ItemCount  item={item} onAdd={onAdd} />}
          {stock <= 0 && <p>No hay stock disponible</p>}
        </div>
    )
}

export default ItemDetail


