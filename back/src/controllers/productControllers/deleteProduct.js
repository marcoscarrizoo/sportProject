const { Product } = require("../../db");
async function deleteProduct(req, res, next) {
  try {
    const {id} = req.params;
    const product = await Product.findByPk(id);
    await product.destroy();
    console.log(`deleted ${product.name} ID:${id}`)
    res.send(`deleted ${product.name} ID:${id}`)
  } catch (error) {
    res.send('No se enconctro el producto');
    console.error(error)
  }
}

module.exports = {
  deleteProduct,
};