const { User, Product, Order } = require("../../db");

async function getAllOrders(req, res, _next) {
  try {
    console.log("getAllOrders");
    const orders = await Order.findAll({
      include: [Product, User]
    });
    
    res.json(orders);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllOrders,
  /*   createOrder,
  deleteOrder,
  updateOrder,
  deleteUserOrders
  */
};