import React, { useEffect, useState } from "react";

import "./App.scss";

import Header from "./common/Header/Header";
import FirstSection from "./home/FirstSection/FirstSection";
import Gallery from "./home/Gallery/Gallery";

import HousingPage from "./housing/Page";

export type Housing = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
};

const fetchHousing = async (): Promise<Housing[]> => {
  const data = await fetch("/logements.json");
  const response = await data.json();

  return response;
};

function App() {
  const [housings, setHousings] = useState<Housing[]>([]);

  useEffect(() => {
    fetchHousing().then(setHousings);
  }, [setHousings]);

  console.log(housings);

  return (
    <div className="App">
      <Header />
      <FirstSection />
      <Gallery housings={housings} />
      {/* <HousingPage /> */}
    </div>
  );
}

export default App;
