const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reply', {
    no: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'board',
        key: 'no'
      }
    },
    uno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'no'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ref: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    re_step: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    re_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    createAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updateAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reply',
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
        name: "bno",
        using: "BTREE",
        fields: [
          { name: "bno" },
        ]
      },
      {
        name: "reply_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "uno" },
        ]
      },
    ]
  });
};
