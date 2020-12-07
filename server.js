//My .env file with my Mongo Atlas Information
require("dotenv").config();

//My Models
const User = require("./api/models/userModel");

//My packages
const express = require("express");
const { PORT, mongoUri, secret } = require("./utils/config.js");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
// "heroku-postbuild": "cd client && npm install && npm run build"
app.use(morgan("dev")); //Middleware for requesting logging

//My Endpoints
const authRoutes = require("./api/routes/authRoutes");
const rateRoutes = require("./api/routes/rateRoutes");
const { static } = require("express");

//connecting to mongo
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

//handling mongo errors
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected");
});

//Middleware Below
//registering cors
const corsOptions = {
  origin: "http://localhost:8080",
  credentials: true,
  exposedHeaders: ["set-cookie"],
};
app.use(cors(corsOptions)); //So we can do AJAX Requests from our frontend aka Client

//configure body parser
app.use(bodyParser.json()); //Transform the body of requests to JSON
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api", rateRoutes);

app.use(express.static(path.join(dirname, "./dist")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(dirname, "./dist", "index.html"));
});
//Handling Requests
app.listen(PORT, () => {
  console.log(`Handling requests @ ${PORT}`);
});
