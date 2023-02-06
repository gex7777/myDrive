require("dotenv").config();
require("./config/database").connect();
const auth = require("./routes/auth");

const express = require("express");
const app = express();

app.use(express.json());
app.use("/auth", auth);
module.exports = app;
