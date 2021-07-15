import React, { useState, useEffect } from "react";
import ItemList from "../ItemLists/ItemLists";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";



const ItemListContainer = () => {
  const { categoryName } = useParams();
  const { db } = useCartContext()

  let [productos, setProductos] = useState(db);

  
 

  useEffect(() => {
    
        if (!categoryName) {
          return setProductos(db);
        } else {
          const catItems = db.filter(
            (item) => item.categoria === categoryName
          );
          setProductos(catItems)}},   
  );

  return (
    <>
      {<ItemList productos={productos} /> }
    </>
  );
};

export default ItemListContainer;
