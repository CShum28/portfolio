import React, { useRef } from "react";
import Header from "../components/Header";
import FrontPage from "../components/FrontPage";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import SideBar from "../components/SideBar";

const Home = () => {
  const frontPageRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Header
        frontPageRef={frontPageRef}
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />
      <SideBar />
      <div className="w-6/12 mx-auto">
        <div ref={frontPageRef} className="h-screen w-full">
          <FrontPage portfolioRef={portfolioRef} />
        </div>
        <div ref={aboutRef}>
          <About className="w-full h-screen " />
        </div>
        <div>
          <Skills className="w-full h-screen " />
        </div>
        <div ref={portfolioRef}>
          <Portfolio className="w-full" />
        </div>
        <div ref={contactRef}>
          <Contact className="w-full h-screen " />
        </div>
      </div>
    </div>
  );
};

export default Home;
