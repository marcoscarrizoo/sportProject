const { Order, Order_Product, Product } = require("../../db");

const { TOKEN } = process.env;
const mercadopago = require("mercadopago");

mercadopago.configure({
    access_token: 'TEST-6526025757594263-072114-48b8fe283514f9ea144ed66ecc48f689-794718240'

});
//mercadopago/:orderId

async function mercadoPago(req, res, next) {
    console.log('FUNCTION DE MERCADO PAGOO!!!')
    const orderId = req.params.orderId
    const order = await Order.findOne({
        where: { id: orderId, orderState: 'CART' },
        include: [Product]
    })
    //Todos los productos de la orden
    const items_ml = order.products.map(product => ({
        title: product.name,
        unit_price: product.price,
        quantity: product.Order_Product.quantity
    }))
    //creando un objeto de preferencia
    let preference = {
        items: items_ml,  //(todos los items)
        external_reference: `${orderId}`,// (nos identifica la orden)
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
            console.log('GGG global.id', global.id)
            res.json({ id: global.id, init_point: response.body.init_point })
        })
        .catch(error => {
            console.log(error)
        })
}
//mercadopago/pagos
async function payment(req, res, next) {
    console.log('FUNCION PAYMEEEENT')
    console.log('req.params', req.params)
    const payment_id = req.params;
    const payment_status = req.query.status;
    const external_reference = req.query.external_reference
    const merchant_order_id = req.query.merchant_order_id


    //aca editamos el status de mi orden 
    Order.findByPk(external_reference)
        .then(order => {
            console.log(order)
            // order.payment_id = payment_id NO VA A FUNCIONAR
            // order.paymentState: = payment_status
            // order.merchant_order_id = merchant_order_id NO VA A FUNCIONAR
            order.orderState = 'COMPLETED'
            console.log('ORDEN COMPLETADA')
            console.info('ORDEN COMPLETADA')
            order.save()
                .then(() => {
                    console.info('redict sucess')
                    return res.redirect('http://localhost:3000')
                })
                .catch(erro => {
                    return res.redirect(`http://localhost:3000/?error=${error}&where=al+salvar`)
                })
        })
        .catch(error => {
            return res.redirect(`http://localhost:3000/error=${error}&where=al+buscar`)
        })

}
//mercadopago/pagos
async function pagosId(req, res) {
    console.log('pagosId access_token,', PROD_ACCESS_TOKEN)
    // const mp = new mercadopago(access_token)
    const mp = new mercadopago(PROD_ACCESS_TOKEN)
    const id = req.params.id
    console.info("Buscando el id", id)
    mp.get(`/v1/payments/search`, { 'status': 'pending' })//{"external_reference":id})
        .then(resultado => {
            console.info('resultado', resultado)
            res.json({ "resultado": resultado })
        })
        .catch(err => {
            console.error('No se consulto:', err)
            res.json({
                error: err
            })
        })

}
/*
4509 9535 6623 3704
11/25
123
Americna
371180303257522
11/26
1234
*/


module.exports = {
    mercadoPago,
    payment,
    pagosId
}