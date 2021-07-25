import React,{useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {useCartContext} from '../../context/CartContext.js' 


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));




const Form = ( {addOrder}) => {
  const classes = useStyles();
  const {cart} = useCartContext();


  const initialState = {
    pedido:{ 
    id:"",
    producto:"",
    precio:"",
    cantidad:"",
    totalneto:"",
  iva:"",
total:""},
    nombre:"",
    apellido:"",
    email:""
  }
  const [values, setValues] = useState(initialState);

  const handleOnChange = (e) => {
    const {name, value} = e.target;
   
    setValues({...values, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    
    addOrder(values)
    setValues({...initialState})
  }




  return (

    

    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      

      <div>
      <h1>Orden</h1>
{cart.map((item) => <div key={item.id}>
          <TextField
          value={item.name}
          id="input-producto"
          label="Producto"
          name='pedido.producto'
        
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"/>
          <TextField
          value={item.quantity}
          id="input-cantidad"
          label="Cantidad"
          name='pedido.cantidad'
          
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"/>
            <TextField
          value={item.price}
          id="input-precio"
          label="Precio unitario"
          name='pedido.precio'
          onInput={handleOnChange}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"/>
          <TextField
          value={item.price * item.quantity}
          id="input-subtotal"
          label="Subtotal"
          name="pedido.subtotal"
          onInput={handleOnChange}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"/>
          </div>)}

          <TextField disabled className={classes.margin} inputProps={{ 'aria-label': 'naked' }}/>
          <TextField disabled className={classes.margin} inputProps={{ 'aria-label': 'naked' }}/>
          <TextField disabled  className={classes.margin} inputProps={{ 'aria-label': 'naked' }} />
          
          <TextField
          value={cart.reduce((acc, el) => acc + (el.price * el.quantity), 0).toFixed(2)}
          id="input-totalneto"
          label="Total neto"
          name="pedido.totalneto"
        
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"/>

          <TextField disabled className={classes.margin} inputProps={{ 'aria-label': 'naked' }}/>
          <TextField disabled className={classes.margin} inputProps={{ 'aria-label': 'naked' }}/>
          <TextField disabled  className={classes.margin} inputProps={{ 'aria-label': 'naked' }} />
          
          <TextField
          value={cart.reduce((acc, el) => acc + (el.price * el.quantity), 0)*0.21.toFixed(2)}
          id="input-iva"
          label="IVA"
          name="pedido.iva"
        
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"/>

          <TextField disabled className={classes.margin} inputProps={{ 'aria-label': 'naked' }}/>
          <TextField disabled className={classes.margin} inputProps={{ 'aria-label': 'naked' }}/>
          <TextField disabled  className={classes.margin} inputProps={{ 'aria-label': 'naked' }} />
          
          <TextField
          value=
          id="input-total"
          label="Total"
          name="pedido.total"
          onInput={handleOnChange}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"/>





          <h2>Datos de contacto</h2>

      <TextField
          required
          id="outlined-required"
          label="Nombre"
          value= {values.nombre}
          variant="outlined"
          onChange={handleOnChange}
          name="nombre"
        />
          <TextField
          required
          id="outlined-required"
          label="Apellido"
          onChange={handleOnChange}
          variant="outlined"
          name="apellido"
          value= {values.apellido}
        />
          <TextField
          required
          id="outlined-required"
          label="e-mail"
          variant="outlined"
          onChange={handleOnChange}
          name="email"
          value= {values.email}
        />
      
        </div>


        <Button type="submit" variant="contained">Completar Compra</Button>
    </form>
  );
}

export default Form;