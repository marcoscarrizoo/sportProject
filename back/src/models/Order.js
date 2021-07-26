const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "order",
    { 
      id:{
        primaryKey: true,
        type: DataTypes.STRING,
        //defaultValue: DataTypes.UUIDV4,
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
        shippingAddress: {
          type: DataTypes.STRING,
          defaultValue: "not initialized"
        },
        shippingZip: {
          type: DataTypes.INTEGER,
        },
        shippingLocated: {
          type: DataTypes.STRING,
        },
        shippingCity: {
          type: DataTypes.STRING,
        },
        payment_id: {
          type: DataTypes.UUID,
         // defaultValue: 0,
          },
          payment_status: {
            type: DataTypes.STRING,
            defaultValue: "",
          },
          merchant_order_id:{
            type: DataTypes.BIGINT,
            defaultValue:0
          } 
      },

  );
};
