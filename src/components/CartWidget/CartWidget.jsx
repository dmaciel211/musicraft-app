import React from "react";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCartContext } from "../../context/CartContext.js";

function CartWidget() {
  const { cart } = useCartContext();

  return (
    <>
      <Link to="/cart/">
        <ShoppingCartIcon />
      </Link>
      <p>{cart.reduce((acc, el) => acc + el.quantity, 0)}</p>
    </>
  );
}

export default CartWidget;
