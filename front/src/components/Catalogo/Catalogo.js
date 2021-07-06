import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

export default function Catalogo(products) {
    return (
        <div className="card-container">
            {
                products?.length !== 0
                ? products.map(product => 
                <Link to={`/${product.id}`} key={product.id}> <ProductCard product={product} /> </Link>)
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
