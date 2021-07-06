const { Category, Product, Review, User } = require("../db");
const { products:productSeed } = require('../../seeds');
//const { Op } = require("sequelize");

async function getProducts(req, res, next) {
  try {
    return;
  } catch {
    return;
  }
}

//Recibe un array de productos por body
//Devuelve producto creado.
//Cada producto tiene: name,description,image(array),price,stock
async function createProducts(req, res, next) {
  try {  
    const product = { name,description,images,price,stock } = req.body;
    console.log('Prueba verdad',name && description && images && price);//undefined
    // if(name &&)
  //   const [product] = await Pokemon.findOrCreate({
  //     where:{
  //         name
  //     },
  //     defaults: { name, life, strength, defense, speed, height, weight, img },
  // });
    console.log('Products db', product)
    console.log('ruta creacion producto')
    res.send(product)
    return;
  } catch {
    return;
  }
  // name: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  // },
  // description: {
  //   type: DataTypes.TEXT,
  //   allowNull: false,
  // },
  // image: {
  //   type: DataTypes.ARRAY(DataTypes.STRING),
  // },
  // price: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
  // stock: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
}
module.exports = {
  getProducts,
  createProducts,
  /* getProduct,
  searchProducts,
  deleteProduct,
  updateProduct,
  productsByCategory,
  updateStock, */
};
