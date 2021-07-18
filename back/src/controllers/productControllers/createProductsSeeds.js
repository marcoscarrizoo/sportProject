const { Category, Product } = require("../../db");
const { products: productsSeed } = require("../../../seeds");
const e = require("express");
//const { Op } = require("sequelize");

// Solo crea productos del seeds
async function createProductsSeeds() {
  try {
    /* const products = productsSeed;
    products.forEach(
      async ({ name, description, images, price, stock, categories }) => {
        const [product] = await Product.findOrCreate({
          where: {
            name,
          },
          defaults: { description, images, price, stock },
        });
        categories.forEach(async ({ name, image }) => {
          const [category] = await Category.findOrCreate({
            where: {
              name,
            },
            defaults: { image },
          });
          product.addCategory(category);
        });
      }
    )
    console.log("DB precargada con products seeds");
  } catch (e) {
    console.log(e)
    console.log('Error en create users seeds');
  }
}

module.exports = {
  createProductsSeeds,
};
