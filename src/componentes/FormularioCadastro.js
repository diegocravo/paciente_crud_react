import React, { useState } from "react";

const FormularioCadastro = () => {
  //variáveis de captura de dados
  const camposIniciaisDeValores = {
    nomeCompleto: "",
    telefone: "",
    email: "",
    endereco: "",
  };

  let { values, setValues } = useState(camposIniciaisDeValores);

  const manipuladorInputChange = (e) => {
    let { nomeCompleto, value } = e.target;

    setValues({
      ...values,
      [nomeCompleto]: value,
    });
  };

  const manipuladorFormEnvio = (e) => {
    e.preventDefault();
  };

  return (
    <fom autoComplete="off" onSubmit="{manipuladorFormEnvio}">
      <div className="form-group input-group p-1">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Nome Completo"
          name="nomeCompleto"
          value={values.nomeCompleto}
          onChange={manipuladorInputChange}
        ></input>
      </div>

      <div className="row p-1">
        <div className="form-group input-group col-md">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Telefone"
            name="telefone"
            value={values.telefone}
            onChange={manipuladorInputChange}
          ></input>
        </div>

        <div className="form-group input-group col-md">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={manipuladorInputChange}
          ></input>
        </div>
      </div>

      <div className="form-group input-group p-1">
        <input
          type="text"
          className="form-control"
          placeholder="Endereço"
          name="endereco"
          value={values.endereco}
          onChange={manipuladorInputChange}
        ></input>
      </div>
    </fom>
  );
};

export default FormularioCadastro;
