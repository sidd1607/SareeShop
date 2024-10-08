import { useRef } from "react";
import "./App.css";
import AboutUsCard from "./Components/AboutUsCard";
import ContactForm from "./Components/ContactForm";
import New from "./Components/New";
import New2 from "./Components/New2";
import Footer from "./Components/Footer";
import Carousel from "./Components/Carousel";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";

function App() {
  const collectionRef = useRef(null);

  const scrollToCollection = () => {
    if (collectionRef.current) {
      collectionRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scrolling effect
        block: "start", // Scroll to the start of the element
      });
    }
  };
  return (
    <div className="App ">
      <ResponsiveAppBar />
      <New />
      <New2 ref={collectionRef} />
      <ContactForm />
      <AboutUsCard scrollToCollection={scrollToCollection} />
      <Carousel />
      <Footer scrollToCollection={scrollToCollection} />
    </div>
  );
}

export default App;
