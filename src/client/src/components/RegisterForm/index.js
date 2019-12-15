import React from "react";
import StyledForm from "./style";

const RegisterForm = () => {
  return (
    <div style={{ margin: "2rem auto", maxWidth: "600px" }}>
      <StyledForm action="/">
        <p>Cria sua conta para acessar nossa plataforma</p>
        <div>
          <label htmlFor="name">Nome</label>
          <input name="name" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" type="text" />
          <label htmlFor="password">Senha</label>
          <input name="password" type="text" />
        </div>
      </StyledForm>
    </div>
  );
};

export default RegisterForm;
