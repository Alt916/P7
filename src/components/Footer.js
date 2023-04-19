import React from "react";
import "../styles/Footer.scss";
import "../styles/font.scss";
import logo from "../pictures/LOGO-2.png";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
