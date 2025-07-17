import css from "./App.module.css";
import Hero from "../Hero/Hero.jsx";
import Countdown from "../Countdown/Countdown.jsx";
import RSVPForm from "../RSVPForm/RSVPForm.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import Navigation from "../Navigtion/Navigation.jsx";
import ScrollToTop from "../ScrollToTop/ScrollToTop.jsx";
import GiftList from "../GiftList/GiftList.jsx";
import WeddingColorSection from "../WeddingColorSection/WeddingColorSection.jsx";
import WeddingFAQ from "../WeddingFAQ/WeddingFAQ.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className={css.app}>
      {/* <Header /> */}
      <Navigation />
      <Hero />
      <Gallery />
      <Countdown />
      <RSVPForm />
      {/* <GiftList /> */}
      <WeddingFAQ />
      <WeddingColorSection />
      <ScrollToTop />
    </div>
  );
}

export default App;
