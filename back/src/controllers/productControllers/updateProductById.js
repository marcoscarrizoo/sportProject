const { Category, Product, Review, User } = require("../../db");
const { products: productsSeed } = require('../../../seeds');
//const { Op } = require("sequelize");

//endPoint localhost:3001/product/update/:id
async function updateProductById(req, res, next) {
    try {
        const { id } = req.params;
        const { name, description, images, price, stock } = req.body;
        const product = await Product.findByPk(id);
        await product.update({ name, description, images, price, stock });
        res.send(`Producto ${name} actualizado ${id}`);
    } catch (error) {
        res.send(`Producto no actualizado`);
        next(error);
    }
}

module.exports = {
    updateProductById,
    // createProducts,
    //   getProductById,
    /* getProduct,
    searchProducts,
    deleteProduct,
    updateProduct,
    productsByCategory,
    updateStock, */
};
