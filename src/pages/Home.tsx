import React from "react";

import ImgBanner from "../components/ImgBanner/ImgBanner";
import Gallery from "../components/Gallery/Gallery";

import homeImage from "../assets/images/home_img.jpg";
import { useHousings } from "../utils/states";

function Home() {
  const { housings } = useHousings();

  return (
    <div className="content-layout page-flex">
      <ImgBanner
        title="Chez vous, partout et ailleurs"
        image={homeImage}
        isDense="true"
      />
      <Gallery housings={housings} />
    </div>
  );
}

export default Home;
