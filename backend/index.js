const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { sequelize } = require("./models/mysql");
dotenv.config();
// const mqtt = require("./mqtt");
const { jwtMiddleware } = require("./middleware/authMiddleware");
const bodyParser = require("body-parser");
// const WebSocket = require("./socket");
// const Mqtt = require("./mqtt");
const connect = require("./models/mongoDB");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(jwtMiddleware);

const { PORT, MONGO_URI } = process.env;

console.log("port", PORT);

// mongoDB 연결
mongoose
  .connect(MONGO_URI) // mongoDB 6버전 이상부터
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error("error : ", e);
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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connect();

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

const server = app.listen(PORT || 4000, () => {
  console.log(`Listening to port ${PORT}`);
});

app.use((req, res, next) => {
  const err = new Error("NOT FOUND");
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render("error");
});

// WebSocket(server, app, sessionMiddleware);
// Mqtt(server, app, sessionMiddleware);
