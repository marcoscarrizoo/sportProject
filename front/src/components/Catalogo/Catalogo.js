import React, { useEffect } from "react";
import SortBar from "./Sortbar";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from "../../redux/actions/productsActions";


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        paddingTop: '20px',
        display: 'flex',
        backgroundColor: '#ededed'
    },
    sortBar: {
        width: '20%',
        minWidth: '200px',
        display: 'flex',
        justifyContent: 'center'
    },
    cards: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    card: {
        margin: '10px',
    }
}));


export default function Catalogo() {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const classes = useStyles();

    useEffect(()=> {
        dispatch(getProducts())
    }, [])
    console.log(Array.isArray(state.products))
    console.log(state.products.products)

    return (
        <div className={classes.root}>
            <Grid container className={classes.sortBar}>
                <SortBar />
            </Grid>
            <Grid container className={classes.cards}>
                {
                    Array.isArray(state.products.products)
                        && state.products.products.length !== 0
                        ? state.products.products.map(product =>
                            <Grid item xs={3} className={classes.card}>
                                <Link to={`/producto/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
                                    <ProductCard
                                        name={product.name}
                                        images={product.images[0]}
                                        price={product.price}
                                        categories={product.categories.name}
                                    />
                                </Link>
                            </Grid>)
                        //esta parte podriamos cambiarla por un componente 404, agregue este ProductCard provisorio por si no llegan los productos
                        : <Grid item xs={3} className={classes.card}>
                            <ProductCard 
                                name="Product NOT FOUND"
                                images="https://previews.123rf.com/images/mike301/mike3011604/mike301160400026/56872882-inusual-error-404-gr%C3%A1fico-de-p%C3%A1gina-no-encontrada.jpg"
                                price="-"
                            />
                        </Grid>
                }
            </Grid>
            {/* <Grid container className={classes.cards}>
                {
                    Array.isArray(products)
                        && products.length !== 0
                        ? products.map(product =>
                                <Grid item xs={3} className={classes.card}>
                                    <Link to={`/producto/${product.id}`} key={product.id} style={{textDecoration: 'none'}}>
                                    <ProductCard
                                        name={product.name}
                                        images={product.images[0]}
                                        price={product.price}
                                        categories={product.categories.name} 
                                    />
                                    </Link>
                                </Grid>)    
                        //esta parte podriamos cambiarla por un componente 404, agregue este ProductCard provisorio por si no llegan los productos
                        : <ProductCard product={{
                            img: "https://previews.123rf.com/images/mike301/mike3011604/mike301160400026/56872882-inusual-error-404-gr%C3%A1fico-de-p%C3%A1gina-no-encontrada.jpg",
                            name: "Product NOT FOUND",
                            price: "-"
                        }} 
                    />
                }
            </Grid> */}
        </div>
    );
}

