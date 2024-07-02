const express = require("express");
const router = express.Router();
const getAutos = require("../controlador/getAuto");
const postAutos = require("../controlador/postAuto");
const putAutos = require("../controlador/putAuto");
const deleteAutos = require("../controlador/deleteAuto");

router.get("/", getAutos);
router.post("/", postAutos);
router.delete("/:_id", deleteAutos);
router.put("/:_id", putAutos);

module.exports = router;