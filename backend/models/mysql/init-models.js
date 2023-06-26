var DataTypes = require("sequelize").DataTypes;
var _board = require("./board");
var _like = require("./like");
var _reply = require("./reply");
var _user = require("./user");
var _wishList = require("./wishList");

function initModels(sequelize) {
  var board = _board(sequelize, DataTypes);
  var like = _like(sequelize, DataTypes);
  var reply = _reply(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var wishList = _wishList(sequelize, DataTypes);

  like.belongsTo(board, { as: "bno_board", foreignKey: "bno"});
  board.hasMany(like, { as: "likes", foreignKey: "bno"});
  reply.belongsTo(board, { as: "bno_board", foreignKey: "bno"});
  board.hasMany(reply, { as: "replies", foreignKey: "bno"});
  board.belongsTo(user, { as: "id_user", foreignKey: "id"});
  user.hasMany(board, { as: "boards", foreignKey: "id"});
  like.belongsTo(user, { as: "id_user", foreignKey: "id"});
  user.hasMany(like, { as: "likes", foreignKey: "id"});
  reply.belongsTo(user, { as: "id_user", foreignKey: "id"});
  user.hasMany(reply, { as: "replies", foreignKey: "id"});
  wishList.belongsTo(user, { as: "id_user", foreignKey: "id"});
  user.hasMany(wishList, { as: "wishLists", foreignKey: "id"});

  return {
    board,
    like,
    reply,
    user,
    wishList,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
