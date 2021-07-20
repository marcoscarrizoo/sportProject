const { User, Product, Order } = require("../../db");

//Ruta localhost:3001/order/delete/:id
//Recibe un id por params y devuelve mensaje del ID de la order eliminada.
//Si no la encuentra devuelve que no se encuentra la order con el ID.
async function deleteOrderById(req, res, next) {
  try {
    //Debe es cambiar el estado
    const { id } = req.params;
    const order = await Order.findByPk(id);
    await order.destroy();
    res.send(`Deleted order ${order.id}`)
  } catch (error) {
    res.send(`No se encuentra order: ${order.id}`);
    console.error(error)
  }
}

module.exports = {
  deleteOrderById,
  /*   createOrders,
  deleteOrder,
  updateOrder,
  deleteUserOrders
  */
};
