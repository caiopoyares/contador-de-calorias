import React, { useEffect, useState } from "react";
import StyledNav from "./style";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleTest = () => {
    fetch("http://localhost:3001/api/test").then(res => console.log(res));
  };
  return (
    <StyledNav className="main-navbar">
      <div className="logo">
        <Link to="/">Calorie</Link>
      </div>
      <ul className="navbar-list">
        {false ? (
          <li className="username-greeting">Olá username</li>
        ) : (
          <>
            <li>
              <Link to="/login">Entrar</Link>
            </li>
            <li>
              <Link to="/register">Cadastrar-se</Link>
            </li>
            <li>
              <button onClick={handleTest}>Teste</button>
            </li>
          </>
        )}
      </ul>
    </StyledNav>
  );
};

export default Navbar;
