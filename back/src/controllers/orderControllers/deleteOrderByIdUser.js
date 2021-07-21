const { User, Product, Order, Order_Product } = require("../../db");
//Vaciar carrito
//Ruta localhost:3001/order/delete/:userId
//Recibe un id por params y devuelve mensaje del ID de la order eliminada.
//Si no la encuentra devuelve que no se encuentra la order con el ID.

async function deleteOrderByIdUser(req, res, next) {
  try {
    //Debe es cambiar el estado
    const { userId } = req.params;
    const order = await Order.findOne({
      where: {
        userId,
        orderState: "CART"
      }
    });
    if (order) {
      await order.destroy();
    return res.send(`Deleted order ${order.id}`)
    } else {
      return res.status(404).send("No order found with that id");
    }
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  deleteOrderByIdUser
};
