const { User, Product, Order } = require("../../db");

//Ruta localhost:3001/order/:userId
//Recibe un userId por params y devuelve ordenes por usurio
//Si no lo consigue devuelve: user id not found;
async function getOrdersByUserId(req, res, _next) {
  try {
    const { userId } = req.params;
    if(!userId)return res.send(`Debe ser un userId valido.`);
    //Verificar si el usuario tiene ordenes
    //Buscar todas las ordenes
    const order = await Order.findOne({where:{userId}});
    if(!order)return res.send(`El usuario con ${userId} no tiene ordenes a su nombre.`);
    const orders = await Order.findAll({
      where:{userId},
      include: [Product,User]
    });
    //Mover a su lugar
    const user = await User.findByPk(userId);
    const ordersDetails = await orders.map(order => {
      return {
        id: order.id,
        orderState: order.orderState,
        shippingState: order.shippingState,
        shippingLocation: order.shippingLocation,
        paymentState: order.paymentState,
        //Verificar si este string esta bien para el front
        orderCreate: order.createdAt.toString(),
        orderUpdate: order.updatedAt.toString(),
        products: order.products.map(product =>{
          return{
            id: product.id,
            name: product.name,
            image: product.images[0],
            price: product.price,
            quantity: product.quantity,
            stock: product.stock,
          }
        }),        
      };
    });
    const response ={
      userData: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      ordersDetails
    }
    return res.json(response); 
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getOrdersByUserId,
  /*   createOrders,
  deleteOrder,
  updateOrder,
  deleteUserOrders
  */
};
