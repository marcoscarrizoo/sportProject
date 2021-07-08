const { Category, Product, Review, User } = require("../db");
const { products: productsSeed } = require('../../seeds');
//const { Op } = require("sequelize");

//endPoint localhost:3001/product
async function getProducts(req, res, next) {
  console.log('Linea 1')
  try {
    console.log('Linea 2')
    const products1 = await Product.findAll({
      exclude:'product_category',      
      include:{
        model:Category,
      },
    });
    // const products2 = products1.map(({
    //   id,name,description,images,price,stock,categories,
    // })=>{
    //   return {
    //     id,name,description,images,price,stock,
    //     categories:categories.map(category=>category.name, category.image),
    //   }
    // })
    // res.send(products2)
    res.send(products1);
  } catch (error){
    console.error('++++++++++++')
    console.error(error)
    console.error('++++++++++++')
  }
}

//Recibe un array de productos por body
//Devuelve array de productos creados.
//Cada producto tiene: name,description,images(array),price,stock,
//categories(array de objetos, name, image)
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


async function getProductById(req, res, next) {
let {id} = req.params

try {
 if(id) {
   let detail = await Product.findOne({
     where: {id}
   })

  return res.json(detail)
 }
}
catch(error) {
  console.log(error)
}
}
module.exports = {
  getProducts,
  createProducts,
  getProductById,
  /* getProduct,
  searchProducts,
  deleteProduct,
  updateProduct,
  productsByCategory,
  updateStock, */
};
