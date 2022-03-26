import React from "react";
import "./app.scss";
import Header from "./header/Header.jsx";
import Reviews from "./reviews/Reviews.jsx";
import Congratulations from "./congratulations/Congratulations.jsx";
import Postcards from "./postcards/Postcards.jsx";
import Footer from "./footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Reviews />
      <Congratulations />
      <Postcards />
      <Footer />
    </>
  );
}

export default App;
