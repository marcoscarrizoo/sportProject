import { useEffect, useState } from 'react'
import Checkout from './Checkout'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import {getOrderByUserId} from '../../redux/actions/userActions'
import { BsInfo } from 'react-icons/bs';

function Application() {
  const [datos, setDatos] = useState("")
  const [orderId, setOrderId] = useState("")
  const userId = useSelector(store => store.user.uid)
  const products = useSelector(store => store.cart.total)
  const productos = useSelector(store => store.cart.items)
  

  useEffect(()=>{
    axios.get(`http://localhost:3001/orders/user/${userId}`)
    .then((response)=>{
      const info = response.data.ordersDetails[0].id
      console.log('useEffect 2 orderId',info)
      setOrderId(info)
      if(orderId){
        axios.get(`http://localhost:3001/mercadopago/${orderId}`)
        .then(data => {
          console.log('DATA DE LA FUNCION MERCADO',data)
          setDatos(data.data)
        })
      }
    })
    .catch(err => console.error(err)) 
  },[orderId, userId])
console.log('datos ID',datos)
console.log('ORDER ID',orderId)
console.log('userID', userId)  
console.log('products',products)
  return (
    <div className="App">
  
          <Checkout pro={productos} product={products} data={datos}/>  
      
    </div>
  );
}

 export default Application;

//productos={productos} data={datos}

