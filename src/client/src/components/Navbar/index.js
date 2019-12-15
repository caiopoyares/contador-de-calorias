import React, { useEffect, useState } from "react";
import StyledNav from "./style";

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
        <a href="/">Contador de Caloria</a>
      </div>
      <ul className="navbar-list">
        <li className="username-greeting">
          Olá, {userInfo ? `${userInfo.name} ${userInfo.surname}` : "Anonymous"}
        </li>
        <li>
          <a href="/login">Entrar</a>
        </li>
        <li>
          <a href="/register">Login</a>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
