
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
   
    return (

    
      
        <div className="card-container">

<Link to={`/item/${props.id}`}>   </Link>   
 <Card className={classes.root}>
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
            <Link to={`/item/${props.id}`}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
           </Link>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.desc}
        </Typography>
              
        <h3>$ {props.price}</h3>
      </CardContent>
      
    </CardActionArea>
    <CardActions>
    <ItemCount number={props.number} stock={props.stock} />
    </CardActions>
  </Card>

            
        </div>
    )


    
}


Item.defaultProps = {
  img:"https://img2.freepng.es/20190701/eir/kisspng-bass-guitar-acoustic-guitar-music-double-bass-acoustic-transparent-amp-png-clipart-free-downlo-5d1ab141b61083.7993505215620304017457.jpg",
  title:'Título',
  desc:'Descripción',
  price:'$'
};

export default Item
