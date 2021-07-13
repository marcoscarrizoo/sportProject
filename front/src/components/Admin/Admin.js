import React from "react";
import CreateCategory from "./CreateCategory";
import CreateProduct from "../CreateProduct/CreateProduct";
import "./admin.css";
import AdmProducts from "./AdmProducts";

const Admin = () => {
  return (
    <div className="body">
      <table>
        <th className="forms">
          <h1>Crear Productos</h1>
          <CreateProduct />
        </th>
        <th className="forms">
          <CreateCategory />
        </th>
      </table>
      <AdmProducts/>
    </div>
  );
};

export default Admin;
