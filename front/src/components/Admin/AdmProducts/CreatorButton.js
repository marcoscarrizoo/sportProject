import { NavLink } from "react-router-dom";
import './CreatorButton.css'


export default function CreatorButton({text, route}) {

    return (
        <div className="adm-b-c">
            <NavLink to={route} className="adm-create">
                {text}
            </NavLink>
        </div>
    )
}