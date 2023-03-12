import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Carousel from "./Components/Carousel";

function App() {
  return (
    <>
      <Header />

      <div className="bg-[#dcfce7] w-full h-screen">
        <Carousel />
      </div>
      <Footer />
    </>
  );
}

export default App;