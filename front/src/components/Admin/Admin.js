import React from "react";
import CreateCategory from "./CreateCategory";
import CreateProduct from "../CreateProduct/CreateProduct";

const Admin = () => {
  return (
    <div>
        
      <table>
          
        <th>
        <h1>Crear Productos</h1>
          <CreateProduct />
        </th>
        <th>
          <CreateCategory />
        </th>
      </table>
    </div>
  );
};

export default Admin;
