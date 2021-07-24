import React, { useState, useEffect } from "react";
import ItemList from "../ItemLists/ItemLists";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { itemsCollection } from "../../firebase";



const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [productos, setProductos] = useState([]);



    useEffect(() => {
      (async () => {
        let collection = itemsCollection;
        if (categoryName) collection = itemsCollection.where("categoria", "==", categoryName)
        const response = await collection.get();
        setProductos(response.docs.map(item=>({id: item.id, ...item.data()})) )
    
      }
        ) () 
      
      
    } ,[categoryName]);

  return(
    <>

 
  <ItemList productos={productos} />
 

 
  </>)

};

export default ItemListContainer;
