import React, { useState, useEffect } from "react";
import '../../App.css';
import './Agendamento.css';
import Button from "../../components/Button/index";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import Navbar from '../../components/Navbar';

export default function CadastroAgendamentos() {

  const navigate = useNavigate();
  const [cpf, setCPF] = useState("");
  const [senha, setSenha] = useState("");
  const [servicos, setServicos] = useState([]);
  const [servicosChecked, setServicosCheck] = useState([]);
  const [error, setError] = useState("");


  const getServicos = () =>{
    Axios.post("http://localhost:3001/lista/servicos").then((response)=>{
      console.log('res', response);
      if(!response.data.err){
        setServicos(response.data.retorno);
      }else{
        alert(response.data.msg);
      }
    })
    .catch(function (error) {
      alert(error.response.data.msg);
    });
  }

  const cadastrarAgendamento = () =>{
    
  }

  const changeCheckbox = (item, index) =>{
    
  }

  useEffect(() =>{
    getServicos();
  }, []);

  return(
    <>
      <Navbar />
      <div className='cards'>
        <h2>Cadastro de Agendamento</h2>
        <div className="teste">
          <Input
            type="date"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
        </div>
        {servicos.map(function(item, index){
          return <div className="checkboxDiv"><input type="checkbox" onChange={changeCheckbox(item, index)} id={index} className="checkbox" name={index} index={index} value={item.id}/>{item.descricao}</div>
        })}
        <Button Text="Cadastrar" onClick={cadastrarAgendamento} />
      </div>
    </>
  );
}
