import React from "react";
import Banner from "../components/Banner";
import Gallery from "../pages/Gallery";
import Image from "../pictures/Section 1.png";

function Home() {
  return (
    <div>
      <Banner>
        <img src={Image} alt="Chez vous, partout et ailleurs" />
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>

      <Gallery />
    </div>
  );
}

export default Home;
