import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
import "../styles/font.scss";

function Header({ title }) {
  return (
    <header>
      <Link to="/">
        <img src="/myLogo.png" alt="Logo Kasa" />
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
