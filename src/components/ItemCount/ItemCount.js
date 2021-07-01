import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./ItemCount.css";

function ItemCount(props) {
  let [number, setNumber] = useState(0);

  let [stock, setStock] = useState(props.stock);

  const handleIncrement = () => {
    if (stock > 0 && number < props.stock) {
      setNumber(number + 1);
      setStock(stock - 1);
    } else if (stock === 0) {
      alert("No hay stock disponible");
    }
  };

  const handleDecrement = () => {
    if (number > 0) {
      setNumber(number - 1);
      setStock(stock + 1);
    } else {
      alert("No hay productos para eliminar");
    }
  };

  return (
    <div className="container-itemcount">
      <Button
        className="boton-agregar"
        onClick={handleIncrement}
        variant="contained"
        color="primary"
        href="#contained-buttons"
      >
        +
      </Button>
      <div className="container-cantidades">
        <p id="stockCount">Stock disponible de {stock} unidades</p>
        <p>Usted está solicitando {number} productos.</p>
      </div>
      <Button
        className="boton-desagregar"
        onClick={handleDecrement}
        variant="contained"
        color="primary"
        href="#contained-buttons"
      >
        -
      </Button>
    </div>
  );
}

export default ItemCount;
