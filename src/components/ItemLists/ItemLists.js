import React from 'react'
import Item from '../Item/Item'
import './ItemLists.css'





function ItemLists({productos}) {

 

return(

    <div className="App" >
        <h1>MAPS + PROMISE</h1>
        <div className="productos-container">
      
       {productos.map((producto) => 
       
       <div key={producto.id}> 
             <Item
             img={producto.imagen}
             name={producto.nombre}
             desc={producto.descripcion}
             price={producto.precio}
             number={producto.cantidad}
             stock={producto.stock}
         />
         </div>
         )  } 
        </div>

    </div>


        )

}

export default ItemLists
