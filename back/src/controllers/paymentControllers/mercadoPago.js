const { Order, Order_Product, Product } = require("../../db");
const mercadopago = require("mercadopago");

/*
RURTA CONSULTA
mercadoPago/:orderId



***********************************************
***********************************************
Necesito es el user id, por params, query o body
***********************************************
***********************************************

*/
async function mercadoPago(req, res, next) {
    console.log('function mercadoPago')
    const {orderId} = req.params;
    const order = await Order.findOne({
        where: { 
            id: orderId, 
            orderState: 'CART' //Comentada temporalmente para se pueda realizar la consulta
    },
        include: [Product]
    })
    if(!order)res.sendStatus(404).json({message: 'No existe orden en estado "CART"'}) //Comentado temporalmente para se pueda realizar la consulta
    //Cambio estado de la orden
    // order.orderState = "PROCESSING"
    // order.save()
    //Todos los productos de la orden
    const items_ml = order.products.map(product => ({
        title: product.name,
        unit_price: product.price,
        quantity: product.Order_Product.quantity
    }))
    //creando un objeto de preferencia
    let preference = {
        items: items_ml,  //(todos los items)
        external_reference: `${order.id}`,// (nos identifica la orden)
        payment_methods: {
            excluded_payment_types: [
                {
                    id: 'atm' //(excluye este metodo de pago),
                    //(excluye pagos en efectivo)
                }
            ],
            installments: 3 //cantidad maxima de cuotas 
        },
        back_urls: {
            success: 'http://localhost:3001/mercadopago/pagos',
            failure: 'http://localhost:3000',
            pending: 'http://localhost:3001/mercadopago/pagos',
        },
    }

    mercadopago.preferences.create(preference)
        .then(response => {
            // console.log('RESPUESTA RESPONSE', response)
            global.id = response.body.id
            res.json({ id: global.id})
        })
        .catch(error => {
            console.log(error)
        })
}

module.exports = {
    mercadoPago
}