import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import CadastroAgendamentos from "../pages/Agendamento/CadastroAgendamentos";
import ListaAgendamentos from "../pages/Agendamento/ListaAgendamentos";
import Navbar from '../components/Navbar';

const RoutesApp = () => {
  return (
    <BrowserRouter>

      <Fragment>
        <Routes>
          <Route exact path="/home" element={ <Home/>} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/lista/agendamentos" element={<ListaAgendamentos />} />
          <Route exact path="/cadastrar/agendamentos" element={<CadastroAgendamentos />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
