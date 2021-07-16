import React from "react";
import { useSelector } from "react-redux";

const cart = [
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
];

export default function Cart() {
  return <div>{/* {cart?} */}</div>;
}
