import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../../redux/actions/cartActions";
import { Container, Typography, Button } from "@material-ui/core";

export default function CartTotal() {
  var cart = JSON.parse(localStorage.getItem("cart"));
  console.log("total ", cart);
  const dispatch = useDispatch();

  const [total, settotal] = useState("");

  useEffect(() => {
    cart = JSON.parse(localStorage.getItem("cart"));
    let num = 0;
    if (cart && cart.length) {
      for (var i of cart) {
        num += parseFloat(i.price) * parseFloat(i.quantity);
      }
    }
    console.log(num);
    settotal(num);
  }, [dispatch]);

  //const cartItemsLocalStorage = localStorage.getItem("cart");

  const handleGoToCheckout = () => dispatch(checkout());

  return (
    <Container>
      <Typography> Total: $ {total}</Typography>
      <Button onClick={handleGoToCheckout}>Comprar</Button>
    </Container>
  );
}
