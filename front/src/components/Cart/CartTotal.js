import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../../redux/actions/cartActions";
import { Container, Typography, Button } from "@material-ui/core";

export default function CartTotal() {
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    console.log("");
  }, [cart]);

  //const cartItemsLocalStorage = localStorage.getItem("cart");
  const dispatch = useDispatch();
  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const handleGoToCheckout = () => dispatch(checkout());

  return (
    <Container>
      <Typography> Total: ${`${total}`}</Typography>
      <Button onClick={handleGoToCheckout}>Comprar</Button>
    </Container>
  );
}
