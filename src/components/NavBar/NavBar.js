import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from "./logo.png"
import CartWidget from "../CartWidget/CartWidget"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom'
import "./NavBar.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
          <div className="overNav-container">
          <Link to="/">
          <img src={logo} width="100px" alt="logo de la empresa"/>
          </Link>
          <CartWidget position="right "></CartWidget>
          </div>
        <Toolbar>
          <div className="menu-boton-container">
            <Link to="/">
        <Button>
            Home
          </Button>
          </Link>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} /* variant="h6" className={classes.title} */>
            Productos
          </Button>
          <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link>Guitarras </Link></MenuItem>
        <MenuItem onClick={handleClose}>Bajos</MenuItem>
        <MenuItem onClick={handleClose}>Pianos</MenuItem>
        <MenuItem onClick={handleClose}>Amplificadores</MenuItem>
         </Menu>
         </div>
       
        </Toolbar>
        
      </AppBar>
    </div>
  );
}