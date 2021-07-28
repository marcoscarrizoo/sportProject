import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getOrderDetail } from "../../../redux/actions/adminActions"

import './OrderDetail.css'

export default function OrderDetail() {
    console.log("entro al componenteeee")
    const { orderid } = useParams()
    const dispatch = useDispatch()
    const order = useSelector(store => store.adm.orderDetail)


    useEffect(() => {
        dispatch(getOrderDetail(orderid))
    }, [dispatch])
    return (
        <div className="OrderDetail">
            <div className="od-info">
                <div className="od-info-c">
                    <h4>Datos de orden</h4>
                    <p>{order?.id}</p>
                    <p>{`Estado de orden: ${order?.orderState}`}</p>
                    <p>{`Estado de pago: ${order?.paymentState}`}</p>
                </div>
                <div className="od-info-c">
                    <h4>Datos de envio</h4>
                    <p>{`Estado de envio: ${order?.shippingState}`}</p>
                    <p>{`Direccion de envio: ${order?.shippingAddres}`}</p>
                    <p>{`Codigo postal: ${order?.shippingZip}`}</p>
                    <p>{`Ciudad: ${order?.shippingCity}`}</p>
                </div>
                <div className="od-info-c">
                    <h4>Datos del comprador</h4>
                    <p>{`ID: ${order?.user.id}`}</p>
                    <p>{`Ciudad: ${order?.user.firstName}`}</p>
                    <p>{`Ciudad: ${order?.user.lastName}`}</p>
                    <p>{`Ciudad: ${order?.user.email}`}</p>
                </div>
            </div>
            <div className="od-products">

            </div>
        </div>
    )
}