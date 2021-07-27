import { useEffect, useState } from 'react'
import Checkout from './Checkout'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import {getOrderByUserId} from '../../redux/actions/userActions'
import { useSelector } from 'react-redux';
import { BsInfo } from 'react-icons/bs';

function Application() {
  const [datos, setDatos] = useState("")
  const [orderId, setOrderId] = useState("")
  const userId = useSelector(store => store.user.uid)

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
  
  return (
    <div className="App">
  
          <Checkout data={datos}/>  
      
    </div>
  );
}

 export default Application;

//productos={productos} data={datos}

