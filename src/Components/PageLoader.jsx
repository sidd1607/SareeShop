// src/Components/PageLoader.jsx
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import logo from "../imges/logo.png";
import "./PageLoader.css";

const PageLoader = () => {
  const [loading, setLoading] = useState(true); // State to manage loader visibility

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 0.5 seconds
    }, 500); // Adjust time if needed

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(240, 240, 240, 0.2)", // Background color during loader
            zIndex: 9999, // Ensure it is above all content
          }}
        >
          <Box
            component="img"
            src={logo} // Your logo
            alt="Loading logo"
            sx={{
              width: {
                xs: "100px", // Smaller size for mobile
                sm: "120px", // Medium size for small screens
                md: "150px", // Default size for larger screens
              },
              height: "auto",
              animation: "continuousFlip 0.6s linear infinite", // Apply flip animation
            }}
          />
        </Box>
      )}
    </>
  );
};

export default PageLoader;
