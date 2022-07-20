const md5 = require("md5");
const sql = require("../modules/mysql");
const jwt = require("jsonwebtoken");
const funcoes = require("../funcoes");

const listaServicos = async function(req, res){
    try {
        
        let lista_servicos = await sql.execSQL(`SELECT id_servico, descricao, valor FROM servicos`);

        res.json({erro: false, retorno: lista_servicos});

    } catch (error) {
        res.status(500).json({erro: true, msg:"Erro interno do servidor"});
    }
}


module.exports = {
    listaServicos
}