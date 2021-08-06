import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { NavLink } from 'react-router-dom';

const styles = {
    display: "flex",
    flexDirection: "row",
    textDecoration: "none",
    color: "#ffff"
}

export const mainListItems = (
    <div>
        {/* <NavLink to="/admin" style={styles}>
            <ListItem button>
                <ListItemIcon >
                    <DashboardIcon style={{ color: "#ffff" }} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </NavLink> */}
        <NavLink to="/admin" style={styles}>
            <ListItem button>
                <ListItemIcon>
                    <ShoppingCartIcon style={{ color: "#ffff" }} />
                </ListItemIcon>
                <ListItemText primary="Ordenes" />
            </ListItem>
        </NavLink>
        <NavLink to="/admin/productos" style={styles}>
            <ListItem button>
                <ListItemIcon>
                    <ShoppingBasketIcon style={{ color: "#ffff" }} />
                </ListItemIcon>
                <ListItemText primary="Productos" />
            </ListItem>
        </NavLink>
        <NavLink to="/admin/categorias" style={styles}>
            <ListItem button>
                <ListItemIcon>
                    <LayersIcon style={{ color: "#ffff" }} />
                </ListItemIcon>
                <ListItemText primary="Categorias" />
            </ListItem>
        </NavLink>
        <NavLink to="/admin/usuarios" style={styles}>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon style={{ color: "#ffff" }} />
                </ListItemIcon>
                <ListItemText primary="Usuarios" />
            </ListItem>
        </NavLink>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>
    </div>
);