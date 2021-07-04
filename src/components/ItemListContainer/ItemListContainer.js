import React, { useState, useEffect } from "react";
import ItemList from "../ItemLists/ItemLists";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import {useParams} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const ItemListContainer = () => {
  const {categoryName} = useParams()

  const classes = useStyles();
  let [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetch("https://mocki.io/v1/8c647439-27cc-4c34-a0b2-60f6e41ef1a5")
      .then((response) => response.json())
      .then((data) => 
      {if(!categoryName){ return setProductos(data)} 
      else {const catItems = data.filter(item => item.categoria === categoryName); console.log(catItems); setProductos(catItems); setLoading(false)}})
    ;
    }, [categoryName]);

   



  if (loading) {
    return (
      <div className={classes.root}>
        <CircularProgress color="secondary" />
      </div>
    );
  }

  return (
    <>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
