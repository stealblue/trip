const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "board",
    {
      no: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id: {
        type: DataTypes.STRING(35),
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      img: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      like: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      cnt: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: "board",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "no" }],
        },
        {
          name: "id",
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
