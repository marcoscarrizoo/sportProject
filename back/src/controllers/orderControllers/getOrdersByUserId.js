const { User, Product, Order } = require("../../db");

async function getOrdersByUserId(req, res, _next) {
  try {
    console.log("getOrdersByUserId");
    const { userId } = req.params;
    
    const orders = await Order.findAll({
      include: [Product, User]
    });
    res.json(orders);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getOrdersByUserId,
  /*   createOrder,
  deleteOrder,
  updateOrder,
  deleteUserOrders
  */
};
