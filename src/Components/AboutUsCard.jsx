import * as React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function AboutUs({ scrollToCollection }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      {/* Founder Image */}
      <Box
        component="img"
        src="https://static01.nyt.com/images/2018/09/26/business/26INSTAGRAM01/merlin_144272775_3bb72b7b-6149-4adf-b4d0-8cb95dcc3ca1-articleLarge.jpg?quality=75&auto=webp&disable=upscale" // Replace with actual image
        alt="Founder"
        sx={{
          width: { xs: "100%", md: "40%" },
          borderRadius: "8px",
          marginBottom: { xs: 2, md: 0 },
          marginRight: { md: 4 },
        }}
      />

      {/* About Us Text */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          About Us
        </Typography>

        <Typography variant="body1" paragraph>
          Welcome to <b>Our Saree Collection</b>, where tradition meets modern
          elegance. For over 30 years, we have been dedicated to bringing you
          the finest, handpicked sarees crafted by artisans from across India.
        </Typography>

        <Typography variant="body1" paragraph>
          Our founder, <b>Chetan Sharma</b>, has a passion for preserving the
          art of saree-making, blending traditional techniques with contemporary
          designs.
        </Typography>

        <Typography variant="body1" paragraph>
          Join us in celebrating the art of saree weaving and experience luxury
          like never before.
        </Typography>

        {/* Button triggers scroll */}
        <Button
          variant="text"
          color="error"
          onClick={scrollToCollection} // Trigger scroll to collection
        >
          Explore Our Collection
        </Button>
      </Box>
    </Box>
  );
}
