import React from "react";
import "./admin.css";
import AdmProducts from "./AdmProducts/AdmProducts";
import EditProduct from "./AdmProducts/EditProduct";
import { Route } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import Creators from "./Creators/Creators";
import AdmUsers from "./AdmUsers/AdmUsers";
import UserDetail from "./UserDetail/UserDetail";
import LocationAdd from "../Locations/LocationAdd";
import LocationManager from "../Locations/LocationManager";
import AdminOrders from "../Admin/AdmOrders/AdmOrders";
import OrderDetail from "./OrderDetail/OrderDetail";

const Admin = () => {
  return (
    <div className="body">
      <Route path="/admin" component={SideBar} />
      <Route
        exact
        path="/admin/crear-producto-categoria"
        component={Creators}
      />
      <Route exact path="/admin" component={AdmProducts} />
      <Route exact path="/admin/usuarios" component={AdmUsers} />
      <Route exact path="/admin/product/:id" component={EditProduct} />
      <Route exact path="/admin/usuario/:id" component={UserDetail} />
      <Route exact path="/admin/orden/:orderid" component={OrderDetail} />
      <Route exact path="/admin/crear-sucursal" component={LocationAdd} />
      <Route exact path="/admin/sucursales" component={LocationManager} />
      <Route exact path="/admin/ordenes" component={AdminOrders} />
    </div>
  );
};

export default Admin;
