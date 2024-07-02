const Auto = require("../modelo/autos");

const postAutos = async (req, res) => {
    const datos_auto = { ...req.body };
    const auto1 = new Auto(datos_auto);
    try {
      await auto1.save();
      res.status(201).json(auto1);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al procesar la solicitud" });
    }
  };
  
  module.exports = postAutos;