import React from "react";

import "./App.scss";

import Header from "./common/Header/Header";
import Home from "./Home";
import HousingPage from "./Housing";
import About from "./About";
import Footer from "./common/Footer/Footer";
import Error404 from "./common/Error404/Error404";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      {/* <HousingPage /> */}
      <About />
      {/* <Error404 /> */}
      <Footer />
    </div>
  );
}

export default App;
