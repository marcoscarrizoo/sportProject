import { Link } from 'react-router-dom';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { BsInfoCircleFill } from 'react-icons/bs'

import './AdmUsers.css'

export default function AdmUsers() {

    const users = [
        {
            id: 1,
            name: "Sapo pepe",
            isAdmin: "user",
            compras: 5
        },
        {
            id: 2,
            name: "Pepa Pig",
            isAdmin: "admin",
            compras: 0,
        },
        {
            id: 3,
            name: "Lionel Messi",
            isAdmin: "Super Admin",
            compras: 1,
        },
        {
            id: 4,
            name: "Mr Musculo",
            isAdmin: "user",
            compras: 15,
        },
    ]

    return (
        <div className="admUsers">
            <div className="titulos user-cards">
                <h3 className="id">ID</h3>
                <h3 className="name">Usuario</h3>
                <h3 className="type-user">Tipo de usuario</h3>
                <h3 className="purchases">Compras</h3>
                <h3 className="info">Info</h3>
                <h3 className="select">Acciones</h3>
            </div>
            {
                users.map(u =>
                    <div className="user-cards">
                        <h5 className="id">{u.id}</h5>
                        <h3 className="name">{u.name.toUpperCase()}</h3>
                        <h5 className="type-user">{u.isAdmin.toUpperCase()}</h5>
                        <h5 className="purchases">{u.compras}</h5>
                        <div className="info">
                        <Link to={`/admin/usuario/${u.id}`} className="Link">
                            <BsInfoCircleFill />
                        </Link>
                        </div>
                        <div className="select">
                            <FormControl variant="outlined" className="formControl">
                                <InputLabel htmlFor="outlined-age-native-simple">Opciones</InputLabel>
                                <Select
                                    native
                                    value=""
                                    // onChange={handleChange}
                                    inputProps={{
                                        name: 'Opciones',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option value={u.id}>Suspender</option>
                                    <option value={u.id}>Eliminar</option>
                                    <option value={u.id}>Cambiar tipo</option>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                )
            }
        </div>
    )
}