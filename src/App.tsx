import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import "./App.scss";

import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";

import Home from "./pages/Home";
import HousingPage from "./pages/Housing";
import About from "./pages/About";
import Error404 from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntryPoint />}>
          <Route path="*" element={<Error404 />} />
          <Route path="404" element={<Error404 />} />

          <Route index element={<Home />} />

          <Route path="housing" element={<Home />} />
          <Route path="housing/:housingId" element={<HousingPage />} />

          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function EntryPoint(props: any) {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
