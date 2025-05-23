import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ScrollVideo from "./components/ScrollVideo";
import FadingText from "./components/FadingText";
import SectionScroll from "./components/SectionScroll";
import SMILE from "./components/SMILE";
import StackingTestimonials from "./components/tackingTestimonials";
import Carasoul from "./components/Carasoul";
import Doctors from "./components/Doctors";
import Review from "./components/Review";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header/>
      <HeroSection />
      <ScrollVideo />
      <FadingText/>
      <SectionScroll/>
      <SMILE/>   
      <StackingTestimonials/>
      <Carasoul/>
      <Doctors/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
