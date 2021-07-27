// import React, { useState, useEffect } from "react";
// import useStyles from "./addressFormStyles";
// import { useSelector } from "react-redux";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";

// import LocalShippingIcon from "@material-ui/icons/LocalShipping";
// import Typography from "@material-ui/core/Typography";

// import Container from "@material-ui/core/Container";
// import { useDispatch } from 'react-redux';
// import axios from "axios";

// export default function AddressForm() {
//   const classes = useStyles();
//   const dispatch = useDispatch()
//   const [address, setAddress] = useState('')
//   const [codePost, setCodePost] = useState(0)
//   const [city, setCity] = useState('')
//   const [located, setLocated] = useState('')
//   const [datos, setDatos] = useState('')
  
//   useEffect(() => {
//     axios.get('http://localhost:3001/mercadopago')
//     .then(data => {
//       setDatos(data.data)
//     })
//     .catch(error => console.log(error))
//   }, [])



// const data = {
//   address,
//   codePost,
//   city,
//   located
// }
// const handleSubmit = (e) => {
//   e.preventDefault()
// }
//   return (
//     <div>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LocalShippingIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Direccion De Envio
//           </Typography>
//           <form onSubmit={handleSubmit} className={classes.form} noValidate>
//             <TextField
//               onChange={(e) => {setAddress(e.target.value)}}
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="shippingAddress"
//               type="text"
//               label="Direccion De Envio"
//               name="shippingAddress"
//               autoComplete="shippingAddress"
//               autoFocus
//             />
//             <TextField
//               onChange={(e) => {setCodePost(e.target.value)}}
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="shippingZip"
//               label="Codigo Postal"
//               type="text"
//               id="shippingZip"
//               autoComplete="shippingZip"
//             />
//             <TextField
//               onChange={(e) => {setCity(e.target.value)}}
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="shippingCity"
//               label="Cuidad"
//               type="text"
//               id="shippingCity"
//               autoComplete="shippingCity"
//             />
//             <TextField
//             onChange={(e) => {setLocated(e.target.value)}}
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="shippingLocated"
//               label="Localidad"
//               type="text"
//               id="shippingLocated"
//               autoComplete="shippingLocated"
//             />

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               FINALIZAR COMPRA
//             </Button>
//           </form>
//         </div>
//       </Container>{" "}
//     </div>
//   );
// }


import { useEffect, useState } from 'react'
import Comprar from './Checkout'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import {getOrderByUserId} from '../../redux/actions/userActions'
import { useSelector } from 'react-redux';
import { BsInfo } from 'react-icons/bs';

function Application() {
  const [datos, setDatos] = useState("")
  const [orderId, setOrderId] = useState("")
  const userId = useSelector(store => store.user.uid)

// function mercado() {
//   axios.get(`http://localhost:3001/mercadopago/${orderId}`)
//   .then(data=>{
//     console.log('DATA DE LA FUNCION MERCADO',data.data)
//     setDatos(data.data)      
//   }).catch(err => console.error(err)) 
// }
    

  useEffect(()=>{

    axios.get(`http://localhost:3001/orders/user/${userId}`)
    .then((response)=>{
      const info = response.data.ordersDetails[0].id
      console.log('useEffect 2 orderId',info)
      setOrderId(info)
    })
    axios.get(`http://localhost:3001/mercadopago/${orderId}`)
    .then(data => {
      console.log('DATA DE LA FUNCION MERCADO',data)
      setDatos(data.data)
    })
  
    .catch(err => console.error(err)) 
    

  },[orderId, userId])
console.log('datos ID',datos)
console.log('ORDER ID',orderId)
console.log('userID', userId)
  // let productos= orderDetail.map((elem)=>(
  //   {
  //     title: elem.title,
  //     price:  elem.price,
  //   quantity: elem.quantity
  // }
  // )
  // )
  
  
  return (
    <div className="App">
  
          <Comprar data={datos}/>  
      
    </div>
  );
}

export default Application;

//productos={productos} data={datos}