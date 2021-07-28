import { useEffect } from "react";
import AddressForm from "./AddressForm";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
//import axios from 'axios'
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({


}))


export default function Checkout({ data }) {
  const classes = useStyles()
  console.log('componente comprar', data)
  useEffect(() => {
    if(data){
      const script = document.createElement("script");
      const attr_data_preference = document.createAttribute("data-preference-id");
      //const attr_nonce = document.createAttribute('nonce')
  
      attr_data_preference.value = data.id;
      //attr_nonce.value = 'abcdefg'
      script.src =
        "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.setAttributeNode(attr_data_preference);
      // script.setAttributeNode(attr_nonce)
      
      document.getElementById("form1").appendChild(script)
      
      return () => {
        //document.getElementById("form1")?.removeChild(script);
      };
    }
  }, [data]);

  return (
    <div>
    <Card >
      COMPRAR
      <form id="form1"></form>
      
    </Card>
    </div>
  );
}
