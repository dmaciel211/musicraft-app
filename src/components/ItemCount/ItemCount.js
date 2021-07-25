import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./ItemCount.css";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import {useCartContext} from '../../context/CartContext.js' 

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function ItemCount({ item, onAdd }) {
const {cart} = useCartContext();
 const [number, setNumber] = useState(0);

  const [stock, setStock] = useState(item.stock);

  const handleIncrement = () => {
    if (stock > 0 && number < item.stock) {
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
  const classes = useStyles();

  return (
    <div className="button-container">
      <div className={classes.root}>
        {stock > 0 && (
          <Button
            className="boton-itemcount"
            onClick={handleIncrement}
            variant="contained"
            color="secondary"
          
          >
            +
          </Button>
        )}

        {stock === 0 && <p>Sin stock</p>}

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            readOnly
            label="cantidad"
            variant="outlined"
            value={number}
          />
        </form>
        <Button
          className="boton-itemcount"
          onClick={handleDecrement}
          variant="contained"
          color="secondary"
         
        >
          -
        </Button>
      </div>
      <div className="botones-compra">
        {number > 0 && (
          <Button
            onClick={() => onAdd(number)}
            className="boton-itemcount"
            color="secondary"
            variant="contained"
         
          >
            Agregar al Carrito
          </Button>
        )}

        {cart.lenght > 0 && (
          <Link to="/cart">
            <Button
              className="boton-itemcount"
              color="secondary"
              variant="contained"
            >
              Terminar compra{" "}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ItemCount;
