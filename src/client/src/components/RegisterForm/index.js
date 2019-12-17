import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import StyledForm from "./style";
import StyledInput from "../layout/Input/style";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3001/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    history.push("/");
  };

  return (
    <div style={{ margin: "2rem auto", maxWidth: "600px" }}>
      <StyledForm onSubmit={handleSubmit}>
        <p>Cria sua conta para acessar nossa plataforma</p>
        <div className="form-fields">
          <div>
            <label htmlFor="name">Nome</label>
            <input
              name="name"
              type="text"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              name="password"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>
        <StyledInput type="submit" value="Enviar" />
      </StyledForm>
    </div>
  );
};

export default RegisterForm;
