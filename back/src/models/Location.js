const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "location",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lat: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      lng: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
    },

    {
      freezeTableName: true,
    },
    { timestamps: false }
  );
};
