const {Order} = require("../../db");
const {TOKEN} = process.env;
const mercadopago = require ("mercadopago");

mercadopago.configure({
    access_token: 'TEST-6526025757594263-072114-48b8fe283514f9ea144ed66ecc48f689-794718240'
})



async function mercadoPago(req, res,next){
    console.log('holi')
    const id_orden= 1

    const carrito = [
        {title: "Producto 1", quantity: 5, price: 10.52},
        {title: "Producto 2", quantity: 15, price: 100.52},
        {title: "Producto 3", quantity: 6, price: 200}
      ]


    const items_ml = carrito.map(i => ({
        title: i.title,
        unit_price: i.price, 
        quantity: i.quantity 
    }))

   console.log(items_ml)

    //creando un objeto de preferencia
    let preference = {
        items: items_ml,  //(todos los items)
        external_reference: `${id_orden}`,// (nos identifica la orden)
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
            sucess: 'http://localhost:3001/mercadopago/pagos',
            failure: 'http://localhost:3001/mercadopago/pagos',
            pending: 'http://localhost:3001/mercadopago/pagos',
        },    
       
}


mercadopago.preferences.create(preference) 
.then(response => {
    console.log('RESPUESTA RESPONSE',response)
    global.id = response.body.id
    console.log('BODY.ID',response.body.id)
    
    res.json({id: global.id})
})
.catch(error => {
    console.log(error)
})
}



async function payment(req, res, next){
    const payment_id=req.query.payment_id;
    const payment_status=req.query.status;
    const external_reference=req.query.external_reference
    const merchant_order_id = req.query.merchant_order_id

    //aca editamos el status de mi orden 
    Order.findByPk(external_reference)
    .then((order) => {
        order.payment_id = payment_id
        order.payment.status = payment_status
        order.merchant_order_id = merchant_order_id
        order.status = 'completed'
        //console.info('salvando order')
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

async function pagosId(req, res){
    const mp = new mercadopago (PROD_ACCESS_TOKEN)
    const id = req.params.id
    console.info("Buscando el id", id)
    mp.get(`/v1/payments/search`, {'status': 'pending'})//{"external_reference":id})
    .then(resultado  => {
      console.info('resultado', resultado)
      res.json({"resultado": resultado})
    })
    .catch(err => {
      console.error('No se consulto:', err)
      res.json({
        error: err
      })
    })
  
  }



module.exports={
mercadoPago,
payment,
pagosId
}