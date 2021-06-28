import React, {useState, useEffect} from 'react'
import Item from '../Item/Item'
import './ItemLists.css'





function ItemLists() {

    let[productos, setProductos] = useState([])
    useEffect(() => {
        fetch('productos.json')
        .then(response => response.json())
        .then(data => setProductos(data))},[])

        console.log(productos)

        let pruebas = productos.map(prueba => prueba.descripcion)
        console.log(pruebas)


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
         ></Item>
         </div>
         )  } 
        </div>

    </div>


        )

}

export default ItemLists
