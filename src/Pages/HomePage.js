import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Carousel from "../Components/Carousel";
import InfoBelt from "../Components/InfoBelt";

function HomePage() {
  return (
    <div className="bg-[#dcfce7]">
      <Header />

      {/* <div className="bg-[#dcfce7] w-full h-screen"> */}
        <Carousel />
        <InfoBelt name="Vegetables" images="link"/>
      <Footer />
    </div>
  );
}

export default HomePage;