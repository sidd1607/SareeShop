import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import backgroundImage from "../imges/bg.jpg"; // Import your image

function BackgroundImageBox() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: {
          xs: "400px", // Shorter height on mobile
          sm: "500px", // Medium height on tablets
          md: "600px", // Larger height on desktops
          lg: "728px", // Full height on larger screens
        },
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: `center ${scrollY * 0.5}px`, // Parallax effect
        backgroundRepeat: "no-repeat",
        position: "relative",
        // Black overlay for better text visibility
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          p: {
            xs: 2, // Smaller padding on mobile
            sm: 4, // Medium padding on tablets
            md: 6, // Larger padding on desktops
            lg: 12, // Full padding on larger screens
          },
        }}
      >
        <Typography
          variant="h1"
          fontWeight={700}
          color="white"
          sx={{
            textAlign: "center",
            pt: {
              xs: 12,
            },
            mb: 1,
            fontSize: {
              xs: "2rem", // Font size for small screens
              sm: "3rem", // Font size for tablets
              md: "4rem", // Font size for desktops
              lg: "5rem", // Font size for large desktops
            },
          }}
        >
          Welcome
        </Typography>
        <Typography
          variant="h3"
          fontWeight={300}
          fontStyle="italic"
          color="white"
          sx={{
            textAlign: {
              xs: "center",
            },

            fontSize: {
              xs: "1rem", // Font size for small screens
              sm: "1.5rem", // Font size for tablets
              md: "2rem", // Font size for desktops
              lg: "3rem", // Font size for large desktops
            },
          }}
        >
          Chetan Sharma
        </Typography>
        {/* <Button
          variant="contained"
          color="error"
          sx={{
            borderRadius: 5,
            mx: 74,
            my: 2,
          }}
        >
          Contained
        </Button> */}
      </Box>
    </Box>
  );
}

export default BackgroundImageBox;
