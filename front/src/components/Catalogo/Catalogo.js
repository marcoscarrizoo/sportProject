import React, { useEffect,useState } from "react";
import SortBar from "./Sortbar";

import ProductCard from "../ProductCard/ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productsActions";
import { loadCart } from "../../redux/actions/cartActions";
import Footer from "../Footer";
import './catalogo.css'
import loader from './Spinner-1s-800px (1).png'



const useStyles = makeStyles(() => ({
  
  sortBar: {
    width: "20%",
    minWidth: "200px",
    display: "flex",
    justifyContent: "center",
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    
    
  },
  card: {
    margin: "20px",
    minWidth: "250px",
    boxShadow: '0 0 10px'
    
  },
}));

export default function Catalogo() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [width, setWidth] = useState(window.innerWidth)
  const classes = useStyles();
  const [loading, setLoading] = useState(true)

const listenerWidth = () => {
  setWidth(window.innerWidth)
}

  useEffect(() => {
    dispatch(loadCart())

    if (!state.products.products?.length) {
      dispatch(getProducts());
    }
  }, [dispatch, state.products.products?.length]);

  useEffect(() => {
    window.addEventListener('resize', listenerWidth); 
    return () => {
      window.removeEventListener('resize', listenerWidth)
    }
  })

  return (
    <div>
    {width > 900 ? 
    <div className='catalogo-flex'>
      
      <div className='sortBar'>
        <SortBar/>
      </div>
        <div className='catalogo-cards'>
          {Array.isArray(state.products.products) &&
          state.products.products.length !== 0 ? (
            state.products.products.map((product) => (
              <div className='card'> 
                <ProductCard
                  name={product.name}
                  id={product.id}
                  images={product.images[0]}
                  price={product.price}
                  stock={product.stock}
                  categories={product.categories.name}
                />
              </div>
            ))
          ) : 
          
          (
            //esta parte podriamos cambiarla por un componente 404, agregue este ProductCard provisorio por si no llegan los productos
            <div className='loader-catalogo'>
              
               <img src={loader} alt='imagen' />
              
            </div>
          )
          }

        </div>
</div>
        : 
        <div>
        <div className='catalogo-flex'>
          <h1 style={{color:'white', width:'100%', display:'flex', justifyContent:'center', backgroundColor:'gray'}}>Catalogo</h1>
          <div className='catalogo-cards'>
            {Array.isArray(state.products.products) &&
            state.products.products.length !== 0 ? (
              state.products.products.map((product) => (
                <div className='card'> 
                  <ProductCard
                    name={product.name}
                    id={product.id}
                    images={product.images[0]}
                    price={product.price}
                    stock={product.stock}
                    categories={product.categories.name}
                  />
                </div>
              ))
            ) : (
              //esta parte podriamos cambiarla por un componente 404, agregue este ProductCard provisorio por si no llegan los productos
              <div className='card'>
                <ProductCard
                  name="Product NOT FOUND"
                  images="https://previews.123rf.com/images/mike301/mike3011604/mike301160400026/56872882-inusual-error-404-gr%C3%A1fico-de-p%C3%A1gina-no-encontrada.jpg"
                  price="-"
                />
              </div>
            )}
  
          </div>
  </div>
</div>
          }
        
        
      </div>
      
    
  );
}


<div className='sortBar'>
        <SortBar/>
      </div>