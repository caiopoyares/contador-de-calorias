import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import StyledForm from "../layout/Form/style";
import StyledInput from "../layout/Input/style";
import axios from "axios";

const LoginForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  let history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    if (Email.length > 0 || Password.length > 0) {
      axios
        .post("http://localhost:3001/api/login", {
          email: Email,
          password: Password
        })
        .then(res => {
          const { username, email, allowed } = res.data;
          if (allowed === true) {
            if (username && email) {
              localStorage.setItem("username", username);
              localStorage.setItem("email", email);
              history.push("/dashboard");
            }
          } else {
            setEmail("");
            setPassword("");
          }
        })
        .catch(err => console.log(err));
    } else {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div style={{ margin: "2rem auto", maxWidth: "600px" }}>
      <StyledForm onSubmit={handleSubmit}>
        <p>Acesse nosso dashboard</p>
        <div className="form-fields">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={Email}
              name="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              value={Password}
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

export default LoginForm;
