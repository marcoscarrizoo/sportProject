const { User, Product, Order, Order_Product } = require("../../db");


/*
Ruta localhost:3001/order/delete/product
Elimina un producto de una orden
Recibe body = {
  userId,
  productId
}
*/
async function deleteProductById(req, res, next) {
  console.log("deleteProductById");
  try {
    //Debe es cambiar el estado
    const { userId, productId } = req.body;
    const order = await Order.findOne({
      where: {
        userId
      }
    });
    console.log('order.id',order.id);
    const orderProduct = await Order_Product.findOne({
      where: {
        orderId: order.id,
        productId
      }
    });
    console.log('orderProduct', orderProduct);
    if (orderProduct) {
      await orderProduct.destroy();
      return res.json({
        message: `Producto eliminado ID: ${productId}`
      });
    } else { 
      return res.json({
        message: "No existe el producto"
      });
    }    
  } catch (error) {
    next(error);
  }
}

module.exports = {
  deleteProductById
};
