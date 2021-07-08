import SortBar from "./Sortbar";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '20px',
        display: 'flex'
    },
    sortBar: {
        display: 'flex',
        justifyContent: 'center'
    },
    cards: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    card: {
        marginBottom: '20px',
    }
}));


export default function Catalogo({products}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container xs={3} className={classes.sortBar}>
                <SortBar />
            </Grid>
            <Grid container xs={9} className={classes.cards}>
                {
                    Array.isArray(products)
                        && products.length !== 0
                        ? products.map(product =>
                                <Grid item className={classes.card}>
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
                        }} />
                }
            </Grid>
        </div>
    );
}

