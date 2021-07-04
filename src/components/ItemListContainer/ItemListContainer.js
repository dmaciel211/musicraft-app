import React, {useState, useEffect} from "react";
import ItemList from "../ItemLists/ItemLists";

import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));



const ItemListContainer = (props) => {

  const classes = useStyles();
  let[productos, setProductos] = useState([])
  useEffect(() => {
    fetch('https://mocki.io/v1/6a1b81d9-2641-4643-9cfa-2ae99cfbf4e6')
    .then(response => response.json())
    .then(data => setProductos(data))},[])



    if(!productos){
      return(  <div className={classes.root}>
           <CircularProgress color="secondary" />
        </div>)
  }

  return (
    <>
            <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
