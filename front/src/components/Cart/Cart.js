import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { loadCart } from "../../redux/actions/cartActions";
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  cart: {
    marginLeft: "0px",
  },
  title: {
    color: "gray",
  },
});

export default function Cart() {
  const classes = useStyle();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  return (
    <Container className={classes.cart}>
      {cartItems.length ? (
        <Container>
          <div>
            <h4 className={classes.title}>Mis Productos</h4>
          </div>
          <hr />
          <Container>
            <Container>
              {cartItems.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </Container>
          </Container>
          <hr />
          <CartTotal cartItems={cartItems} />
        </Container>
      ) : (
        <Typography>Vacio</Typography>
      )}
    </Container>
  );
}

/* const cart = [
  {
    image: "image1",
    name: "mancuerna",
    precio: 300,
    cantidad: 1,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in laoreet felis. In fermentum massa pharetra egestas rutrum. Sed varius nibh vitae libero bibendum, a imperdiet diam mattis. Duis volutpat libero non odio viverra, id semper elit convallis. Sed molestie nibh nec nulla elementum sodales. Phasellus maximus sapien a tincidunt elementum. Proin vitae mauris non quam sollicitudin semper sit amet quis mauris. ",
  },
  {
    image: "image2",
    name: "vitaminas",
    precio: 150,
    cantidad: 1,
    descripcion:
      "Proin id ipsum nec lorem aliquam eleifend a et nisi. Donec mattis turpis ut urna lacinia faucibus. Phasellus eleifend lacus nec quam pharetra sagittis. Integer massa quam, tincidunt id nibh vitae, tempor aliquam felis. Aliquam pulvinar nisl erat, ut mollis mauris volutpat vitae. Ut sit amet ipsum pharetra, aliquam magna nec, tincidunt lectus. Duis metus ante, sollicitudin a leo at, eleifend pretium est.",
  },
  {
    image: "image3",
    name: "musculosa",
    precio: 340,
    cantidad: 1,
    descripcion:
      "Fusce non consectetur odio. Quisque augue quam, porta vitae nisi nec, porta congue erat. Aliquam erat volutpat. Vivamus turpis felis, porttitor semper pharetra non, efficitur quis augue. Mauris sit amet egestas quam. Suspendisse eget sollicitudin libero. Maecenas id elementum nibh.",
  },
]; */
