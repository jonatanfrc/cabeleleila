const md5 = require("md5");
const sql = require("../modules/mysql");
const jwt = require("jsonwebtoken");
const funcoes = require("../funcoes");


const cadastrarAgendamento = async function(req, res){

    let dados = req.body;

    try {

        let retorno = await sql.insert("agendamentos", dados, true);

        res.json({erro: false, retorno: retorno});

    } catch (error) {
        res.status(500).json({erro: true, msg:"Erro interno do servidor"});
    }

}

const alterarAgendamento = async function(req, res){

    let dados = req.body;

    try {

        let txt_sql = `UPDATE agendamentos SET (${enderecos_principais.toString()}) WHERE id = (${dados.id})`;
        
        return txt_sql;

    } catch (error) {
        
        res.status(500).json({erro: true, msg:"Erro interno do servidor"});
        
    }
}

module.exports = {
    alterarAgendamento,
    cadastrarAgendamento
}