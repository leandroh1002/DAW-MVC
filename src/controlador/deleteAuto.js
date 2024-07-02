const Auto = require("../modelo/autos");

const deleteAutos = async (req, res) => {
    const id_auto = req.params.id;
    try {
      await Auto.findByIdAndDelete(id_auto);
      res.status(200).json("Auto eliminado correctamente");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al procesar la solicitud" });
    }
  };
  
  module.exports = deleteAutos;