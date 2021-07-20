const { User, Product, Order, Order_Product } = require("../../db");

/*Ruta PUT localhost:3001/order/addOrder
-Retorna un orderId
-Si no la encuentra devuelve, 'Order is not create ERROR'
-Recibo un body:

body = {
  userId,
//array de uno o varios productos, con id y cantidad
  products:[
      {
          productId,
          quantity
      },
      {
          productId,
          quantity
      },
  ]
}
*/

async function createOrders(req, res, _next) {
  console.log('Entra en createOrders');
  try {
    const {
      products,
      userId,
      orderState,
      shippingState,
      shippingCost,
      paymentState,
      // quantity,
    } = req.body;
    if (!orderStateValidate(orderState)) res.send('Estado orden debe ser: cart, processing, cancelled o completed');
    //Verificar si tiene un orderState cart
    // const orderExists = await Order.findOne({ userId });
    const orderExists = await Order.findOne({ userId }, { raw: true });
    //Si la order no existe, se crea y se retorna el orderId
    if (!orderExists) {
      const order = await Order.create({ userId });
      const user = await User.findByPk(userId);
      user.addOrder(order);
      products.forEach(async product => {
        const productData = await Product.findByPk(product.productId);
        order.addProduct(productData, {
          through: {
            quantity: product.quantity,
            price: productData.price
          }
        });
      }); 
      res.json(`Order creada ID:${order.id}`);
      //Si la orden existe se fusiona
    } else {
      const order_Products = await Order_Product.findAll({ where: { orderId: orderExists.id } });
      //Por cada product que llega
      // console.log('order_Products.id:', order_Products[0]);
      products.forEach(async product => {
        const productData = await Product.findByPk(product.productId);
        // console.log(`product.productId: ${product.productId}`);
        const productExists = order_Products.find(op => op.productId === product.productId);
        //Si no lo encuentra lo agrega, si lo encuentra lo actualiza
        if (!productExists) {
          orderExists.addProduct(productData, {
            through: {
              quantity: product.quantity,
              price: productData.price
            }
          });
          //Si lo encuentra lo actualiza 
        } else {
          // console.log('product.quantity',productData.price)
          await productExists.update({
            quantity: product.quantity,
            price: productData.price
          });
        }
      });
    }
    res.send(`Actualizo la orden ID: ${orderExists.id}`);
  } catch (err) {
    console.log(err);
    res.send('Order is not created ERROR');
  }
}
     
   
module.exports = {
  createOrders,
};
//Valida si orderState es opcion valida de la DB.
//Retorna true o false
const orderStateValidate = (orderState) => {
  if (orderState === 'cart') return true;
  if (orderState === 'processing') return true;
  if (orderState === 'cancelled') return true;
  if (orderState === 'completed') return true;
  if (orderState === undefined) return true;

  return false;
}
//Valida si shippingState es opcion valida de la DB.
//Retorna true o false
const shippingStateValidate = (shippingState) => {
  if (shippingState === 'not initialized') return true;
  if (shippingState === 'initial') return true;
  if (shippingState === 'created') return true;
  if (shippingState === 'processing') return true;
  if (shippingState === 'cancelled') return true;
  if (shippingState === 'completed') return true;
  if (shippingState === undefined) return true;
  return false;
}