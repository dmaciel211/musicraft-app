import React from 'react'

function ItemDetail(item) {
    return (
        <div>
          <h1>{item.id}</h1>
          <h1>{item.nombre}</h1>
          <h1>{item.descripcion}</h1>
          <h1> {item.detalles}</h1>
          <img>{item.imagen}</img>
          <h1>{item.precio}</h1>
          
         
       
        </div>
    )
}

export default ItemDetail


