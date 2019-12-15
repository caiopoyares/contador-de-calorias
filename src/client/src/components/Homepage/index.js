import React from "react";
import { Link } from "react-router-dom";
import StyledHomeBox from "./style";

const Homepage = () => {
  return (
    <StyledHomeBox>
      <h2>Olá, seja bem-vindo</h2>
      <p>Acesse nosso contador de calorias</p>
      <div>
        <Link className="home-button" to="/login">
          Já tenho cadastro
        </Link>
        <Link className="home-button" to="/register">
          Cadastrar-se
        </Link>
      </div>
    </StyledHomeBox>
  );
};

export default Homepage;
