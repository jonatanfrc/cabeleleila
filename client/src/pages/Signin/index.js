import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button/index";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const Signin = () => {
  const navigate = useNavigate();

  const [cpf, setCPF] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!cpf | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    Axios.post("http://localhost:3001/usuarios/login", {
      cpf: cpf,
      senha: senha,
    }).then((response)=>{
      console.log('res', response);
      if(!response.data.err){
        navigate("/home");
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
          type="text"
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
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
