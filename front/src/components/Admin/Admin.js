import React from "react";
import CreateCategory from "./CreateCategory";
import CreateProduct from "../Admin/CreateProduct/CreateProduct";
import "./admin.css";
import AdmProducts from "./AdmProducts/AdmProducts";
import EditProduct from "./AdmProducts/EditProduct";
import { Route } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import Creators from "./Creators/Creators";

const Admin = () => {
  return (
    <div className="body">
      <Route path='/admin' component={SideBar}/>
      <Route exact path='/admin/crear-producto-categoria' component={Creators}/>
      <Route exact path='/admin' component={ AdmProducts }/>
      <Route path="/admin/product/:id" component={EditProduct} />
    </div>
  );
};

export default Admin;