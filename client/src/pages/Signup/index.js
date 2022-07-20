import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button/index";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const Signup = () => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCPF] = useState("");
  const [data_nasc, setDataNasc] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!nome | !telefone | !senha | !cpf | !data_nasc) {
      setError("Preencha todos os campos");
      return;
    } 

    Axios.post("http://localhost:3001/cadastrar/usuarios", {
      nome: nome,
      senha: senha,
      cpf: cpf,
      telefone: telefone,
      data_nasc: data_nasc,
    }).then(function (response) {
      console.log('1', response);

      if(!response.data.err){
        alert("Usuário cadatrado com sucesso!");
        navigate("/");
      }else{
        alert(response.data.msg);
      }
    })
    .catch(function (error) {
      alert(error.response.data.msg);
    });
  };

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
      <Input
          type="nome"
          placeholder="Digite seu Nome"
          value={nome}
          onChange={(e) => [setNome(e.target.value), setError("")]}
        />
        <Input
          type="nome"
          placeholder="Digite seu CPF"
          value={cpf}
          onChange={(e) => [setCPF(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <Input
          type="number"
          placeholder="Digite seu Telefone"
          value={telefone}
          onChange={(e) => [setTelefone(e.target.value), setError("")]}
        />
        <Input
          type="date"
          value={data_nasc}
          onChange={(e) => [setDataNasc(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
