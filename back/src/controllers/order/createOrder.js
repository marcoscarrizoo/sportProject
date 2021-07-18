const { User, Product, Order, order_porduct } = require("../../db");

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
// orderState type: DataTypes.ENUM("cart", "processing", "cancelled", "completed"),
// shippingState type: DataTypes.ENUM("initial","created","processing","cancelled","completed")
// shippingLocation: type: DataTypes.STRING
// shippingCost: type: DataTypes.FLOAT
// paymentState: type: DataTypes.STRING

async function createOrder(req, res, _next) {
  console.log('Entre en createOrder');
  try {
    const {
      orderState,
      shippingState,
      shippingLocation,
      shippingCost,
      paymentState,
      productId,
      price,
      quantity,
      userId,//Verificar como viene del front
    } = req.body;
    console.log('orderStateValidate', orderStateValidate(orderState));
    console.log('shippingState', shippingStateValidate(shippingState));
    if (!orderStateValidate(orderState)) res.send('Estado orden debe ser: cart, processing, cancelled o completed');
    if (!shippingStateValidate(shippingState)) res.send('Estado shipping debe ser: initial, created, processing, cancelled o completed');
    //Si orderState === 'cart' deben venir los productos del carrito.
    if (orderState === 'cart') {
        const order = await Order.create({orderState});
          console.log('order', order);
          // console.log("*isNewRecord",order.isNewRecord)
          // console.log('order.id', order.id);
        //const user = await User.findById(userId);
          // console.log('user', user);
        //const product = await Product.findById(productId);
          // console.log('product', product);
      //Asociarlos
      res.send(order);
    }
    // userID
    // ProductId
    // const order = await Order.findOrCreat({})
    //   } else {
    //     const products = req.body;
    //     console.log(products)
    
    //       async ({ name, description, images, price, stock, categories }) => {
    //         const [product] = await Product.findOrCreate({
    //           where: {
    //             name,
    //           },
    //           defaults: { description, images, price, stock },
    //         });
    //         categories.forEach(async ({ name, image }) => {
    //           const [category] = await Category.findOrCreate({
    //             where: {
    //               name,
    //             },
    //             defaults: { image },
    //           });
    //           product.addCategory(category);
    //         });
    //         console.log(`Producto creado ${product.name}`);
    //       }
    //     );
    //     if (products.length > 1) {
    //       const productsNames = products.map((e) => e.name);
    //       res.json(`los productos ${productsNames} han sido creados exitosamente.`);
    //     }
    //     if (products.length === 1) {
    //       const productName = products.map((e) => e.name);
    //       res.json(`El producto ${productName} ha sido creado exitosamente.`);
    //     }
    //   }
  } catch (error) {
    console.error(error);
    res.send('Order is not create ERROR');
  }
 
      // orderState: {
      //   type: DataTypes.ENUM("cart", "processing", "cancelled", "completed"),
      //   defaultValue: "cart",
      //   allowNull: true,
      // },
      // shippingState: {
      //   type: DataTypes.ENUM(
      //     "initial", //appears as soon as payment is verified
      //     "created",
      //     "processing",
      //     "cancelled",
      //     "completed"
             
  res.json('orders');
}

module.exports = {
  createOrder,
  /*   createOrder,
  deleteOrder,
  updateOrder,
  deleteUserOrders
  */
};