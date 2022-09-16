import React, { useEffect } from "react";

import ImgBanner from "../components/common/ImgBanner/ImgBanner";
import Gallery from "../components/common/Gallery/Gallery";

import homeImage from "../assets/images/home_img.jpg";
import { useHousings } from "../utils/states";

function Home() {
  const { housings } = useHousings();

  useEffect(() => {
    document.title = `Kaza`;
  }, []);

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
