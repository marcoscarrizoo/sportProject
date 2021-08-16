import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "./Search";
import { getProducts } from "../../redux/actions/productsActions";
import { doLogOut } from "../../redux/actions/userActions";
/* styles */
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import Swal from "sweetalert2";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MoreIcon from "@material-ui/icons/MoreVert";
import { loadCart } from "../../redux/actions/cartActions";

const useStyles = makeStyles((theme) => ({
  // navBar: {
  //   display: "flex",
  // },
  // textDeco: {
  //   textDecoration: "none",
  //   height: "100px",
  // },
  text: {
    color: "white",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  buttons: {
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(10),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "50%",
    [theme.breakpoints.up("md")]: {
      width: "10ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const user = useSelector((store) => store.user.loggedIn);
  const userName = useSelector((store) => store.user.email);
  // const userType = JSON.parse(localStorage.getItem('userType'))      MARCOS
  const userType = useSelector((store) => store.user.userType);

  const products = useSelector((store) => store.cart);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  console.log("user type", userType);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleAdmin = () => {
    history.push("/admin");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menu = () => {
    history.push("/");
  };

  const handleSignUp = () => {
    history.push("/registrarse");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleLoggin = () => {
    history.push("/iniciarSesion");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleUser = () => {
    history.push("/profile");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleProducts = () => {
    history.push("/productos");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handlePlans = () => {
    history.push("/planes");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleActivities = () => {
    history.push("/actividades");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleSedes = () => {
    history.push("/sedes");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleLogOut = () => {
    dispatch(doLogOut());
    history.push("/");

    Swal.fire({
      text: "Esperamos verte pronto",
      icon: "success",
      width: "20rem",
      timer: "3000",
      showConfirmButton: false,
    });

    setAnchorEl(null);
    handleMobileMenuClose();
  };

  function handleLoadCart() {
    dispatch(loadCart());
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {!user ? (
        <div>
          <MenuItem onClick={handleLoggin}>Inicar Sesion</MenuItem>
          <MenuItem onClick={handleSignUp}>Registrarse</MenuItem>
        </div>
      ) : (
        <div>
          <MenuItem>
            <AccountCircleIcon />
            {userName}
          </MenuItem>
          {userType === "S" || userType === "A" ? (
            <MenuItem onClick={handleAdmin}>Administrar</MenuItem>
          ) : (
            <MenuItem onClick={handleUser}>Perfil</MenuItem>
          )}
          <MenuItem onClick={handleLogOut}>Cerrar Sesion</MenuItem>
        </div>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Badge>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Carrito</p>
      </MenuItem>
      <MenuItem onClick={handleProducts}>
        <IconButton color="inherit">
          <Badge>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>productos</p>
      </MenuItem>

      <MenuItem onClick={handlePlans}>
        <IconButton color="inherit">
          <Badge>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Nuestros Planes</p>
      </MenuItem>

      <MenuItem onClick={handleActivities}>
        <IconButton color="inherit">
          <Badge>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Actividades</p>
      </MenuItem>

      <MenuItem onClick={handleSedes}>
        <IconButton color="inherit">
          <Badge>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Sedes</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.navBar}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={menu}>
            <HomeIcon />
          </IconButton>
          <Typography className={classes.title} variant="h4" noWrap>
            <Link className={classes.link} to="/">
              SportGYM
            </Link>
          </Typography>

          <Search />

          <div className={classes.sectionDesktop}>
          <Link className={classes.textDeco} to="/">
              {" "}
              <Button className={classes.text}>Inicio</Button>{" "}
            </Link>

            <Link className={classes.textDeco} to="/sedes">
              {" "}
              <Button className={classes.text}>Sedes</Button>{" "}
            </Link>
            
            
            <Link>
              <Button
                className={classes.text}
                onClick={() => {
                  dispatch(getProducts());
                  history.push("/productos");
                }}
              >
                Productos
              </Button>
            </Link>
                <div>
            <Link className={classes.text} to="/cart" onClick={handleLoadCart}>
              <IconButton color="inherit">
                <Badge
                  badgeContent={
                    products?.items.length
                      ? products.items.reduce((a, i) => a + i.quantity, 0)
                      : 0
                  }
                  color="secondary"
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
            {user ? (
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle color="secondary" />
                Bienvenido
              </IconButton>
            ) : (
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            )}
          </div>
          </div>

          
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
