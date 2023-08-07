const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    no: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.STRING(35),
      allowNull: false,
      unique: "id"
    },
    pwd: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nick: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: "nick"
    },
    phone: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: "phone"
    },
    addr1: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    addr2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    zipcode: {
      type: DataTypes.CHAR(5),
      allowNull: false
    },
    gender: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    reg: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    img: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    style: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "basic"
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "no" },
        ]
      },
      {
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "nick",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nick" },
        ]
      },
      {
        name: "phone",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "phone" },
        ]
      },
    ]
  });
};
