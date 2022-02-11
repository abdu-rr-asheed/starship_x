import React, { useRef } from "react";
import "./App.css";
import Aboutme from "./components/Aboutme";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowToBuy from "./components/HowToBuy";
import Lunchdate from "./components/Lunchdate";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";
import Slider from "./components/Slider";
import TokenDistribution from "./components/TokenDistribution";

function App() {
  const aboutmesection = useRef(null);
  const skillssection = useRef(null);
  return (
    <div className="relative flex flex-col justify-center lg:max-w-[1356px] w-full p-2 md:p-0">
      <Header />
      <Banner />
      <Aboutme scrl={aboutmesection} />
      <TokenDistribution />
      <Slider />
      <Skills scrl={skillssection} />
      <HowToBuy />
      <Lunchdate />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
