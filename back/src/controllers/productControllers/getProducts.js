const { Category, Product, Review, User } = require("../../db");
const { products: productsSeed } = require("../../../seeds");
//const { Op } = require("sequelize");

//endPoint localhost:3001/product
async function getProducts(req, res, next) {
  try {
    const products = await Product.findAll({
      include: {
        model: Category,
      },
    });
    res.json(products);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  // createProducts,
  // getProductById,
  getProducts,
  /* getProducts,
  searchProducts,
  deleteProduct,
  updateProduct,
  productsByCategory,
  updateStock, */
};
