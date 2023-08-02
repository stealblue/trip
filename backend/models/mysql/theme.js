const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('theme', {
    no: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    addr1: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    addr2: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    areacode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    booktour: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    cat1: {
      type: DataTypes.CHAR(3),
      allowNull: false
    },
    cat2: {
      type: DataTypes.CHAR(5),
      allowNull: false
    },
    cat3: {
      type: DataTypes.CHAR(9),
      allowNull: false
    },
    contentid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contenttypeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdtime: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    firstimage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    firstimage2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cpyrhtDivCd: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mapx: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mapy: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mlevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modifiedtime: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sigungucode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tel: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    theme: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cnt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'theme',
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
    ]
  });
};
