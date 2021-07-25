
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ItemCount from '../ItemCount/ItemCount';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import {useCartContext} from '../../context/CartContext.js' 

import "./Item.css"


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
         },
    media:{
      width:100,
    }
  });


  
function Item(props) {
    const classes = useStyles()
   
  const {addToCart} = useCartContext();
    const onAdd = qty => {if(qty>0){addToCart(props, qty); alert(`Añadiste ${qty} ${props.name} al carrito` )}};

    return (

    
      
        <div className="card-container">

<Link to={`/item/${props.id}`}>   </Link>   
 <Card className={classes.root}>
 <Link to={`/item/${props.id}`}>
    <CardActionArea>
      <div className="img-card-container">
      <CardMedia
        className={classes.media}
        src={props.img}
        title={props.name}
        component="img"
              />
      </div>

            <CardContent className="card-body">
           
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
         
        <Typography variant="body2" color="textSecondary" component="p">
          {props.desc}
        </Typography>
              
        <h3>$ {props.price}</h3>
      </CardContent>
      
    </CardActionArea>
    </Link>
    
    <CardActions>
      
 {(props.stock > 0) && <ItemCount onAdd ={onAdd} item={props}></ItemCount>}
 {(props.stock <= 0) && <p>No hay stock disponible</p>}

    </CardActions>
  </Card>

            
        </div>
    )


    
}




export default Item
