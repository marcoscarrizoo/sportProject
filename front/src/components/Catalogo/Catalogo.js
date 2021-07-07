import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { makeStyles } from '@material-ui/core/styles';

export default function Catalogo(products) {

    //provisorio hasta que traiga del global state
    products = products.products

    const styles = makeStyles(() => ({
        container: {
            width: '80vw',
            minheight: '100vw',
            display: 'flex',
            flexWrap: 'wrap'
        }
    }))

    return (
        <div className={styles.container}>
            {
                Array.isArray(products)
                    && products.length !== 0
                    ? products.map(product =>
                        <Link to={`/${product.id}`} key={product.id}>
                            <ProductCard product={product}/>
                        </Link>)
                    //esta parte podriamos cambiarla por un componente 404, agregue este ProductCard provisorio por si no llegan los productos
                    : <ProductCard product={{
                        img: "https://previews.123rf.com/images/mike301/mike3011604/mike301160400026/56872882-inusual-error-404-gr%C3%A1fico-de-p%C3%A1gina-no-encontrada.jpg",
                        name: "Product NOT FOUND",
                        price: "-"
                    }} />
            }
        </div>
    );
}
