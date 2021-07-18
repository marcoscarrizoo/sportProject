const { User, Product, Order } = require("../../db");

//Valida si orderState es opcion valida.
//Retorna true o false
const orderStateValidate =(orderState)=>{

  if (orderState == "cart" ||
    orderState == "processing" ||
    orderState == "cancelled" ||
    orderState == "completed") {
    console.log('order valida')
  }
  
}
//Ruta localhost:3001/order/addOrder
async function createOrder(req, res, _next) {
  console.log('Crear order');
  try {
      //   type: DataTypes.ENUM("cart", "processing", "cancelled", "completed"),
//   type: DataTypes.ENUM("initial","created","processing","cancelled","completed")
  const { orderState, shippingState } = req.body;
  if(orderStateValidate(orderState)){
    res.send('El esdado de order');
  }
   
    
    if (!shippingState) {
      res.send('Producto debe ser un array de al menos 1 elemento.');
    }
  //   } else {
  //     const products = req.body;
  //     console.log(products)
  //     products.forEach(
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
    res.send('Product is not create ERROR');
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
