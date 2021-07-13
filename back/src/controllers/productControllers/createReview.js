const { Category, Product, Review, User } = require("../../db");
const { products: productsSeed } = require("../../../seeds");
//const { Op } = require("sequelize");

//endPoint localhost:3001/product
async function createReview(req, res, next) {
  console.log("createProducts");
  try {
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  // createProducts,
  // getProductById,
  // getProducts
  createReview,
  /* getProducts,
  searchProducts,
  deleteProduct,
  updateProduct,
  productsByCategory,
  updateStock, */
};
