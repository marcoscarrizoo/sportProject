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
import { useSelector } from "react-redux";

const Admin = () => {    
      let admin= useSelector((store) => store.user.userType);

return (<div>
    { 
      (admin === "S"||admin==="A") && (
        <div className="body">
      <Route path="/admin" component={SideBar} />
      <Route
        exact
        path="/admin/crear-producto-categoria"
        component={Creators}
      />
      <Route exact path="/admin" component={AdmProducts} />
      <Route path="/admin/usuarios" component={AdmUsers} />
      <Route path="/admin/product/:id" component={EditProduct} />
      <Route path="/admin/usuario/:id" component={UserDetail} />
      <Route path="/admin/crear-sucursal" component={LocationAdd} />
      <Route path="/admin/sucursales" component={LocationManager} />
      <Route path="/admin/ordenes" component={AdminOrders} />
    </div>
    )
    }
   </div>
  )
};

export default Admin;
