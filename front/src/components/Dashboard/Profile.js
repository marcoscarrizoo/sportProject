import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { BsInfoCircleFill } from "react-icons/bs";
import { getOrdersByUserId } from "../../redux/actions/userActions";

//import { getUserOrders } from "../../redux/actions/adminActions";


const Profile=(props)=>{
    const orders = useSelector((state) => state.user.orders);
    const user = useSelector((store) => store.user.uid);

  const dispatch = useDispatch();
    
  useEffect(() => {
      if(user){
          console.log("USER EN USEEFFECT", user)
    dispatch(getOrdersByUserId(user));}
  }, [dispatch, user]);

  /*   const mock = [
    {
      id: 1,
      username: "Fran",
      userId: "x15xsxc-15615ssds",
      state: "CART",
    },
  ]; */
  console.log("USER",user)
  console.log("ORDERS",orders)
  return (
    <div className="orders">
      <div className="titulos cards">
        <h3 className="id">ID</h3>
        <h3 className="userId">userId</h3>
        <h3 className="orderState">orderState</h3>
        <h3 className="createdAt">createdAt</h3>
        <h3 className="info">Info</h3>
        <h3 className="select">Acciones</h3>
      </div>
      {orders?.map((order) => (
        <div className="cards">
          <h5 className="id">{order.id}</h5>
          <h3 className="userId">{order.userId}</h3>
          <h5 className="orderState">{order.orderState.toUpperCase()}</h5>
          <h5 className="createdAt">{order.createdAt}</h5>
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

export default Profile;