import React from "react";

import FormularioCadastro from "./FormularioCadastro";

const Cadastro = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Cadastro</h1>
        <p className="lead">Cadastro de Pacientes</p>
      </div>

      <div className="row">
        <div className="col-md-5">
          <FormularioCadastro />
        </div>
        <div className="col-md-7">
          <h2>Lista de pacientes</h2>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
