import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { BsInfoCircleFill } from "react-icons/bs";
import Popover from "@material-ui/core/Popover";

import { getOrders } from "../../../redux/actions/adminActions";

import "./AdmOrders.css";

export default function AdmOrders() {
  const orders = useSelector((state) => state.adm.orders);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState("id");

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);


  const handlePopoverOpen = (event) => {
    console.log("hola")
    setAnchorEl("openId");
  };
  
  const handlePopoverClose = () => {
    console.log("chau")
    setAnchorEl("id");
  };

  /*   const mock = [
    {
      id: 1,
      username: "Fran",
      userId: "x15xsxc-15615ssds",
      state: "CART",
    },
  ]; */

  return (
    <div className="orders">
      <div className="titulos cards">
        <h3 className="id">ID</h3>
        <h3 className="total">TOTAL</h3>
        <h3 className="orderState">ESTADO</h3>
        <h3 className="createdAt">ULTIMA ACTUALIZACION</h3>
        <h3 className="info">Info</h3>
        <h3 className="select">Acciones</h3>
      </div>
      {orders?.map((order) => (
        <div className="cards">
          <h5 className={`${anchorEl}`}

            // style={{width:`${}`}}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >{order.id}</h5>
          <h3 className="total">{`$${order.products.reduce((s, i) =>
            s + (i.Order_Product.quantity * i.Order_Product.price), 0).toFixed(2)}`}</h3>
          <h5 className="orderState">{order.orderState.toUpperCase()}</h5>
          <h5 className="createdAt">{order.updatedAt}</h5>
          <div className="info">
            <Link to={`/admin/orden/${order.id}`} className="Link">
              <BsInfoCircleFill />
            </Link>
          </div>
          <div className="select">
            <FormControl variant="outlined" className="formControl">
              <InputLabel htmlFor="outlined-age-native-simple">
                Opciones
              </InputLabel>
              <Select
                native
                value=""
                // onChange={handleChange}
                inputProps={{
                  name: "Opciones",
                  id: "outlined-age-native-simple",
                }}
              >
                <option value={order.id}>Cancelar</option>
                <option value={order.id}>Eliminar</option>
                <option value={order.id}>Editar</option>
              </Select>
            </FormControl>
          </div>
        </div>
      ))}
    </div>
  );
}
