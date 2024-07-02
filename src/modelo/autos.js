const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const autoSchema = new Schema({// en esta parte se saco el id, para que mongo controle la generacion de un id unico por default
    imagen: String,
    color: String,
    marca: String,
    modelo: String,
}, { versionKey: false }); // Esto deshabilita el campo __v



module.exports = mongoose.model("auto", autoSchema);
