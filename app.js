const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const autoRoutes = require("./src/route/route");

// Conectar a la base de datos
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/automoviles");

// Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(express.json());
app.use((req, res, next) => {
  res.header("Content-type", "application/json; charset=utf8");
  next();
});

// Rutas
app.use("/api/autos", autoRoutes);

module.exports = app;
