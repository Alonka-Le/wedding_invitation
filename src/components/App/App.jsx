import { useState } from "react";

// import  "./App.css";
import Hero from "../Hero/Hero";
import Countdown from "../Countdown/Countdown";
import RSVPForm from "../RSVPForm/RSVPForm";
import Gallery from "../Gallery/Gallery";
import Navigation from "../Navigtion/Navigation";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Navigation />
      <Hero />
      <Gallery />
      <Countdown />
      <RSVPForm />
      <ScrollToTop />
    </div>
  );
}

export default App;
