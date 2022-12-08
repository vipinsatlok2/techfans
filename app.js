const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

// use template engine
app.set("view engine", "ejs")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// require routes
const render = require("./src/routes/render");

// routes uses
app.use("/", render);

module.exports = app;
