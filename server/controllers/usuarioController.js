const md5 = require("md5");
const sql = require("../modules/mysql");
const jwt = require("jsonwebtoken");
const funcoes = require("../funcoes");

const login = async function(req, res){

    let dados = req.body;

    console.log('dados', dados);

    try {
        let result = await sql.execSQL("SELECT id_usuario, cpf, telefone, data_nasc FROM usuarios WHERE cpf = ? AND senha = ?",[dados.cpf, md5(dados.senha)]);
        
        if(result.length == 0){

            res.status(404).json({erro: true, msg:"Login inválido"});

        }else{
            
            const id = result[0].id;

            const token = jwt.sign({id}, process.env.SECRET, {
                expiresIn:'30d'
            });

            res.json({erro: false, token: token, usuario: result[0]});

        }

    } catch (error) {
        
        res.status(500).json({erro: true, msg:"Erro interno do servidor"});
        
    }
      
}

const registro = async function(req, res){

    let dados = req.body;

    try {

        let cpf_repetido = await sql.execSQL("SELECT * FROM usuarios WHERE cpf = ?",[dados.cpf]);

        if(cpf_repetido.length != 0){
            return res.status(500).json({erro: true, msg:"CPF já cadastrado"});
        }

        dados.senha = md5(dados.senha);

        let retorno = await sql.insert("usuarios", dados, true);
        
        const token = jwt.sign({retorno}, process.env.SECRET, {
            expiresIn:'30d'
        });

        delete dados.senha;

        dados.nome_vendedor = "";

        res.json({erro: false, token: token, usuario: dados});

    } catch (error) {
        res.status(500).json({erro: true, msg:"Erro interno do servidor"});
    }

}

const listaUsuarios = async function(req, res){
    console.log('entrou')
    try {
        
        let lista_vendedores = await sql.execSQL(`SELECT
                                            id_usuario,
                                            cpf,
                                            telefone,
                                            data_nasc
                                            FROM usuarios`);

        res.json({erro: false, retorno: lista_vendedores});

    } catch (error) {
        res.status(500).json({erro: true, msg:"Erro interno do servidor"});
    }
}

module.exports = {
    login,
    registro,
    listaUsuarios
}