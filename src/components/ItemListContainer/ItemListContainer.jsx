import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemLists/ItemLists'

const ItemListContainer = (props) => {
   

return (
    <>
  <h1>{props.greeting}</h1>
    <ItemCount></ItemCount>
    <ItemList></ItemList>

    
</>

)
}

export default ItemListContainer