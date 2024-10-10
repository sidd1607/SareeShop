import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router
import "./App.css";
import AboutUsCard from "./Components/AboutUsCard";
import ContactForm from "./Components/ContactForm";
import New from "./Components/New";
import New2 from "./Components/New2";
import Footer from "./Components/Footer";
import Carousel from "./Components/Carousel";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import PageLoader from "./Components/PageLoader";
import Catagories from "./Components/Catagories"; // Import your Categories page if you plan to use it

function App() {
  const collectionRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top on initial render
    window.scrollTo(0, 0);

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToCollection = () => {
    if (collectionRef.current) {
      collectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      {" "}
      {/* Wrap everything with Router */}
      <div className="App">
        <PageLoader loading={loading} />
        {!loading && (
          <>
            {/* Define Routes */}
            <Routes>
              {/* Default route (your main content) */}
              <Route
                path="/"
                element={
                  <>
                    <ResponsiveAppBar />
                    <New />
                    <New2 ref={collectionRef} />
                    <ContactForm />
                    <AboutUsCard scrollToCollection={scrollToCollection} />
                    <Carousel />
                    <Footer scrollToCollection={scrollToCollection} />
                  </>
                }
              />

              {/* Add a route for the Categories page */}
              <Route path="/categories" element={<Catagories />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
