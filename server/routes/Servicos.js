const express = require("express");
const controller = require("../controllers/servicoController");

const router = express.Router();

router.post("/lista/servicos", controller.listaServicos);

module.exports = router;