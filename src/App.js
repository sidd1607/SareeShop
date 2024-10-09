import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import AboutUsCard from "./Components/AboutUsCard";
import ContactForm from "./Components/ContactForm";
import New from "./Components/New";
import New2 from "./Components/New2";
import Footer from "./Components/Footer";
import Carousel from "./Components/Carousel";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import PageLoader from "./Components/PageLoader"; // Import your PageLoader component

function App() {
  const collectionRef = useRef(null);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    // Scroll to top on initial render
    window.scrollTo(0, 0);

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 0.5 seconds
    }, 500); // Adjust duration if needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="App">
      <PageLoader loading={loading} /> {/* Show loader while loading */}
      {!loading && ( // Render main content only if not loading
        <>
          <ResponsiveAppBar />
          <New />
          <New2 ref={collectionRef} />
          <ContactForm />
          <AboutUsCard
            scrollToCollection={() =>
              collectionRef.current.scrollIntoView({ behavior: "smooth" })
            }
          />
          <Carousel />
          <Footer
            scrollToCollection={() =>
              collectionRef.current.scrollIntoView({ behavior: "smooth" })
            }
          />
        </>
      )}
    </div>
  );
}

export default App;
