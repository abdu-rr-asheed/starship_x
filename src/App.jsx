import React, { useRef } from "react";
import "./App.css";
import Aboutme from "./components/Aboutme";
import Banner from "./components/Banner";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowToBuy from "./components/HowToBuy";
import Lunch from "./components/lunch";
import ScrollToTop from "./components/ScrollToTop";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
// import Slider from "./components/Slider";
import TokenDistribution from "./components/TokenDistribution";
// import Video from "./components/Video";

function App() {
  const aboutmesection = useRef(null);
  // const portfoliosection = useRef(null);
  const skillssection = useRef(null);
  // const contactsection = useRef(null);
  return (
    <div className="relative flex flex-col justify-center lg:max-w-[1356px] w-full p-2 md:p-0">
      {/* <Video /> */}
      {/* <Sidebar
        aboutme={aboutmesection}
        portfolio={portfoliosection}
        skills={skillssection}
        contact={contactsection}
      /> */}
      <Header />
      <Banner />
      <Aboutme scrl={aboutmesection} />
      <TokenDistribution />
      {/* <Slider scrl={portfoliosection} /> */}
      <Skills scrl={skillssection} />
      {/* <Contact scrl={contactsection} /> */}
      <HowToBuy />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
