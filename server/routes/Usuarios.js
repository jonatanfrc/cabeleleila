const express = require("express");
const controller = require("../controllers/usuarioController");

const router = express.Router();

router.post("/usuarios/login", controller.login);

router.post("/cadastrar/usuarios", controller.registro);

router.post("/lista/usuarios", controller.listaUsuarios);

module.exports = router;