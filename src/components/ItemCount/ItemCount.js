import React, {useState} from 'react';
import Button from '@material-ui/core/Button';




 
function ItemCount() {

    const [number, setNumber] = useState(0) 
    const [stock, setStock] = useState(5)



    const handleIncrement = () => {
    if(stock > 0 && stock <= 5 ){
        setNumber(number +1)
        setStock(stock - 1);
       
    } else if(stock === 0){
        alert("No hay stock disponible")

    }
 

      };

      const handleDecrement = () => {
        if(stock >= 0 && stock < 5){

    setNumber(number - 1)
     setStock(stock + 1)
      
    }

      };

    return (
        <div>
        

        <Button onClick={handleIncrement} variant="contained" color="primary" href="#contained-buttons">
        +
        </Button>
        <p>Producto</p>
        <p id="stockCount">Stock disponible de {stock} unidades</p>
        <p >Usted está solicitando {number} productos.</p>
        <Button onClick={handleDecrement} variant="contained" color="primary" href="#contained-buttons">
        -
        </Button>
        </div>
    )
}

export default ItemCount
