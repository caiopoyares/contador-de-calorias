import React, { useEffect, useState } from "react";
import StyledNav from "./style";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api")
      .then(d => d.json())
      .then(r => setUserInfo(r));
  }, []);
  return (
    <StyledNav className="main-navbar">
      <div className="logo">
        <Link to="/">Contador de Caloria</Link>
      </div>
      <ul className="navbar-list">
        {userInfo ? (
          <li className="username-greeting">
            Olá {userInfo.name} {userInfo.surname}
          </li>
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
