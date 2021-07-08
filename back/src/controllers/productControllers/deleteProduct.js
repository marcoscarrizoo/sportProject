const { Category, Product, Review, User } = require("../../db");
const { products: productsSeed } = require('../../../seeds');
//const { Op } = require("sequelize");

//endPoint localhost:3001/product/delete/:id
async function deleteProduct(req, res, next) {
  try {
    res.send('products2')
  } catch (error) {
    console.error('++++++++++++')
    console.error(error)
    console.error('++++++++++++')
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
