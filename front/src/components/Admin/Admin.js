import React from "react";
import CreateCategory from "./CreateCategory";
import CreateProduct from "../CreateProduct/CreateProduct";
import "./admin.css";
import AdmProducts from "./AdmProducts/AdmProducts";
import EditProduct from "./AdmProducts/EditProduct";
import { Route } from "react-router-dom";
import SideBar from "./SideBar/SideBar";

const Admin = () => {
  return (
    <div className="body">
      <Route path='/admin' component={SideBar}/>
      <Route exact path='/admin/crear-producto-categoria' render={ () => 
      <table className="table-forms">
        <th className="forms">
          <h1>Crear Productos</h1>
          <CreateProduct />
        </th>
        <th className="forms">
          <CreateCategory />
        </th>
      </table>
      }/>
      <Route exact path='/admin' component={ AdmProducts }/>
      <Route path="/admin/product/:id" component={EditProduct} />
    </div>
  );
};

export default Admin;

// const Admin = () => {
//   return (
//     <div className="body">
//       <SideBar/>
//       <table className="table-forms">
//         <th className="forms">
//           <h1>Crear Productos</h1>
//           <CreateProduct />
//         </th>
//         <th className="forms">
//           <CreateCategory />
//         </th>
//       </table>
//       {/* <AdmProducts/> */}
//     </div>
//   );
// };
