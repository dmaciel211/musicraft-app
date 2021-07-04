import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const ItemDetailContainer = () => {
  const classes = useStyles();
  const { id } = useParams();

  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mocki.io/v1/8c647439-27cc-4c34-a0b2-60f6e41ef1a5")
      .then((response) => response.json())
      .then(
        (data) => setItem(data.find((item) => item.id === +id)),
        setLoading(false)
      );
  }, [id]);

  if (!item) {
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <ItemDetail
      item={item}
      nombre={item.nombre}
      imagen={item.imagen}
      descripcion={item.descripcion}
      precio={item.precio}
      marca={item.detalles.marca}
      modelo={item.detalles.modelo}
      pais={item.detalles.pais}
      estado={item.detalles.estado}
      tipo={item.detalles.tipo}
    />
  );
};

export default ItemDetailContainer;
