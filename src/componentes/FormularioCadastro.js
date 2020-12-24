import React, { useState } from "react";

const FormularioCadastro = () => {
  //variáveis de captura de dados
  const camposIniciaisDeValores = {
    nomeCompleto: "",
    telefone: "",
    email: "",
    endereco: "",
  };

  let { valor, setValues } = useState(camposIniciaisDeValores);

  return (
    <div>
      <h2>Formulario Cadastro</h2>
      <h3>Diego</h3>
    </div>
  );
};

export default FormularioCadastro;
