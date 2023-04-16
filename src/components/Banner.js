import React from "react";
import "../styles/Banner.scss";

function Banner({ children }) {
  return <div className="banner">{children}</div>;
}

export default Banner;
