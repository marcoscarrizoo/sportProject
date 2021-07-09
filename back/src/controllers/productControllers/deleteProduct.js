const { Category, Product, Review, User } = require("../../db");
const { products: productsSeed } = require("../../../seeds");
//const { Op } = require("sequelize");

//endPoint localhost:3001/product/delete/:id
async function deleteProduct(req, res, next) {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    await product.destroy();
    console.log(`deleted ${product.name} ID:${id}`);
    res.send(`deleted ${product.name} ID:${id}`);
  } catch (error) {
    res.send("No se enconctro el producto");
    console.error(error);
  }
}

module.exports = {
  deleteProduct,
  // createProducts,
  // getProductById,
  /* getProduct,
  searchProducts,
  deleteProduct,
  updateProduct,
  productsByCategory,
  updateStock, */
};
