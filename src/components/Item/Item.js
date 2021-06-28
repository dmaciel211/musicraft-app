
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

function Item(props) {
    const classes = useStyles()
    return (
        <div className="card-container">
 <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={props.img}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.desc}
        </Typography>
        <h3>{props.price}</h3>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Agregar producto
      </Button>
      <Button size="small" color="primary">
        Eliminar producto
      </Button>
    </CardActions>
  </Card>

            
        </div>
    )
}

export default Item
