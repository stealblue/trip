const SequelizeAuto = require("sequelize-auto");
const auto = new SequelizeAuto("trip", "trip", "triproot", {
  host: "192.168.10.104",
  port: "3306",
  dialect: "mysql",
});
auto.run((err) => {
  if (err) throw err;
});
