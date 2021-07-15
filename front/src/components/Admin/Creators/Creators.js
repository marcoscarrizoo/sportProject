import CreateCategory from "../CreateCategory";
import CreateProduct from "../CreateProduct/CreateProduct";
import './Creators.css'


export default function Creators(){

    return (
        <div className="creators">
            <CreateProduct/>
            <CreateCategory/>
        </div>
    )
}