const { User, Product, Order } = require("../../db");

//Ruta localhost:3001/update/orderState
//Recibe un id por params y devuelve una order, actualizada.
/*
Body = {
    userId,
    orderState
}
*/
async function updateOderState(req, res, next) {
  try {
    const {
      userId,
      orderState
    } = req.body;
    const order = await Order.findOne({
      where: {
        userId
      }
    });
    if (order) {
      order.orderState = orderState;
      await order.save();
      return res.json(order);
    }else{
      return res.status(404).json({
        message: "No se encontró la orden"
      });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  updateOderState,
  /*   createOrders,
  deleteOrder,
  updateOrder,
  deleteUserOrders
  */
};
