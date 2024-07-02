const app = require("./app");
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});

module.exports = { app, server };
