import { url } from '../../../App'
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { getUsers } from '../../../redux/actions/adminActions';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { BsInfoCircleFill } from 'react-icons/bs'

import './AdmUsers.css'
import axios from 'axios';

export default function AdmUsers() {

    const dispatch = useDispatch();
    const users = useSelector((store) => store.adm.users);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null)
    const [accion, setAccion] = useState(null)

    useEffect(() => {
        if (!users?.length) {
            dispatch(getUsers());
        }
    }, [dispatch, users?.length]);


    const handleClickOpen = (e) => {
        console.log(e.target)
        setId(e.target.value)
        if(e.target.label === "Suspender") {
            setAccion("F")
        }
        if(e.target.label === "Banear") {
            setAccion("D")
        }
        if(e.target.label === "Eliminar") {
            setAccion("eliminar")
        }
        if(e.target.label === "Promover a ADMIN") {
            setAccion("A")
        }
        setOpen(true);
    };

    const handleAction = async () => {
        if (accion === "eliminar") {
            await axios.delete(url + "/user/delete/" + id);
        }
        else {
            await axios.put(url + "/user/update/" + id, { userType: accion });
        }
        dispatch(getUsers());
        handleClose();
    };

    const handleClose = () => {
        setOpen(false);
        setId(null)
        setAccion(null)
    };


    return (
        <div className="admUsers">
            <div className="titulos user-cards">
                <h3 className="email">Usuario</h3>
                <h3 className="type-user">Tipo de usuario</h3>
                <h3 className="info">Info</h3>
                <h3 className="select">Acciones</h3>
            </div>
            {
                users?.map((u, i) =>
                    <div className="user-cards" key={i}>
                        <h4 className="email">{u.email.toUpperCase()}</h4>
                        <h4 className="type-user">{u.userType.toUpperCase()}</h4>
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
                                    <option
                                        value={u.id}
                                        name="F"
                                        onClick={handleClickOpen}>Suspender</option>
                                    <option
                                        value={u.id}
                                        name="D"
                                        onClick={handleClickOpen}>Banear</option>
                                    <option
                                        value={u.id}
                                        name="eliminar"
                                        onClick={handleClickOpen}>Eliminar</option>
                                    {
                                        (u.userType !== "A" && u.userType !== "S") &&
                                        <option
                                            value={u.id}
                                            name="A"
                                            onClick={handleClickOpen}>Promover a ADMIN</option>
                                    }
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                )
            }
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Estas seguro/a?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Por favor, confirme su accion.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose} className="buttons-c cancel-c">
                        Cancelar
                    </button>
                    <button onClick={handleAction} className="buttons-c delete-c" autoFocus>
                        Confirmar
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    )
}