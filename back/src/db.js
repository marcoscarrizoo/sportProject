require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
// console.log('process.env',process.env)
//Evalua si esta en produccion o desarrollo.
const sequelize =
  process.env.NODE_ENV === "production"
  //Si esta en produccion, toma este sequelize para heroku
    ? new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      protocol: 'postgres',
      dialectOptions: {
        ssl: {
          // require: true,
          rejectUnauthorized: false
      }
      }
    })
    // new Sequelize({
    //     database: DB_NAME,
    //     dialect: "postgres",
    //     host: DB_HOST,
    //     port: 5432,
    //     username: DB_USER,
    //     password: DB_PASSWORD,
    //     pool: {
    //       max: 3,
    //       min: 1,
    //       idle: 10000,
    //     },
    //     dialectOptions: {
    //       ssl: {
    //         require: true,
    //         // Ref.: https://github.com/brianc/node-postgres/issues/2009
    //         rejectUnauthorized: false,
    //       },
    //       keepAlive: true,
    //     },
    //     ssl: true,
    //   })
//Si esta en desarrollo, toma este sequelize local.
    : new Sequelize(
      `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
      {
        logging: false,
        native: false,
      }
    );
    console.log('pros', process.env.DATABASE_URL);
const basename = path.basename(__filename);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Product, Category, Order, User, Plan } = sequelize.models;
Product.belongsToMany(Category, { through: "product_category" });
Category.belongsToMany(Product, { through: "product_category" });

Order.belongsTo(User);
User.hasMany(Order);

Plan.belongsTo(Category);
Category.hasMany(Plan);

Order.belongsToMany(Product, { through: "order_lines" });
Product.belongsToMany(Order, { through: "order_lines" });

//User.hasMany(Order);
//Order.belongsTo(User);

//Product.hasMany(Review);
//Review.belongsTo(Product);

//User.hasMany(Review);
//Review.belongsTo(User);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
