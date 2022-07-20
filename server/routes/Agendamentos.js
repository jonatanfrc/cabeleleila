const express = require("express");
const controller = require("../controllers/agendamentoController");

const router = express.Router();

router.post("/cadastrar/agendamentos", controller.cadastrarAgendamento);

router.post("/alterar/agendamentos", controller.alterarAgendamento);

module.exports = router;