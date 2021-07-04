import React from 'react'
import './ItemDetail.css'

function ItemDetail(item) {
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
          <h3>Marca: {item?.marca}</h3>
          <h3>Modelo: {item?.modelo}</h3>
          <h3>País de origen: {item?.pais}</h3>
          <h3>Estado: {item?.estado}</h3>
          <h3>Tipo: {item?.tipo}</h3>
          
          </div>
       
        </div>
    )
}

export default ItemDetail


