import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getOrderDetail } from "../../../redux/actions/adminActions"

import './OrderDetail.css'

export default function OrderDetail() {
    console.log("entro al componenteeee")
    const {orderid} = useParams()
    const dispatch = useDispatch()
    const order = useSelector(store => store.adm.orderDetail)


    useEffect(() => {
        dispatch(getOrderDetail(orderid))
    }, [dispatch])
    return (
        <div className="OrderDetail">
            <div className="">
                <div>
                    <p>{order?.id}</p>
                    <p>{`Estado de orden: ${order?.orderState}`}</p>
                    <p>{`Estado de orden: ${order?.paymentState}`}</p>
                    <div>
                    <p>{`Estado de orden: ${order?.shippingState}`}</p>
                    <p>{`Estado de orden: ${order?.shippingAddres}`}</p>
                    <p>{`Estado de orden: ${order?.shippingZip}`}</p>
                    <p>{`Estado de orden: ${order?.shippingCity}`}</p>

                    </div>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}