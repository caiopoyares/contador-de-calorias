import React from "react";
import StyledNav from "./style";
import { Link } from "react-router-dom";

const Navbar = () => {
  const username = localStorage.getItem("username");

  const handleLogout = e => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
  };

  return (
    <StyledNav className="main-navbar">
      <div className="logo">
        <Link to="/">Calorie</Link>
      </div>
      <ul className="navbar-list">
        {username ? (
          <>
            <li className="username-greeting">Olá {username}</li>
            <li onClick={handleLogout}>Logout</li>
          </>
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
