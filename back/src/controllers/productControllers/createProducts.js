const { Category, Product, Review, User } = require("../../db");
const { products: productsSeed } = require('../../../seeds');
//const { Op } = require("sequelize");

//endPoint localhost:3001/product
async function createProducts(req, res, next) {
  try {
    //Comprueba si req.body es array con por lo menos un indice
    if (req.body.length > 0) {
      const products = productsSeed.concat(req.body);
      products.forEach(async ({ name, description, images, price, stock, categories }) => {
        const [product] = await Product.findOrCreate({
          where: {
            name
          },
          defaults: { description, images, price, stock, }
        });

        categories.forEach(async ({ name, image }) => {
          const [category] = await Category.findOrCreate({
            where: {
              name
            },
            defaults:{image}
          });
          product.addCategories(category);
        })
      });
      //Devuelve productos creados
      res.send(products)
    }
    else {
      res.send('Product is not create');
    }
  } catch (error) {
    console.error(error);
  }

}


module.exports = {
  // deleteProduct,
  createProducts
  // getProductById,
  /* getProduct,
  searchProducts,
  deleteProduct,
  updateProduct,
  productsByCategory,
  updateStock, */
};
