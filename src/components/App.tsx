import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import "./App.scss";

import Header from "./common/Header/Header";
import Home from "./Home";
import HousingPage from "./Housing";
import About from "./About";
import Footer from "./common/Footer/Footer";
import Error404 from "./common/Error404/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntryPoint />}>
          <Route path="*" element={<Error404 />}></Route>

          <Route index element={<Home />} />

          <Route path="housing" element={<Home />}></Route>
          <Route path="housing/:housingId" element={<HousingPage />}></Route>

          <Route path="about" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function EntryPoint(props: any) {
  console.log(props);

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />

      {/* <Error404 /> */}
    </div>
  );
}
