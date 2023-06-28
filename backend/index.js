const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { sequelize } = require("./models/mysql");
dotenv.config();
const webSocket = require("./socket");

const app = express();
const { PORT, MONGO_URI } = process.env;
console.log("port", PORT);
// mongoDB 연결
mongoose
  .connect(MONGO_URI) // mongoDB 6버전 이상부터
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error(e);
  });

// MySQL 연결
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Connected to MySQL");
  })
  .catch((e) => {
    console.error(e);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const sessionMiddleware = session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
});

app.use("/", router);
app.get("/", (req, res) => {
  console.log("reerere");
  res.send("연결성공");
});

const server = app.listen(PORT || 4000, () => {
  console.log(`Listening to port ${PORT}`);
});

webSocket(server, app, sessionMiddleware);
// webSocket();
