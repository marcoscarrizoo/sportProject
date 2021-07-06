import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

export default function Catalogo(products) {

    products = [
        {id:1, img: "img", name: "prueba1", price: "$50"},
        {id:2, img: "img", name: "prueba2", price: "$60"},
        {id:3, img: "img", name: "prueba3", price: "$70"},
        {id:4, img: "img", name: "prueba4", price: "$80"},
        {id:5, img: "img", name: "prueba5", price: "$90"},
        {id:6, img: "img", name: "prueba6", price: "$100"}]
        console.log(Array.isArray(products), " ", products.length)
    return (
        <div className="card-container">
            {
                Array.isArray(products)
                    && products.length !== 0
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
