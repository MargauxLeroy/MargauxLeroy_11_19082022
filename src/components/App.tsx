import React from "react";

import "../styles/App.scss";

import Header from "./Header";
import FirstSection from "./FirstSection";
import Gallery from "./Gallery";

function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection />
      <Gallery />
    </div>
  );
}

export default App;
