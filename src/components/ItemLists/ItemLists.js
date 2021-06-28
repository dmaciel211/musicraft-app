import React, {useState, useEffect} from 'react'
import Item from '../Item/Item'





function ItemLists() {

    let[productos, setProductos] = useState([])
    useEffect(() => {
        fetch('productos.json')
        .then(response => response.json())
        .then(data => setProductos(data))},[])

        console.log(productos)



return(

    <div className="App" >
        <h1>MAPS + PROMISE</h1>
       
       {productos.map((producto) => 
       <div key={producto.id}> 
             <Item
             titulo={producto.title}
             descripcion={producto.desc}
             precio={producto.price}
         ></Item>
         </div>
         )  } 
        

    </div>


        )

}

export default ItemLists
