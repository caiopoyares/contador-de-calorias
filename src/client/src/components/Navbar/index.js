import React, { useEffect, useState } from "react";
import StyledNav from "./style";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          </>
        )}
      </ul>
    </StyledNav>
  );
};

export default Navbar;
