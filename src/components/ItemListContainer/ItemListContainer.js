import React, {useState, useEffect} from "react";
import ItemList from "../ItemLists/ItemLists";






const ItemListContainer = (props) => {

  let[productos, setProductos] = useState([])
  useEffect(() => {
    fetch('productos.json')
    .then(response => response.json())
    .then(data => setProductos(data))},[])

  return (
    <>
      <h1>{props.greeting}</h1>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
