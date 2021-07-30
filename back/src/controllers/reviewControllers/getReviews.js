const { Review } = require("../../db");

async function getReviews(req, res, next) {
  const { userId, productId } = req.body;
  try {
    if (req.body) {
      // para buscar un review especifico
      if (userId && productId) {
        const review = await Review.findOne({ where: { userId, productId } });
        if (review) {
          return res.json(review);
        }
      }
      //para buscar los revs de un usuario
      if (userId) {
        const reviews = await Review.findAll({ where: { userId } });
        if (reviews) {
          return res.json(reviews);
        }
      }
      //para buscar los revs de un producto
      if (productId) {
        const reviews = await Review.findAll({ where: { productId } });
        if (reviews) {
          return res.json(reviews);
        }
      }
    }
    const reviews = await Review.findAll();
    return res.json(reviews);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getReviews,
};
