import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getOrderDetail } from "../../../redux/actions/adminActions"

export default function OrderDetail() {
    console.log("entro al componenteeee")
    const {orderid} = useParams()
    const dispatch = useDispatch()
    const order = useSelector(store => store.adm.orderDetail)


    useEffect(() => {
        dispatch(getOrderDetail(orderid))
    }, [dispatch])
    return (
        <div>
            <h1>HOLAA</h1>
        </div>
    )
}