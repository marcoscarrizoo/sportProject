import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getUserDetail, getUserOrders } from "../../../redux/actions/adminActions"

import "./UserDetail.css"
import UserOrders from "./UserOrders"

export default function UserDetail() {

  const { id } = useParams()
  const dispatch = useDispatch()
  const userDetail = useSelector(store => store.adm.userDetail)

  useEffect( () => {
    dispatch(getUserDetail(id))
    dispatch(getUserOrders(id))

    // return () => {}
  }, [dispatch, id])

  return (
    <div className="admUserDetail">
        {
          userDetail === null
            ? <h1> Cargando </h1>
            : <div className="aud-info">
              <div className="principal-info">
              <h3>{userDetail.email?.toUpperCase()}</h3>
              <h1 >{userDetail.userType}</h1>
              </div>
              <p>{`NOMBRE: ${userDetail.firstName || "-"}`}</p>
              <p>{`ID: ${userDetail.id || "-"}`}</p>
              <p>{`APELLIDO: ${userDetail.lastName || "-"}`}</p>
              <p>{`NUMERO DE ORDENES: ${userDetail.userOrders?.length}`}</p>
            </div>
        }
        <div className="aud-orders">
        {
          userDetail?.userOrders === null
          ? <h1> Cargando </h1>
          : userDetail?.userOrders?.map( order => 
              <UserOrders order={order}/>
          )
        }
        </div>
    </div>
  )
}