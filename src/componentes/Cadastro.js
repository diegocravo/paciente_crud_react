import React, { useState, useEffect } from "react";

import FormularioCadastro from "./FormularioCadastro";
import fireDb from "../database/firebase";

const Cadastro = () => {
  let [dadosPacientes, setDadosPacientes] = useState({});

  useEffect(() => {
    fireDb.child("pacientes").on("value", (dbPhoto) => {
      if (dbPhoto.val() != null) {
        setDadosPacientes({ ...dbPhoto.val() });
      }
    });
  }, []);

  const addEdit = (obj) => {
    fireDb.child("pacientes").push(obj, (error) => {
      if (error) {
        console.log(error);
      }
    });
  };

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Cadastro</h1>
        <p className="lead">Cadastro de Pacientes</p>
      </div>

      <div className="row">
        <div className="col-md-5">
          <FormularioCadastro addEdit={addEdit} />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <td>Nome Completo</td>
              <td>Telefone</td>
              <td>E-mail</td>
              <td>Endereço</td>
            </thead>

            <tbody>
              {Object.keys(dadosPacientes).map((id) => {
                return (
                  <tr key={id}>
                    <td>{dadosPacientes[id].nomeCompleto}</td>
                    <td>{dadosPacientes[id].telefone}</td>
                    <td>{dadosPacientes[id].email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
