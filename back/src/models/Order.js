const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "order",
    {
      id:{
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      orderState: {
        type: DataTypes.ENUM("CART", "PENDING","PROCESSING", "CANCELED", "COMPLETED"),
        defaultValue: "CART",
        allowNull: false,
      },
      shippingState: {
        type: DataTypes.ENUM(
          "not initialized",
          "initial", //appears as soon as payment is verified
          "created",
          "processing",
          "canceled",
          "completed"
        ),
        defaultValue: "not initialized"
      },
      shippingLocation: {
        type: DataTypes.STRING,
        defaultValue: "not initialized"
      },
      paymentState: {
        type: DataTypes.ENUM(
          "not initialized",
          "initial",
          "processing",
          "cancelled",
          "completed"
          ),
          defaultValue: "not initialized"
        },
      },
  );
};
