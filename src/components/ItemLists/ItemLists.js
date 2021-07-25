import React from 'react'
import Item from '../Item/Item'
import './ItemLists.css'


import {useCartContext} from '../../context/CartContext.js' 






function ItemLists({productos}) {
const {realStock} = useCartContext();



return(

    <div className="App" >
            <div className="productos-container">


      
       {productos.map(producto => 

      
       
       <div key={producto.id}> 
       
             <Item
             img={producto.imagen}
             name={producto.nombre}
             desc={producto.descripcion}
             price={producto.precio}
             stock={realStock(producto)}
             id={producto.id}
               
         />
          
         </div>

         )  } 

        </div>

    </div>


        )
    
}

export default ItemLists
