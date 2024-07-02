const Auto = require("../modelo/autos");

const getAutos = async (req, res) => {
    try {
      const autos = await Auto.find();
      res.status(200).json(autos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al procesar la solicitud" });
    }
  };
  
  
  module.exports = getAutos;