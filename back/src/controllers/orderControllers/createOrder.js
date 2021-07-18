const { User, Product, Order } = require("../../db");

//Valida si orderState es opcion valida de la DB.
//Retorna true o false
const orderStateValidate = (orderState) => {
  if (orderState === 'cart') return true;
  if (orderState === 'processing') return true;
  if (orderState === 'cancelled') return true;
  if (orderState === 'completed') return true;
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


//Ruta localhost:3001/order/addOrder
//Recive order state, productId, quantity, userId.
//Retorna un orderId
//Si no la encuentra devuelve, 'Order is not create ERROR'


async function createOrder(req, res, _next) {
  console.log('Entra en createOrder');
  try {
    const {
      orderState,
      shippingState,
      shippingLocation,
      shippingCost,
      paymentState,
      productId,
      quantity,
      userId,//Verificar como viene del front
    } = req.body;
    if (!orderStateValidate(orderState)) res.send('Estado orden debe ser: cart, processing, cancelled o completed');
    const order = await Order.create({ orderState, userId });
    console.log('order', order.id);
    if (!shippingStateValidate(shippingState)) res.send('Estado shipping debe ser: initial, created, processing, cancelled o completed');
    const product = await Product.findByPk(productId);
    console.log('product', product.name);
    const user = await User.findByPk(userId);
    console.log('user', user.name);
    product.addOrder(order, {
      through: {
        price: product.price,
        quantity: quantity
      }
    });
    user.addOrder(order);
    res.json(order.id);
  } catch (error) {
    console.error(error);
    res.send('Order is not create ERROR');
  }
  res.json('orders');
}

// orderState type: DataTypes.ENUM("cart", "processing", "cancelled", "completed"),
// shippingState type: DataTypes.ENUM("initial","created","processing","cancelled","completed")
// shippingLocation: type: DataTypes.STRING
// shippingCost: type: DataTypes.FLOAT
// paymentState: type: DataTypes.STRING

module.exports = {
  createOrder,
};