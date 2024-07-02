const Auto = require("../modelo/autos");

const putAutos = async (req, res) => {
    const id_auto = req.params.id;
    const newData = req.body;
  
    try {
      const updatedAuto = await Auto.findByIdAndUpdate(id_auto, newData, { new: true });
  
      if (!updatedAuto) {
        return res.status(404).json({ error: "Auto no encontrado" });
      }
  
      res.status(200).json(updatedAuto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al procesar la solicitud" });
    }
  };

  module.exports = putAutos;