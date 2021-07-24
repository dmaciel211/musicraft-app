import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useCartContext } from "../../context/CartContext";
import { itemsCollection } from '../../firebase';

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
 


  useEffect(() => {
  (async () => {
      const response = await itemsCollection.doc(id).get();
      setItem({id: response.id, ...response.data()})
    }
      ) () 
    

   
               
  }, [item, id]);

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
    />
  );
};

export default ItemDetailContainer;
